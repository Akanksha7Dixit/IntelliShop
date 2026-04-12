// import dotenv from "dotenv";
// dotenv.config();

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const createEmbedding = async (text) => {
//   const response = await openai.embeddings.create({
//     model: "text-embedding-3-small",
//     input: text,
//   });

//   return response.data[0].embedding;
// };

export const createEmbedding = async (text) => {
  // simple fake embedding (convert text → numbers)
  return text.split("").map((char) => char.charCodeAt(0) % 10);
};