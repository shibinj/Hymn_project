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
  cat: category/categories (Kristheeya Keerthanangal songs only) — use this to find songs by theme or occasion

Kristheeya Keerthanangal categories and what they cover:
- Morning Songs (1–7): Songs for morning devotion
- Evening Songs (8–15): Songs for evening devotion
- Worship & Praise (16–112, 428–430): General worship, opening hymns, adoration
- Thanksgiving (431–437): Songs of thanksgiving
- Christmas Songs (113–131, 421–423): Birth of Christ, nativity
- Palm Sunday (132–135, 438): Entry of Jesus into Jerusalem
- Passion Week (136–151, 439–442): Suffering and crucifixion of Christ
- Resurrection (152–158, 443): Easter, risen Christ
- Ascension (159–161): Jesus ascending to heaven
- Counsel and Correction (162–165): Guidance and rebuke
- Call to Christ (166–183, 444–446): Invitation to accept Christ
- The Savior's Call (184–188, 349): Christ calling sinners
- Holy Spirit (187–196, 447): Songs about the Holy Spirit
- Word of God (197–203, 448–450): Scripture and God's word
- Repentance (204–212, 451): Songs of repentance and confession
- Consecration (213–236, 452–455): Surrender and dedication to God
- Belief (237–265, 456–477): Faith and trust in God
- Comfort (266–284, 409–415, 480–486): Consolation, God's care
- Bliss of Salvation (285–298, 478–479): Joy of being saved
- Gospel Work (299–312): Evangelism and missionary work
- Holy Communion (313–316): Qurbana / Lord's Supper songs
- Wedding (317–321): Marriage and wedding songs
- Prayer in Times of Sorrow (322–323): Lament and petition
- Funeral (324–325): Songs for the departed
- Church Consecration (326–327): Dedication of church buildings
- Songs of Ascents (328–332): Pilgrimage and worship approach
- Songs for Kids (333–338): Children's songs
- Psalms (339–343): Psalm-based songs
- Longing of Revival (344–350): Songs longing for spiritual renewal
- God's Grace (351–357): God's grace and mercy
- Love (358–367): God's love and love for God
- Prayer (368–378): Songs about prayer and intercession
- Service (379–387): Christian service and warfare
- Second Coming of Christ (388–400): Christ's return and end times
- Presence of Christ (401–406): Dwelling in God's presence
- Christ and Church (407–408): The Church as body of Christ
- Visit Those in Sickness (416): Songs for the sick
- New Year (417–420, 503): New year and new beginnings
- General Hymns (424–427, 492–500): Miscellaneous hymns
- Hope (487–489): Songs of hope
- Christian Family (490–491): Family and home
- Ordination Service (501–502): Ordination of ministers
- Ecumenical Sunday (504): Unity of the church

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
