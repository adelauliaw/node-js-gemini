import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC1UG9qK1QkOpeazHv-A2nZIXSz31btZQQ");
console.log(genAI)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how gemini ai works? ";

const result = await model.generateContent(prompt);
console.log(result.response.text());