import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(genAI, "genai")
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how gemini ai works? ";

const result = await model.generateContent(prompt);
console.log(result.response.text());