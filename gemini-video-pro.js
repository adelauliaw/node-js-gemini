import dotenv from "dotenv";
dotenv.config();
import * as fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const prompt = "Silakan transkrip video ini dan berikan analisis singkat.";
        const audioParts = [
            fileToGenerativePart("video1.mp4", "video/mpeg")
        ];
        const result = await model.generateContent([prompt, ...audioParts]);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses audio:", error);
    }
}

run();
