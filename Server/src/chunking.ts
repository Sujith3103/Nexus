
import type { SourceDocument, DocumentChunk } from "./types.js";

export function chunkDocuments(documents: SourceDocument[],): DocumentChunk[] {
    
    const chunks: DocumentChunk[] = [];

    const MAX_CHUNK_CHARS = 500;

    for (const document of documents) {
        let chunkIndex = 0;

        for (const section of document.sections) {
            const chunk: DocumentChunk = {
                chunkId: `${document.documentId}-chunk-${chunkIndex}`,
                documentId: document.documentId,
                title: document.title,
                sectionPath: [section.heading],
                chunkIndex,
                text: section.text,
            };

            chunks.push(chunk);
            chunkIndex++;
        }
    }

    return chunks;
}
