// Génère le QR code de la fiche recette.
// Usage : pnpm qr https://mon-site.dev/recette/
import QRCode from "qrcode";
import { writeFile } from "node:fs/promises";

const url = process.argv[2] ?? process.env.RECETTE_URL ?? "https://talk-bundlers.vercel.app/recette/";
const out = new URL("../public/assets/images/qr/qrcode_recette.svg", import.meta.url);

// Ambre du thème (--theme-color-amber). Contraste faible : tester le scan sur le vidéoprojecteur.
const color = process.env.QR_COLOR ?? "#db994d";

const svg = await QRCode.toString(url, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: color, light: "#ffffff" } });
await writeFile(out, svg);
console.log(`QR code écrit pour ${url}`);
