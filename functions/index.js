const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const { defineSecret } = require("firebase-functions/params");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");
const fs = require("fs");

setGlobalOptions({ maxInstances: 10 });

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

// Load hymn index once at cold start
const hymnIndex = JSON.parse(
  fs.readFileSync(path.join(__dirname, "hymn-index.json"), "utf8")
);

const SYSTEM_PROMPT = `You are a helpful assistant for "Holy Hymns", a Malayalam Christian songs collection app.
You help users find songs by theme, occasion, lyrics fragment, or name (English or Malayalam).

You have access to an index of ${hymnIndex.length} songs across these collections:
- Kristheeya Keerthanangal (517 hymns — the main collection)
- Maramon Convention (2013, 2021, 2023–2026)
- Kottarakara Convention (2025, 2026)
- Passion Week, Holy Communion, Birthday & Anniversary

Here is the full song index (JSON array). Each entry has:
  n: song number, name: English name, name2: Malayalam name, col: collection ID, colName: collection name

SONG INDEX:
${JSON.stringify(hymnIndex)}

When a user asks for songs, respond with:
1. A short friendly message
2. A JSON block at the end in this exact format (even if only one song):
<songs>
[{"n":1,"col":"kristheeya-keerthanangal","name":"Song Name","colName":"Kristheeya Keerthanangal"}]
</songs>

If no songs match, respond helpfully without a <songs> block.
Keep responses concise. Respond in the same language the user writes in (English or Malayalam).`;

exports.hymnChat = onRequest(
  { secrets: [GEMINI_API_KEY], cors: true, invoker: "public" },
  async (req, res) => {
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const { query, history = [] } = req.body;
    if (!query || typeof query !== "string" || query.trim().length === 0) {
      res.status(400).json({ error: "query is required" });
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY.value());
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT,
      });

      // Build chat history for multi-turn conversation
      const chat = model.startChat({
        history: history.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.text }],
        })),
      });

      const result = await chat.sendMessage(query.trim());
      const text = result.response.text();

      // Parse out <songs> block if present
      const songsMatch = text.match(/<songs>([\s\S]*?)<\/songs>/);
      let songs = [];
      let reply = text;

      if (songsMatch) {
        try {
          songs = JSON.parse(songsMatch[1].trim());
        } catch (_) {
          songs = [];
        }
        reply = text.replace(/<songs>[\s\S]*?<\/songs>/, "").trim();
      }

      res.set("Access-Control-Allow-Origin", "*");
      res.status(200).json({ reply, songs });
    } catch (err) {
      console.error("hymnChat error:", err);
      res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  }
);
