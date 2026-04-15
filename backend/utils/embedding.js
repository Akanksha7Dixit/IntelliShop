import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function createEmbedding(text) {
    if (!text) throw new Error("Text is required");

    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: text,
            encoding_format: "float",
        });
        
        return response.data[0].embedding;
    } catch (error) {
        console.error("Error creating embedding:", error.message);
        throw new Error("Failed to create embedding. Check your OpenAI API Key.");
    }
}