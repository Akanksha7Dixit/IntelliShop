export function createEmbedding(text) {
    if (!text) {
        throw new Error("Text is required");
    }

    // Simple embedding (bag-of-words style)
    const words = text.toLowerCase().split(" ");

    const vector = new Array(100).fill(0);

    words.forEach(word => {
        let hash = 0;
        for (let i = 0; i < word.length; i++) {
            hash += word.charCodeAt(i);
        }
        vector[hash % 100] += 1;
    });

    return vector;
}