# DorkNEXUS - Your Central Dorking Hub

<p align="center">
  <img src="https://img.shields.io/badge/Version-2.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg" alt="Contributions Welcome">
</p>

DorkNEXUS is a fast, powerful, and comprehensive web-based tool for security researchers and bug bounty hunters. It provides a massive, categorized arsenal of Google and GitHub dorks in a clean, hacker-style interface. This tool is designed to make the reconnaissance phase of security testing faster and more efficient.

## 🚀 Live Demo

This tool is fully static and runs directly in your browser. No installation is needed.

**Visit the live version here:**
### **[https://0xmun1r.github.io/DorkNEXUS/](https://0xmun1r.github.io/DorkNEXUS/)**

---


## ✨ Features

* **Massive Dork Arsenal:** Over 750+ carefully curated dorks for Google,GitHub, FoFa, Shodan and Censys
* **Clean, Hacker-Style UI:** A dark, terminal-themed interface that's easy on the eyes.
* **Categorized & Collapsible:** Dorks are grouped by vulnerability type (e.g., Config Files, API Keys, SQLi) in clean, collapsible sections.
* **Google & GitHub Tabs:** Easily switch between dorking platforms.
* **Zero Installation:** Fully browser-based. If you have a web browser, you can use DorkNEXUS.
* **Static & Serverless:** Hosted for free and with high performance on GitHub Pages.
* **Easy Selection:** Select individual dorks for precise, targeted scans.
* **Mobile Friendly:** Works great on mobile devices, especially for use with Termux.

## 🛠️ How to Use the Live Tool

1.  **Visit the Website:** Navigate to **[https://0xmun1r.github.io/DorkNEXUS/](https://0xmun1r.github.io/DorkNEXUS/)**.
2.  **Enter Target:** Input your target domain (e.g., `example.com`) or organization name in the "Target Console".
3.  **Select Platform:** Click the **[[ Google Dorks ]]** or **[[ GitHub Dorks ]]** tab.
4.  **Choose Dorks:** Open the category toggles and check the boxes next to the dorks you want to run.
5.  **Launch Scan:** Click the red **[[ LAUNCH SCAN ]]** button. New browser tabs will open for each selected dork.

## 🤝 Contributing

Contributions are welcome! If you have a valuable dork that you think should be included, please follow these steps:

1.  **Fork** this repository.
2.  Open the `dorks.js` file.
3.  Add your dork to the appropriate category in the `GOOGLE_DORKS` or `GITHUB_DORKS` objects. Please maintain the existing format:
    ```javascript
    {"dork": "your new dork here", "desc": "A clear description of what it finds"},
    ```
4.  Create a **Pull Request** with a title that describes the dork(s) you are adding.

## 💻 Running Locally

If you want to run this tool locally or modify it:

1.  Clone the repository: `git clone https://github.com/0xmun1r/DorkNEXUS.git`
2.  Navigate into the folder: `cd DorkNEXUS`
3.  Simply open the `index.html` file in your favorite web browser.

