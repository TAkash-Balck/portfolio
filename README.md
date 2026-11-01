# Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-4f46e5)

A fast, responsive, and accessible personal portfolio built with plain HTML, CSS, and JavaScript. No frameworks or build tools are required. It presents my background, skills, and selected projects in one place.

**Live demo:** https://portfolio-bytetrend.vercel.app

<!-- Optional: add a screenshot at docs/preview.png, then uncomment the line below.
![Portfolio preview](docs/preview.png)
-->

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## Features

- **Complete portfolio sections:** Hero, About, Skills, Projects, and Contact.
- **Semantic HTML5:** uses `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- **Dark and light themes:** follows the system preference and remembers the visitor's choice with `localStorage`.
- **Project filter:** filter projects by AI/ML, Web, or Blockchain without reloading the page.
- **Mobile navigation:** collapsible menu that closes automatically after a link is selected.
- **Smooth scrolling:** animated anchor navigation, disabled for users who prefer reduced motion.
- **Zero dependencies:** no external scripts, fonts, or images, which keeps load time low.

## Tech Stack

| Area | Technology |
| --- | --- |
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Behavior | Vanilla JavaScript (ES5-compatible) |
| Hosting | GitHub Pages |

## Getting Started

### Prerequisites

Any modern browser. A code editor such as VS Code is recommended.

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/TAkash-Balck/portfolio.git

# 2. Move into the project folder
cd portfolio

# 3. Open index.html in your browser
```

For live reload during development, install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.

## Project Structure

```text
portfolio/
├── index.html    # Page structure and content
├── style.css     # Styles, themes, and responsive layout
├── script.js     # Theme toggle, mobile nav, and project filter
└── README.md     # Project documentation
```

## Responsive Design

The layout was tested at the following widths using browser DevTools:

| Device | Width | Layout |
| --- | --- | --- |
| Mobile | 375px | Single column, collapsible navigation |
| Tablet | 768px | Stacked About section, flexible card grid |
| Desktop | 1280px+ | Multi-column grids, full navigation bar |

## Accessibility

- Skip-to-content link for keyboard users
- Visible focus outlines on interactive elements
- ARIA labels and `aria-expanded` state on the menu button
- External links use `rel="noopener noreferrer"`
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## Customization

1. **Content:** edit the text in `index.html`.
2. **Colors:** change the CSS variables in the `:root` and `[data-theme="dark"]` blocks at the top of `style.css`.
3. **Projects:** copy an existing `<article class="card project">` block, then update the title, description, tags, link, and `data-category` value (`ai`, `web`, `blockchain`).

## Deployment

The site is static and can be hosted on GitHub Pages:

1. Push the code to a public GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Save. The site will be live at `https://<username>.github.io/<repository>/` within a few minutes.

## Contact

- GitHub: [@TAkash-Balck](https://github.com/TAkash-Balck)
- Email: tsakash86@gmail.com

---

Built by Akash, B.Tech Information Technology, St. Joseph's Institute of Technology, Chennai.
