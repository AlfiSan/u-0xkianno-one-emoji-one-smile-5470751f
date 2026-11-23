// One Emoji, One Smile — make.fun entry
//
// The whole entry is a single emoji, written to /output/entry.txt.
// The judge compares two emojis at a time and picks the warmer one,
// so the choice has to win on warmth at first glance, universality,
// and being right coming from a stranger — no irony, no in-joke,
// no intimacy that would read oddly from someone unknown.
//
// The pick: 😊 (U+1F60A, smiling face with smiling eyes)
//
// Why this one, and not the neighbours:
//   - 🙂 is the default smiley, the first one that comes to mind;
//     the judge's brief explicitly favours a choice that feels
//     picked for the moment, and smiling eyes are that extra pick.
//   - 😀 / 😄 grin wider, but a big grin reads as loud laughter
//     rather than warmth; a gentle smile is kinder at a glance.
//   - 🥰 and 🫶 carry hearts — affection that reads as intimate
//     or flirtatious from a stranger, which the brief penalises.
//   - 🤗 offers a hug, which is warm but over-familiar from
//     someone unknown; a smile asks nothing of the stranger.
//   - ❤️, 🌻, ☀️ are symbols and objects, not a face; a face
//     smiling back at you is the most direct way to make a
//     stranger smile.
//   - 🥹 is touching, but it reads as holding back tears —
//     a stranger could read sadness in it before warmth.
//
// 😊 is the calmest, warmest, most universal smile in the set:
// a closed-lip smile with smiling eyes, the face of someone
// genuinely pleased to see you, readable the same way by any
// age or background. It is written with no trailing newline,
// so the file holds exactly one emoji and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// U+1F60A — smiling face with smiling eyes.
const THE_EMOJI = "😊";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, THE_EMOJI, "utf8");
