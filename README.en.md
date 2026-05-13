<div align="center">

*Read this document in other languages:*
[🇺🇸 English](README.en.md) | [🇧🇷 Português](README.md) | [🇪🇸 Español](README.es.md)

<br>

# 🏢 Augusto Imóveis - JAMStack Real Estate Platform

High-performance real estate platform developed with static site generation, headless content management, and dynamic media processing, focused on extreme performance and user experience.

<br>

<img src="./README-assets/banner/real-estate-banner.png" alt="Project Banner" width="100%"/>

<br>
<br>

## 🔗 Live Preview

**[Access Website](https://augusto-narloch-imoveis.vercel.app/)**

<br>

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🎯 About The Project & Goals

This project was developed as a complete platform for the real estate market, combining a modern user interface with a robust back-end architecture.

The main goal was to solve real industry challenges: creating an ultra-fast browsing catalog for clients, facilitating listing management for brokers through an intuitive control panel (CMS), and ensuring 100% automated copyright protection for photographic material.

---

## ✨ Key Features & Engineering

- **Headless Architecture:** Properties, features, and galleries are registered in the **Sanity CMS** database and served via API (GROQ).
- **Dynamic Image Processing (Cloudinary):**
  - Automatic generation of optimized thumbnails for mosaic loading.
  - Dynamic injection of a **responsive watermark (10% relative width)** in high-resolution images via URL (`fl_layer_apply,w_0.1,fl_relative`), protecting copyrights without distorting the layout on zoom.
- **Interactive Gallery (PhotoSwipe):** Extraction of original metadata (width/height) directly from the database to prevent unwanted *cropping* in the expanded view.
- **SSG (Static Site Generation):** Pre-rendered build with **Astro**, ensuring extreme speed, fluid navigation, and excellent Core Web Vitals scores.
- **Dynamic SEO:** Automatic Schema Markup generation (`RealEstateListing`) per property.

---

## 📸 Project Interface

### Homepage Desktop
<img src="./README-assets/screenshots/homepage-desktop.png" width="100%"/>

---

### Homepage Mobile
<div align="center">
<img src="./README-assets/screenshots/homepage-mobile.png" width="35%"/>
</div>

---

### Property Cards & Gallery
<img src="./README-assets/screenshots/property-cards.png" width="100%"/>

*(To view the complete gallery and internal details, check the screenshots tab or access the Live Preview).*

---

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - SSG Framework
- **[Sanity.io](https://www.sanity.io/)** - Headless CMS 
- **[Cloudinary](https://cloudinary.com/)** - CDN and On-the-Fly media manipulation
- **[PhotoSwipe](https://photoswipe.com/)** - Lightbox engine
- **[Vercel](https://vercel.com/)** - Hosting and CI/CD
- **HTML5 & CSS3** - Custom structuring and styling


---

## 📂 Code Structure

The project's architecture clearly separates the UI from the data consumption logic:

```text
/
├── public/                 # Static assets 
├── src/
│   ├── components/         # Isolated components (Cards, Header, Mosaic)
│   ├── lib/
│   │   ├── cloudinary.js   # Layer injection engineering on the CDN
│   │   └── queries.js      # GROQ queries for Sanity requests
│   ├── pages/
│   │   ├── [slug].astro    # Dynamic routing for rendering properties
│   │   └── index.astro     # Home page and catalog
└── package.json
