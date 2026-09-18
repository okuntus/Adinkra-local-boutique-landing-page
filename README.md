# Adinkra Local Boutique - Contact Us Section
👉 **Live Demo Site:** [https://netlify.app](https://netlify.app)


A sleek, compact, and highly responsive **Contact Us** page section designed specifically for **Adinkra Local Boutique**, located in Cantonments, Accra, Ghana. This component features an elegant, modern dark theme accented with warm tones that complement a premium boutique aesthetic.

---

# ✨ Features

 **Ultra-Compact Design:** Utilizes horizontal side-by-side rows for inputs (Name and Email shared row) and shorter textarea grids to keep overall section height minimal.

 **Direct WhatsApp Chat Integration:** Includes a prominent, instantly accessible WhatsApp action button custom-linked to the boutique's direct business line (`+233 24 114 1631`).

 **Smooth Navbar Navigation:** Features integrated lightweight JavaScript logic that detects clicks from the header navbar link and smoothly glides down the page to the section view.

 **Perfect Grid Layout Alignment:** Built with strict full-width boundaries (`box-sizing: border-box`), preventing fields or action buttons from clipping outside the containment borders.

 **Mobile First & Responsive:** Automatically transforms from a clean side-by-side grid layout on desktops into a stacked vertical arrangement for smartphones.

---

# 🚀 Tech Stack

 **HTML5:** Semantic architecture utilizing `<section>`, `<form>`, and descriptive labels.

 **CSS3:** Driven by modern Layout Engines (Flexbox & CSS Grid) for alignment and beautiful typography.

 **JavaScript (ES6):** Pure, vanilla JavaScript for scrolling interaction and form event handling.

---

# 📂 File Architecture

Ensure your file tree looks similar to this setup:
```text
├── index.html       # The main website markup containing the contact section
├── style.css        # The complete design sheet with dark gradients and boutique colors
└── script.js        # The interactive script handling navigation loops
```

---

# 🛠️ Setup and Installation Instructions

1. **Clone or Download** this directory folder containing the template files.

2. Open `index.html` inside any modern browser (Chrome, Edge, Safari, Firefox) to view the live rendering.

3. To attach these configurations to an ongoing website project, copy the snippet lines from `style.css` and place them    inside your root stylesheets directory.

---

# ⚙️ How to Customize

## 1. Changing the WhatsApp Number
To change the business account that receives messages from the WhatsApp link, open `index.html`, locate the anchor tag 
under the `<!-- WhatsApp Direct Action Button -->` comment block, and modify the digital digits string inside the `href`:
```html

<a href="https://wa.me" target="_blank" class="whatsapp-btn">
```

## 2. Adjusting the Color Profiles
If you wish to change the brand's orange-accent glow or the dark backgrounds, alter these values in your `style.css`:

 **Dark Theme Background:** Look for `background: linear-gradient` inside `.contact-section`.

 **Gold/Orange Accent:** Look for color code `#f39c12` or hover code `#e67e22`.

 **Earthy Cocoa Text Panels:** Look for background background color `#111111` or `#2c1a11`.

---

# 📝 License & Attribution
Designed and written by **Adinkra Local Boutique** web production workflow. Free to expand, reuse, or customize across all commercial application layout sheets.
