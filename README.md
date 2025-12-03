# ⚡DorkNEXUS v3.0⚡

<p align="center">
  <img src="https://img.shields.io/badge/Version-3.0-00ffff.svg?style=for-the-badge" alt="Version 3.0">
  <img src="https://img.shields.io/badge/Status-Operational-00ff88.svg?style=for-the-badge" alt="Status Operational">
  <img src="https://img.shields.io/badge/Theme-Cyberpunk-ff00ff.svg?style=for-the-badge" alt="Contributions Open">
</p>

**DorkNEXUS v3.0** is an elite, web-based open-source intelligence (OSINT) tool designed for security researchers, bug bounty hunters, and penetration testers. 

Completely overhauled with a **Cyberpunk/Sci-Fi aesthetic**, Version 3.0 transforms boring reconnaissance into an immersive experience. It features a massive arsenal of dorks across five major platforms, optimized for precision targeting.

---

## 🚀 Live Access

**Initiate Protocol Here:**
### **[https://0xmun1r.github.io/DorkNEXUS/](https://0xmun1r.github.io/DorkNEXUS/)**

*(No installation required. Runs entirely client-side in your browser.)*

---

## ✨ Version 3.0 Features

### 🎨 Visual & UI Overhaul
* **Cyberpunk Aesthetic:** Full neon redesign with animated grids, floating particles, glitch effects, and CRT scanlines.
* **Interactive Terminal:** A simulated terminal window that reacts to your inputs.
* **SVG Brand Icons:** High-quality, glowing SVG vectors for social links.

### ⚔️ The Arsenal (5 Platforms)
We have expanded beyond Google. DorkNEXUS now supports:
* **Google:** Web intelligence and sensitive file discovery.
* **GitHub:** Leaked secrets, keys, and source code.
* **Shodan:** IoT, cameras, and exposed ports.
* **FoFa:** Cyberspace mapping and asset discovery.
* **Censys:** Internet-wide scan data and certificates.

### 🎯 Precision Targeting (New!)
* **Single-Shot Logic:** v3.0 utilizes a "Precision Mode" selector. You can only select **one dork at a time**. This prevents browser freezing and encourages focused, manual verification of results.
* **Scope Fixed:** JavaScript variable scope issues resolved for maximum compatibility.

---

## 🛠️ Operational Guide

1.  **Access the Terminal:** Go to **[https://0xmun1r.github.io/DorkNEXUS/](https://0xmun1r.github.io/DorkNEXUS/)**.
2.  **Define Target:** Enter your target domain (e.g., `target.com`) in the input field.
3.  **Select Platform:** Click one of the 5 platform buttons (Google, GitHub, Shodan, etc.).
4.  **Engage Dork:** Expand a category and check the box for the specific dork you wish to use.
    * *Note: Selecting a new checkbox will automatically deselect the previous one.*
5.  **Execute:** Click the **[[ EXECUTE DorkNEXUS ]]** button. The query will open in a new tab.

---

## 🤝 Contributing

Contributions are vital to the Nexus. If you have a powerful dork to add:

1.  **Fork** this repository.
2.  Open the `dorks.js` file.
3.  **IMPORTANT:** When adding dorks, ensure they are added to the correct `window` object to ensure global scope visibility:
    * `window.GOOGLE_DORKS`
    * `window.GITHUB_DORKS`
    * `window.SHODAN_DORKS`
    * `window.FOFA_DORKS`
    * `window.CENSYS_DORKS`
4.  Maintain the strict JSON format:
    ```javascript
    {"dork": "site:{target} ext:xml", "desc": "Description of finding"},
    ```
5.  Submit a Pull Request titled **"Arsenal Update: [Platform Name]"**.

---

## 💻 Local Deployment

To run DorkNEXUS offline on your local machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/0xmun1r/DorkNEXUS.git](https://github.com/0xmun1r/DorkNEXUS.git)
    ```
2.  Navigate into the directory:
    ```bash
    cd DorkNEXUS
    ```
3.  Open `index.html` in your web browser.

---

<div align="center">

<h3>⚡ CONNECT WITH THE ARCHITECT ⚡</h3>

<p>Reach out for collaboration, bug reports, or security discussions.</p>

<a href="https://www.facebook.com/0xmun1r">
  <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
</a>
<a href="https://github.com/0xmun1r">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
<a href="https://t.me/telegr_mun1r">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
</a>
<a href="https://youtube.com/@0xmun1r?si=Tv1qFjSz122ZdJno">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" />
</a>

<br><br>
<p><b>0xMun1r</b> | Security Researcher</p>

</div>
