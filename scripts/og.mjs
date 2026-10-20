import { chromium } from "playwright";

/* Builds public/og.jpg (1200x630) from the live preview using site type. */
const BASE = process.env.BASE || "http://127.0.0.1:4400";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await page.goto(BASE, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

await page.evaluate(() => {
  const card = document.createElement("div");
  card.id = "og-card";
  card.style.cssText = [
    "position:fixed",
    "inset:0",
    "z-index:1000",
    "background:#0A0B0A",
    "overflow:hidden",
    "font-family:Archivo,system-ui,sans-serif",
  ].join(";");

  card.innerHTML = `
    <img src="/hero-wide.jpg" alt=""
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 40%;filter:brightness(0.55) contrast(1.08) saturate(0.5)" />
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,11,10,0.85) 0%,rgba(10,11,10,0.15) 45%,rgba(10,11,10,0.92) 100%)"></div>
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:44px 52px 42px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(243,239,228,0.72)">
        <span style="display:flex;align-items:center;gap:12px">
          <span style="width:8px;height:8px;background:#E39E4B;display:inline-block"></span>
          Independent creative studio
        </span>
        <span>Accra, Ghana / Working worldwide</span>
      </div>

      <div>
        <p style="margin:0 0 14px;font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-size:58px;line-height:1;color:#E39E4B;letter-spacing:-0.015em">
          Imagine. Then let us build.
        </p>
        <p style="margin:0;font-weight:800;font-stretch:108%;font-size:132px;line-height:0.82;letter-spacing:-0.055em;text-transform:uppercase;color:#F3EFE4">
          Decani
        </p>
        <p style="margin:22px 0 0;font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(243,239,228,0.78)">
          Brand / Digital / Campaigns
        </p>
      </div>
    </div>
  `;
  document.body.appendChild(card);
});

await page.waitForTimeout(400);
await page.screenshot({
  path: "public/og.jpg",
  type: "jpeg",
  quality: 88,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log("wrote public/og.jpg");
