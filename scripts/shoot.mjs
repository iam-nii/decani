import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE || "http://127.0.0.1:4400";
const OUT = path.resolve(".shots");
fs.mkdirSync(OUT, { recursive: true });

const report = { console: [], pageErrors: [], failed: [], pages: {} };

async function waitForAssets(page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(1400);
}

async function measure(page, name) {
  const data = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflow = doc.scrollWidth - window.innerWidth;
    const smallTargets = [];
    document.querySelectorAll("a, button, input, select, textarea").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.width < 24 || r.height < 24) {
        smallTargets.push({
          tag: el.tagName,
          text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
          w: Math.round(r.width),
          h: Math.round(r.height),
        });
      }
    });
    return {
      overflow,
      scrollHeight: doc.scrollHeight,
      title: document.title,
      h1: [...document.querySelectorAll("h1")].map((el) => el.textContent.trim()),
      smallTargets: smallTargets.slice(0, 20),
      imagesNoAlt: [...document.querySelectorAll("img:not([alt])")].length,
    };
  });
  report.pages[name] = data;
  return data;
}

async function scrollShots(page, prefix, steps) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let i = 0; i < steps; i++) {
    const y = Math.round((height - 900) * (i / (steps - 1)));
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(OUT, `${prefix}-${i + 1}.png`) });
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

const browser = await chromium.launch();

/* Desktop */
const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await desktop.newPage();
page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    report.console.push(`${msg.type()}: ${msg.text()}`);
  }
});
page.on("pageerror", (err) => report.pageErrors.push(String(err)));
page.on("requestfailed", (req) =>
  report.failed.push(`${req.url()} :: ${req.failure()?.errorText}`),
);

await page.goto(BASE, { waitUntil: "load" });
await waitForAssets(page);
await page.screenshot({ path: path.join(OUT, "desktop-hero.png") });
await measure(page, "desktop-home");
await scrollShots(page, "desktop", 8);
await page.screenshot({ path: path.join(OUT, "desktop-full.png"), fullPage: true });

/* Hover a service to capture the plate */
await page.evaluate(() => {
  const el = document.getElementById("services");
  if (el) window.scrollTo(0, el.offsetTop - 60);
});
await page.waitForTimeout(600);
const creativeTab = page.getByRole("tab", { name: /UI\/UX Design/ });
if (await creativeTab.count()) {
  await creativeTab.hover();
  await page.waitForTimeout(900);
}
await page.screenshot({ path: path.join(OUT, "desktop-services-state.png") });

/* Contact */
await page.goto(`${BASE}/contact`, { waitUntil: "load" });
await waitForAssets(page);
await measure(page, "desktop-contact");
await page.screenshot({ path: path.join(OUT, "desktop-contact.png"), fullPage: true });

/* 404 */
await page.goto(`${BASE}/missing-page`, { waitUntil: "load" });
await waitForAssets(page);
await measure(page, "desktop-404");
await page.screenshot({ path: path.join(OUT, "desktop-404.png") });

/* Mobile */
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mpage = await mobile.newPage();
mpage.on("pageerror", (err) => report.pageErrors.push(`mobile: ${err}`));
await mpage.goto(BASE, { waitUntil: "load" });
await waitForAssets(mpage);
await mpage.screenshot({ path: path.join(OUT, "mobile-hero.png") });
await measure(mpage, "mobile-home");
await scrollShots(mpage, "mobile", 8);
await mpage.screenshot({ path: path.join(OUT, "mobile-full.png"), fullPage: true });

/* Mobile menu */
await mpage.evaluate(() => window.scrollTo(0, 0));
await mpage.waitForTimeout(400);
await mpage.getByRole("button", { name: /menu/i }).click();
await mpage.waitForTimeout(900);
await mpage.screenshot({ path: path.join(OUT, "mobile-menu.png") });
await mpage.keyboard.press("Escape");

await mpage.goto(`${BASE}/contact`, { waitUntil: "load" });
await waitForAssets(mpage);
await measure(mpage, "mobile-contact");
await mpage.screenshot({ path: path.join(OUT, "mobile-contact.png"), fullPage: true });

/* Reduced motion */
const reduced = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const rpage = await reduced.newPage();
await rpage.goto(BASE, { waitUntil: "load" });
await waitForAssets(rpage);
await rpage.screenshot({ path: path.join(OUT, "reduced-hero.png") });
const hidden = await rpage.evaluate(() => {
  const problems = [];
  document.querySelectorAll("h1, h2, h3, p, img, a, button").forEach((el) => {
    if (el.closest("[aria-hidden='true']") || el.getAttribute("aria-hidden") === "true") return;
    const style = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (r.height > 0 && r.width > 0 && parseFloat(style.opacity) < 0.3) {
      problems.push({
        tag: el.tagName,
        text: (el.textContent || "").trim().slice(0, 30),
        opacity: style.opacity,
      });
    }
  });
  return problems.slice(0, 10);
});
report.pages["reduced"] = { hidden };

fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));

await browser.close();
console.log(JSON.stringify(report, null, 2));
