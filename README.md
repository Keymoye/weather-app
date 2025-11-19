# 🌦️ Weather App

A modern, responsive **Weather Application** built with **React**, **Vite**, and **Tailwind CSS**.
It fetches real-time weather data from the **OpenWeatherMap API**, provides city-based search, and displays clean, minimal weather information with smooth UI animations.

---

<div align="center">

[![Vercel](https://img.shields.io/github/deployments/Keymoye/weather-app/Production?label=vercel%20deploy\&logo=vercel\&style=for-the-badge)](https://weather-app-keymoye.vercel.app)
[![CI](https://github.com/Keymoye/weather-app/actions/workflows/ci.yml/badge.svg?style=for-the-badge)](https://github.com/Keymoye/weather-app/actions)
[![License](https://img.shields.io/github/license/Keymoye/weather-app?style=for-the-badge)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/Keymoye/weather-app?style=for-the-badge\&color=yellow)](https://github.com/Keymoye/weather-app/stargazers)
[![Issues](https://img.shields.io/github/issues/Keymoye/weather-app?style=for-the-badge\&color=orange)](https://github.com/Keymoye/weather-app/issues)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge\&logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38b2ac?style=for-the-badge\&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge\&logo=vite)](https://vitejs.dev)

![Weather App Banner](./public/banner.png)

</div>

---

## ✨ Overview

The **Weather App** allows users to search and view real-time weather information for any city worldwide.
It’s powered by the **OpenWeatherMap API**, designed with a **modern gradient UI**, and optimized for **performance, accessibility, and responsiveness**.

![Weather App Screenshot](./public/screenshot.png)
🧭 **Live Demo:** [weather-app-keymoye.vercel.app](https://weather-app-keymoye.vercel.app)

---

## 🚀 Features

|  🌟 | Feature               | Description                                               |
| :-: | :-------------------- | :-------------------------------------------------------- |
|  🔍 | **City Search**       | Get current weather for any location worldwide            |
|  📊 | **Dynamic Data**      | Displays temperature, humidity, wind speed, and condition |
|  🎨 | **Adaptive UI**       | Background color adapts to weather condition              |
|  📱 | **Responsive Design** | Fully optimized for mobile and desktop                    |
|  ⚡  | **Fast Load Times**   | Powered by Vite for blazing-fast builds                   |
|  ❌  | **Error Handling**    | Gracefully handles invalid or empty searches              |
|  ☁️ | **Cloud Deployment**  | Hosted live on Vercel                                     |

---

## 🛠️ Tech Stack

| Category       | Technology        |
| -------------- | ----------------- |
| **Frontend**   | React, Vite       |
| **Styling**    | Tailwind CSS      |
| **API**        | OpenWeatherMap    |
| **Deployment** | Vercel            |
| **Language**   | JavaScript (ES6+) |

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── assets/              # Images, icons, background images
│   │   └── img/
│   │       └── bg.webp
│   ├── components/          # Reusable UI components
│   │   ├── LoadingSpinner.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherSearchBar.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useWeather.js
│   ├── services/            # API services
│   │   └── weatherApi.js
│   ├── utils/               # Helper functions
│   │   └── weatherIcons.jsx
│   ├── App.jsx              # Root app component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── .env.example             # Example environment variables
├── .gitignore
├── package.json
├── eslint.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

You can get a free API key from [OpenWeatherMap](https://openweathermap.org/api).

---

## 🧩 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Keymoye/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment**

```bash
cp .env.example .env
# Add your OpenWeatherMap API key
```

4. **Run locally**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

---

## 🌍 Deployment

The app is deployed via **Vercel**.
🧭 **Live Site:** [weather-app-keymoye.vercel.app](https://weather-app-keymoye.vercel.app)

---

## 📊 Lighthouse Performance Report

| Category           | Score |
| ------------------ | :---: |
| **Performance**    |   98  |
| **Accessibility**  |  100  |
| **Best Practices** |   96  |
| **SEO**            |  100  |

### Core Web Vitals

| Metric                         | Value |
| ------------------------------ | ----- |
| FCP (First Contentful Paint)   | 0.8 s |
| LCP (Largest Contentful Paint) | 1.0 s |
| TBT (Total Blocking Time)      | 0 ms  |
| CLS (Cumulative Layout Shift)  | 0.021 |
| Speed Index                    | 0.9 s |

**Screenshots:**

```markdown
![Lighthouse - Final Screenshot](./assets/lighthouse-final.png)
![Lighthouse - Filmstrip 1](./assets/lighthouse-1.png)
![Lighthouse - Filmstrip 2](./assets/lighthouse-2.png)
```

---

## 🧪 Test Environment

* **Emulated Device:** Desktop
* **Browser / Engine:** Chromium 142.0.0.0
* **Lighthouse Version:** 12.8.2
* **Session:** Single-page load
* **Throttling:** Custom

---

## 🧠 Highlights

* Optimized Performance: Lighthouse score above 95 across categories
* Accessible Design: ARIA labels, semantic HTML, responsive UI
* Reusable Components: SearchBar & WeatherCard
* Minimal Dependencies, Simple Architecture, Easy to Scale
* Secure: API key stored in `.env`

---

## 🪪 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

---
## 🧑‍💻 Author

**Maxwell Kimoi (Keymoye)**  
📍 Nairobi, Kenya  
💼 Full-Stack Developer | React • Next.js • Tailwind CSS  
🌐 [Portfolio]((https://keymoye-portfolio.vercel.app/) | 🐙 [GitHub](https://github.com/Keymoye) | 📧 bowenmaxwell9@gmail.com


---

⭐ If you like this project, don’t forget to star the repo!

---
