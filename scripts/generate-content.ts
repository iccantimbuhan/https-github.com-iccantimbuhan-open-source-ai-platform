import { generateContent } from "./lib/generator";
import { writeJson } from "./lib/writer";

const documents = generateContent();

writeJson("content.json", documents);

console.log(
  `\n🎉 Generated ${documents.length} documents`
);