export type DocumentChunk = {
  chunkId: string;
  documentId: string;
  title: string;
  sectionPath: string[];
  chunkIndex: number;
  text: string;
  embedding?: number[];
};

export type SourceDocument = {
  documentId: string;
  title: string;
  sections: {
    heading: string;
    text: string;
  }[];
};