import fs from "node:fs";
import matter from "gray-matter";

import type { ContentDocument } from "./types";

export function parseMarkdownFile(filepath: string): ContentDocument {
  const source = fs.readFileSync(filepath, "utf8");

  const { data, content } = matter(source);

  return {
    metadata: {
      title: data.title,
      slug: data.slug,
      type: data.type,
      order: data.order,
      module: data.module,
      description: data.description,
      difficulty: data.difficulty,
      duration: data.duration,
      tags: data.tags ?? [],
      prerequisites: data.prerequisites ?? [],
      previous: data.previous,
      next: data.next,
    },

    content,

    source: filepath,
  };
}