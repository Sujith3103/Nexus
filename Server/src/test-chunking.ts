
import { sampleDocuments } from "./sample-documents.js";
import { chunkDocuments } from "./chunking.js";

const chunks = chunkDocuments(sampleDocuments);

console.log("Total chunks:", chunks.length);
console.log(JSON.stringify(chunks, null, 2));
