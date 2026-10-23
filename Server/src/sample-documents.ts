
import type { SourceDocument } from "./types.js";

export const sampleDocuments: SourceDocument[] = [
  {
    documentId: "article-001",
    title: "Understanding Database Buffer Pools",
    sections: [
      {
        heading: "Why Databases Use Buffer Pools",
        text:
          "Databases store table data in fixed-size pages on disk. Reading from disk is much slower than accessing data in RAM. A buffer pool is a region of memory that keeps copies of database pages so frequently accessed data can be read without repeatedly accessing the disk. When a query needs a page, the database first checks whether that page is already in memory.",
      },
      {
        heading: "Page Eviction and Cache Misses",
        text:
          "A buffer pool has a limited amount of memory. When it becomes full and a query needs a page that is not cached, the database may need to evict an existing page to make room. An eviction policy helps choose which page to remove. If a requested page is absent from memory, a cache miss occurs and the database must retrieve the page from storage. A good eviction policy tries to keep frequently or recently useful pages in memory, reducing expensive disk reads.",
      },
    ],
  },
];
