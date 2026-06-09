// One-off: geocode service suburbs to locality place IDs.
// Run: node scripts/fetch-place-ids.mjs
// Writes scripts/place-ids.json. Re-run only when suburbs change.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { suburbs } from "./suburbs.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read key from .env.local.
const env = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
const key = env.match(/NEXT_PUBLIC_GOOGLE_API_KEY=(.+)/)?.[1]?.trim();
if (!key) throw new Error("NEXT_PUBLIC_GOOGLE_API_KEY missing in .env.local");

const result = {};

for (const suburb of suburbs) {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json" +
    `?address=${encodeURIComponent(`${suburb}, VIC, Australia`)}` +
    `&key=${key}`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== "OK") {
    console.error(`${suburb}: ${data.status} ${data.error_message ?? ""}`);
    continue;
  }

  const match = data.results.find((r) => r.types.includes("locality"));
  if (!match) {
    console.error(`${suburb}: no locality result`);
    continue;
  }

  result[suburb] = match.place_id;
  console.log(`${suburb} -> ${match.place_id}`);
}

writeFileSync(
  join(__dirname, "place-ids.json"),
  JSON.stringify(result, null, 2) + "\n",
);
console.log(`\nWrote ${Object.keys(result).length} place ids.`);