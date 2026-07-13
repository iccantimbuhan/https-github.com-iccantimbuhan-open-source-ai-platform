import fs from "node:fs";
import path from "node:path";

export function writeJson(
  filename: string,
  data: unknown
) {
  const outputDir = path.resolve(
    "website/src/generated"
  );

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  fs.writeFileSync(
    path.join(outputDir, filename),
    JSON.stringify(data, null, 2),
    "utf8"
  );

  console.log(`✅ Generated ${filename}`);
}