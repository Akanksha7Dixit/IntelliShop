export function createEmbedding(text) {
    if (!text) throw new Error("Text is required");

    const words = text.toLowerCase().split(" ");

    // keyword-based vector
    const keywords = [
        "laptop", "phone", "smartphone", "camera",
        "gaming", "performance", "battery", "display",
        "ultrabook", "lightweight", "music", "headphones"
    ];

    const vector = new Array(keywords.length).fill(0);

    words.forEach(word => {
        keywords.forEach((key, index) => {
            if (word.includes(key)) {
                vector[index] += 1;
            }
        });
    });

    return vector;
}