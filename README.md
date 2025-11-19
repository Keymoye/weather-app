# 🌦️ Weather App — Lighthouse Performance Report

**Live demo:** [https://weather-app-keymoye.vercel.app/](https://weather-app-keymoye.vercel.app/)
**Lighthouse run:** Captured **Nov 19, 2025 — 09:39 AM (GMT+3)** using **Lighthouse 12.8.2** (Emulated Desktop, Chromium 142)

---

## 📊 Summary (copy-paste ready)

**Overall scores**

|       Category | Score |
| -------------: | :---: |
|    Performance |   98  |
|  Accessibility |  100  |
| Best Practices |   96  |
|            SEO |  100  |

---

## 📈 Core Web Vitals (filled)

| Metric (abbrev.)               | Value | Comment   |
| ------------------------------ | ----: | --------- |
| First Contentful Paint (FCP)   | 0.8 s | Excellent |
| Largest Contentful Paint (LCP) | 1.0 s | Excellent |
| Total Blocking Time (TBT)      |  0 ms | Excellent |
| Cumulative Layout Shift (CLS)  | 0.021 | Excellent |
| Speed Index (SI)               | 0.9 s | Excellent |

> **Note:** Values were taken from the Lighthouse run captured above. Values are estimated and may vary between runs.

---

## 📉 Metric deltas (as provided)

These are the improvement deltas you gave (kept exactly):

* FCP: +10
* LCP: +24
* TBT: +30
* CLS: +25
* Speed Index: +10

---

## 🖼️ Visuals / Screenshots

Add the Lighthouse screenshots to your repo and reference them here. Example (place your screenshots in `/assets`):

```md
![Lighthouse - final screenshot](./assets/lighthouse-final.png)
![Lighthouse - filmstrip 1](./assets/lighthouse-1.png)
![Lighthouse - filmstrip 2](./assets/lighthouse-2.png)
```

---

## 🔍 Key insights & quick action items

**Performance**

* Render-blocking requests — estimated savings **~270 ms**. Consider deferring noncritical CSS/JS and using `preload` for key assets.
* Remove / split unused JavaScript — estimated savings **~67 KiB**.
* Avoid long main-thread tasks (2 long tasks reported); break heavy work into smaller tasks or web workers.
* Use Lighthouse / DevTools CPU throttling to reproduce and measure improvements.

**Accessibility**

* Automatic audits passed; there are **10 recommended manual checks**: keyboard focus order, ARIA labels/roles for custom controls, visible focus indicators, landmark usage, offscreen content hidden from AT, etc. Run a screen-reader test and keyboard-only navigation.

**Best Practices**

* Fix any console errors and verify CSP, COOP, and other headers to mitigate XSS/clickjacking risks.
* Verify Trusted Types if your app uses dynamic HTML insertion.

**SEO**

* Structured data is valid; follow additional validators if you add more structured data (sitemaps, robots, canonical tags).

---

## 🧪 Test environment (metadata)

* Emulated: **Desktop**
* Chromium: **142.0.0.0** (via DevTools)
* Lighthouse: **12.8.2**
* Session: **Single page session / Initial page load**
* Throttling: **Custom**
* Generated: **Nov 19, 2025 — 09:39 AM (GMT+3)**

---
