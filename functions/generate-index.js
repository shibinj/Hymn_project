/**
 * One-time script to build hymn-index.json from the data/ directory.
 * Run with: node generate-index.js
 * Re-run whenever songs are added or updated.
 */

const fs = require("fs");
const path = require("path");

const collections = [
  { file: "kristheeya-keerthanangal.json", id: "kristheeya-keerthanangal", name: "Kristheeya Keerthanangal" },
  { file: "maramon-2006.json",             id: "maramon-2006",             name: "Maramon Convention 2006" },
  { file: "maramon-2008.json",             id: "maramon-2008",             name: "Maramon Convention 2008" },
  { file: "maramon-2013.json",             id: "maramon-2013",             name: "Maramon Convention 2013" },
  { file: "maramon-2021.json",             id: "maramon-2021",             name: "Maramon Convention 2021" },
  { file: "maramon-2023.json",             id: "maramon-2023",             name: "Maramon Convention 2023" },
  { file: "maramon-2024.json",             id: "maramon-2024",             name: "Maramon Convention 2024" },
  { file: "maramon-2025.json",             id: "maramon-2025",             name: "Maramon Convention 2025" },
  { file: "maramon-2026.json",             id: "maramon-2026",             name: "Maramon Convention 2026" },
  { file: "passion-week.json",             id: "passion-week",             name: "Passion Week" },
  { file: "holy-communion.json",           id: "holy-communion",           name: "Holy Communion" },
  { file: "birthday-anniversary.json",     id: "birthday-anniversary",     name: "Birthday & Anniversary" },
  { file: "kottarakara-2025.json",         id: "kottarakara-2025",         name: "Kottarakara Convention 2025" },
  { file: "kottarakara-2026.json",         id: "kottarakara-2026",         name: "Kottarakara Convention 2026" },
];

const index = [];
const dataDir = path.join(__dirname, "..", "data");

// Preserve existing category metadata
const existingCatMap = new Map();
const dataIndexPath = path.join(dataDir, "hymn-index.json");
if (fs.existsSync(dataIndexPath)) {
  try {
    const existing = JSON.parse(fs.readFileSync(dataIndexPath, "utf8"));
    for (const item of existing) {
      if (item.cat) existingCatMap.set(`${item.col}_${item.n}`, item.cat);
    }
  } catch (e) {
    console.warn("Could not read existing category metadata:", e.message);
  }
}

for (const col of collections) {
  const filePath = path.join(dataDir, col.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skipping missing file: ${col.file}`);
    continue;
  }
  const songs = JSON.parse(fs.readFileSync(filePath, "utf8"));
  for (const song of songs) {
    let cat = song.category ? (Array.isArray(song.category) ? song.category : [song.category]) : existingCatMap.get(`${col.id}_${song.number}`);
    if (!cat) {
      if (col.id.startsWith("maramon-")) cat = ["Maramon Convention"];
      else if (col.id.startsWith("kottarakara-")) cat = ["Kottarakara Convention"];
      else if (col.id === "holy-communion") cat = ["Holy Communion"];
      else if (col.id === "passion-week") cat = ["Passion Week"];
      else if (col.id === "birthday-anniversary") cat = ["Birthday & Anniversary"];
    }

    const entry = {
      n: song.number,
      name: song.name || "",
      name2: song.name2 || "",
      col: col.id,
      colName: col.name,
    };
    if (cat) entry.cat = cat;
    index.push(entry);
  }
  console.log(`  ${col.name}: ${songs.length} songs`);
}

const functionsOutPath = path.join(__dirname, "hymn-index.json");
const dataOutPath = path.join(dataDir, "hymn-index.json");

fs.writeFileSync(functionsOutPath, JSON.stringify(index));
fs.writeFileSync(dataOutPath, JSON.stringify(index));
console.log(`\nDone. hymn-index.json written to functions/ and data/ with ${index.length} total songs.`);
