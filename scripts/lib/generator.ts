import fg from "fast-glob";
import path from "node:path";

import { parseMarkdownFile } from "./parser";
import type { ContentDocument } from "./types";

export function generateContent(): ContentDocument[] {
  const files = fg.sync("docs/**/*.md");

  return files
    .map((file) => path.resolve(file))
    .map(parseMarkdownFile)
    .sort(
      (a, b) =>
        a.metadata.order - b.metadata.order
    );
}