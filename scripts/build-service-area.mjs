// One-off: fetch each suburb boundary from OpenStreetMap,
// merge into a single polygon, write scripts/service-area.json.
// Run: node scripts/build-service-area.mjs
// Re-run only when the suburb list changes.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { union, buffer, area, featureCollection } from "@turf/turf";
import { suburbs } from "./suburbs.mjs";

// Gap-close distance (km). OSM suburb boundaries don't perfectly tile —
// adjacent edges leave slivers. Dilating each polygon by this much before
// the union, then eroding the merged shape by the same amount, dissolves
// those slivers without inflating the outer perimeter.
const CLOSE_KM = 0.15;

const __dirname = dirname(fileURLToPath(import.meta.url));

// Nominatim asks for an identifying UA and max 1 request/sec.
const HEADERS = { "User-Agent": "3icons-driving-school/1.0 (build script)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchBoundary(suburb) {
  const url =
    "https://nominatim.openstreetmap.org/search" +
    `?q=${encodeURIComponent(`${suburb}, Victoria, Australia`)}` +
    "&format=json&polygon_geojson=1&limit=5";

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();

  const isArea = (r) =>
    r.geojson &&
    (r.geojson.type === "Polygon" || r.geojson.type === "MultiPolygon");

  // The suburb is the administrative boundary. Other polygon results
  // (e.g. Epping's railway station) can sort first — pick the locality.
  const match =
    data.find(
      (r) => isArea(r) && r.class === "boundary" && r.type === "administrative",
    ) ?? data.find(isArea);
  return match?.geojson ?? null;
}

// Keep only exterior rings — a solid fill should have no interior gaps.
function stripHoles(geometry) {
  if (geometry.type === "Polygon") {
    geometry.coordinates = [geometry.coordinates[0]];
  } else if (geometry.type === "MultiPolygon") {
    geometry.coordinates = geometry.coordinates.map((poly) => [poly[0]]);
  }
}

// Drop detached specks (erosion artifacts) under MIN_KM2; keep real regions.
const MIN_KM2 = 0.1;
function dropSlivers(geometry) {
  if (geometry.type !== "MultiPolygon") return;
  geometry.coordinates = geometry.coordinates.filter(
    (poly) =>
      area({ type: "Polygon", coordinates: poly }) >= MIN_KM2 * 1_000_000,
  );
}

const features = [];

for (const suburb of suburbs) {
  const geometry = await fetchBoundary(suburb);
  if (!geometry) {
    console.error(`${suburb}: no boundary polygon`);
    continue;
  }
  // Dilate so adjacent suburbs overlap and slivers close on union.
  const grown = buffer({ type: "Feature", properties: { suburb }, geometry }, CLOSE_KM, {
    units: "kilometers",
  });
  features.push(grown);
  console.log(`${suburb} -> ${geometry.type}`);
  await sleep(1100);
}

// Merge every suburb polygon into one shape (internal edges dissolve).
let merged = features[0];
for (let i = 1; i < features.length; i++) {
  merged = union(featureCollection([merged, features[i]]));
}

// Erode back by the same distance to restore the true outer perimeter,
// then drop any interior holes so the service area renders solid.
merged = buffer(merged, -CLOSE_KM, { units: "kilometers" });
stripHoles(merged.geometry);
dropSlivers(merged.geometry);

merged.properties = { name: "service-area" };

writeFileSync(
  join(__dirname, "service-area.json"),
  JSON.stringify({ type: "FeatureCollection", features: [merged] }, null, 2) +
    "\n",
);
console.log(`\nMerged ${features.length} suburbs into service-area.json.`);
