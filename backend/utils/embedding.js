import { pipeline, env } from '@xenova/transformers';
import dotenv from "dotenv";

dotenv.config();

// Disable downloading models from remote if we want complete offline, but by default it downloads once and caches locally.
// We keep default behavior.

let extractor = null;

export async function createEmbedding(text) {
    if (!text) throw new Error("Text is required");

    try {
        if (!extractor) {
            // Load the feature extraction pipeline on first run.
            // all-MiniLM-L6-v2 is small (~22MB) and fast.
            extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        }

        const output = await extractor(text, { pooling: 'mean', normalize: true });
        
        // Convert Float32Array to standard JS Array
        return Array.from(output.data);
    } catch (error) {
        console.error("Error creating embedding:", error.message);
        throw new Error("Failed to create embedding locally using transformers.");
    }
}