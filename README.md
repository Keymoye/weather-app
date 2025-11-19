# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration
🌦️ Weather App — Lighthouse Performance Report

Live Demo → https://weather-app-keymoye.vercel.app/

📊 Lighthouse Overview

This project was tested using Lighthouse 12.8.2 on Nov 19, 2025 (Desktop Emulation).
Below is a summary of the app’s performance across all audited categories.

🚀 Overall Scores
Category	Score
Performance	

Accessibility	

Best Practices	

SEO	
📈 Core Web Vitals
Metric	Value	Rating
FCP — First Contentful Paint	0.8 s	🟢 Excellent
LCP — Largest Contentful Paint	1.0 s	🟢 Excellent
TBT — Total Blocking Time	0 ms	🟢 Excellent
CLS — Cumulative Layout Shift	0.021	🟢 Excellent
Speed Index	0.9 s	🟢 Excellent
📉 Metric Improvements (From Baseline)
Metric	Improvement
FCP	+10
LCP	+24
TBT	+30
CLS	+25
Speed Index	+10
🖼️ Visual Screenshots

Add your Lighthouse screenshots into an /assets folder and update the paths below:

![Lighthouse Screenshot 1](./assets/lighthouse-1.png)
![Lighthouse Screenshot 2](./assets/lighthouse-2.png)
![Lighthouse Screenshot 3](./assets/lighthouse-3.png)

🔍 Insights
⚡ Performance Insights

Render-blocking requests: ~270 ms possible savings

Reduce unused JavaScript (~67 KB potential savings)

2 long main thread tasks

5 user timing marks and measures

♿ Accessibility

Passed 14 automatic audits

10 additional manual checks recommended (keyboard accessibility, ARIA roles, etc.)

🛡 Best Practices

No console errors

CSP protection active

Clickjacking + XSS mitigations

Passed 13 best-practice audits

🔎 SEO

Structured data: Valid

Passed 7 SEO audits

🧪 Test Environment

Emulated Desktop

Custom throttling

Single Page Session

Initial Page Load

Chromium 142

Lighthouse 12.8.2
