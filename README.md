
---

📘 README.md — Weather App (Final Polished Version)

<div align="center">

<div align="center">

# 🌦️ Weather App

*A sleek, fast, and responsive weather forecast application — built with **React**, **Vite**, and **Tailwind CSS**.*

[![Vercel](https://img.shields.io/github/deployments/Keymoye/weather-app/Production?label=vercel%20deploy&logo=vercel&style=for-the-badge)](https://weather-app-keymoye.vercel.app)
[![CI](https://github.com/Keymoye/weather-app/actions/workflows/ci.yml/badge.svg?style=for-the-badge)](https://github.com/Keymoye/weather-app/actions)
[![License](https://img.shields.io/github/license/Keymoye/weather-app?style=for-the-badge)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/Keymoye/weather-app?style=for-the-badge&color=yellow)](https://github.com/Keymoye/weather-app/stargazers)
[![Issues](https://img.shields.io/github/issues/Keymoye/weather-app?style=for-the-badge&color=orange)](https://github.com/Keymoye/weather-app/issues)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38b2ac?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge&logo=vite)](https://vitejs.dev)

![Weather App Banner](./public/banner.png)

</div>

---

## ✨ Overview

The **Weather App** allows users to search and view real-time weather information for any city worldwide.  
It’s powered by the **OpenWeatherMap API**, designed with a **modern gradient UI**, and optimized for speed, accessibility, and responsiveness.

🧭 **Live Demo:** [weather-app-keymoye.vercel.app](https://weather-app-keymoye.vercel.app)

---

## 🚀 Features

| 🌟 | Feature | Description |
|:--:|:--|:--|
| 🔍 | **City Search** | Get current weather for any location worldwide |
| 📊 | **Dynamic Data** | Displays temperature, humidity, wind speed, and condition |
| 🎨 | **Adaptive UI** | Background color adapts to weather condition |
| 📱 | **Responsive Design** | Fully optimized for mobile and desktop |
| ⚡ | **Fast Load Times** | Powered by Vite for blazing-fast builds |
| ❌ | **Error Handling** | Gracefully handles invalid or empty searches |
| ☁️ | **Cloud Deployment** | Hosted live on Vercel |

---

## 🛠️ Tech Stack

| Area | Technologies |
|------|---------------|
| **Frontend** | React, Vite |
| **Styling** | Tailwind CSS |
| **API** | OpenWeatherMap |
| **Deployment** | Vercel |
| **Language** | JavaScript (ES6+) |

---

## 📁 Project Structure

weather-app/ │ ├── public/ │   ├── icons/ │   ├── favicon.ico │   └── banner.png │ ├── src/ │   ├── components/ │   │   ├── SearchBar.jsx │   │   └── WeatherCard.jsx │   ├── hooks/ │   │   └── useWeather.js │   ├── utils/ │   │   └── formatWeatherData.js │   ├── App.jsx │   ├── index.jsx │   └── styles.css │ ├── .env.example ├── package.json ├── tailwind.config.js ├── vite.config.js └── README.md

---

## 🔑 Environment Variables

Create a `.env` file in your project root:

```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here

🔗 Get your free API key here →


---

⚙️ Getting Started

🧩 Installation

1️⃣ Clone the repository

git clone https://github.com/Keymoye/weather-app.git
cd weather-app

2️⃣ Install dependencies

npm install

3️⃣ Set up environment

cp .env.example .env
# Then edit your .env with your OpenWeatherMap API key

4️⃣ Run locally

npm run dev

5️⃣ Build for production

npm run build


---

🌐 Deployment

The app is automatically deployed to Vercel.

Manual deployment:

npm run build
vercel deploy

🧭 Live Site: weather-app-keymoye.vercel.app


---

💡 Highlights

✨ Optimized Performance: Lighthouse score above 90
♿ Accessible Design: ARIA labels, semantic HTML
🧩 Reusable Components: SearchBar & WeatherCard
🧠 Simple Architecture: Minimal dependencies, easy to scale
🔒 Secure: Uses .env for API key storage


---

🧪 Future Enhancements

[ ] 🌍 Geolocation-based weather (auto-detect user city)

[ ] 🗓️ 5-day forecast view

[ ] 🌙 Light/Dark mode toggle

[ ] 🌡️ Temperature unit toggle (°C / °F)

[ ] 📈 Weather data caching (localStorage)

[ ] 🧭 Progressive Web App (offline support)



---

🖼️ Preview

Desktop	Mobile

	



---

🧠 Lessons Learned

Managing API calls efficiently using async/await

Handling user input validation and error states

Building a responsive layout with Tailwind’s utility classes

Using .env and Vite to securely handle environment variables

Deploying and maintaining live projects with Vercel



---

📜 License

This project is licensed under the MIT License — see the LICENSE file for details.


---

🧑‍💻 Author

<div align="center">👋 Maxwell Kimoi (Keymoye)
📍 Nairobi, Kenya
💼 Full-Stack Developer | React • Next.js • TailwindCSS

  

</div>
---

🤝 Contributing

Contributions, issues, and feature requests are welcome!

To contribute:

# 1. Fork the repo
# 2. Create a feature branch
git checkout -b feature/amazing-feature

# 3. Commit changes
git commit -m 'Add amazing feature'

# 4. Push branch
git push origin feature/amazing-feature

# 5. Open a Pull Request


---

<div align="center">⭐ If you like this project, don’t forget to star it! ⭐
It helps more people discover it — and keeps me motivated to improve it.

</div>
```
---


