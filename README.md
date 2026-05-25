# Harsh Portfolio

A modern personal portfolio website for **Harsh**, focused on backend engineering, projects, experience, skills, and contact information.

This project is built as a **static frontend portfolio** using plain **HTML, CSS, and JavaScript**. It is designed to be clean, responsive, and easy to customize for future updates.

## Live Demo

🚀 Deployment Link: [View Portfolio Website](https://itsharsh56-portfolio.netlify.app/)

## Overview

The portfolio highlights:

- A strong backend-focused personal introduction
- Technical skills across backend, databases, frontend, languages, and DevOps
- Professional experience and internship work
- A curated projects section with GitHub links
- Education and achievements
- Contact links for email, LinkedIn, GitHub, and phone

The UI uses a warm editorial style with serif headings, a structured grid layout, reveal-on-scroll animations, and responsive behavior for mobile devices.

## Features

- **Responsive layout**
  Works across desktop, tablet, and mobile screen sizes.

- **Sticky navigation bar**
  The top navbar stays visible and slightly changes style on scroll.

- **Mobile menu**
  A burger menu is available for smaller screens.

- **Animated content reveal**
  Sections and cards animate into view using `IntersectionObserver`.

- **Hero section with profile image**
  Includes a short introduction, CTA buttons, and profile image.

- **About section with highlights**
  Shows background, focus areas, coding profile, and performance metrics.

- **Skills grid**
  Categorized cards for backend, databases, frontend, languages, DevOps, and core concepts.

- **Experience timeline**
  Internship experience is presented in a structured vertical timeline format.

- **Projects showcase**
  Multiple project cards with technologies, descriptions, and GitHub links.

- **Education and achievements**
  Includes academic background and milestone highlights.

- **Contact section**
  Easy-to-access links for communication and professional profiles.

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Google Fonts**
  - `DM Serif Display`
  - `DM Sans`
  - `JetBrains Mono`

## Project Structure

```text
Portfolio/
├── harsh_portfolio.html
├── style.css
├── script.js
└── images/
    └── Passport_Size_Photo.jpg
```

## File Details

### `harsh_portfolio.html`

This is the main portfolio page and contains all visible sections:

- Navbar
- Hero
- About
- Skills
- Experience
- Projects
- Education
- Achievements
- Contact

It also includes:

- Google Fonts setup
- stylesheet link to `style.css`
- script link to `script.js`
- local profile image reference from `images/`

### `style.css`

Handles the entire visual design of the site, including:

- color system and CSS variables
- section spacing
- hero layout
- cards and timeline styling
- buttons and hover effects
- responsive breakpoints
- project grid layout
- contact section layering and interactivity
- reveal animation styling

### `script.js`

Adds basic interaction:

- navbar scroll behavior
- mobile navigation toggle
- close menu on mobile link click
- reveal-on-scroll animation logic using `IntersectionObserver`

## Sections Included

### 1. Hero

The landing section introduces Harsh as a **Backend Software Developer** and includes:

- short positioning statement
- button to projects
- resume link
- profile image

### 2. About

Provides a personal summary with emphasis on:

- backend development
- scalable systems
- API design
- performance optimization
- competitive programming background

### 3. Skills

Skills are grouped into:

- Backend
- Databases
- Frontend
- Languages
- Cloud & DevOps
- Core Concepts

### 4. Experience

The experience section presents internship work, responsibilities, and impact metrics such as:

- API optimization
- performance improvements
- reliability handling
- real-world collaboration

### 5. Projects

The project section contains multiple cards with:

- project number
- project title
- tech stack tags
- short description
- GitHub project link

### 6. Education

Includes:

- B.Tech in Computer Science & Engineering
- Diploma in Civil Engineering

### 7. Achievements

Highlights:

- Smart India Hackathon 2024
- 300+ DSA problems solved
- CodeChef 2-star rating

### 8. Contact

Contains direct links to:

- Email
- LinkedIn
- GitHub
- Phone

## How to Run Locally

Since this is a static website, no build step or package installation is required.

### Option 1: Open directly in the browser

Open `harsh_portfolio.html` in your browser.

### Option 2: Run with a local server

Using a local server is better if you want a more realistic browser environment.

If you have VS Code:

1. Open the project folder.
2. Install the **Live Server** extension.
3. Right-click `harsh_portfolio.html`.
4. Click **Open with Live Server**.

## Deployment Notes

This project is static and can be deployed easily on:

- GitHub Pages
- Netlify
- Vercel

### Important

Many static hosting platforms expect the entry file to be named `index.html`.

Right now, the main file in this repo is:

```text
harsh_portfolio.html
```

If needed for deployment, you can:

1. Rename `harsh_portfolio.html` to `index.html`, or
2. Configure the host to serve `harsh_portfolio.html` as the main page.

## Customization Guide

To adapt this portfolio later, update the following areas:

### Personal Information

Edit `harsh_portfolio.html` to update:

- name
- hero text
- about section
- location
- experience details
- education
- achievements
- contact details

### Resume Link

Update the Google Drive resume URL in the hero section.

### Profile Image

Replace:

```text
images/Passport_Size_Photo.jpg
```

with a new image and keep the same filename, or update the `<img src="">` path in the HTML.

### Projects

Each project card can be edited directly in the projects section inside `harsh_portfolio.html`.

You can change:

- project order
- title
- tech tags
- description
- GitHub link

### Styling

Use `style.css` to change:

- colors
- spacing
- font sizes
- hover effects
- card styles
- responsive behavior

## Current Interaction Logic

The JavaScript behavior is intentionally lightweight.

### Navbar Scroll Effect

Adds the `scrolled` class to the navbar once the page is scrolled beyond 60px.

### Mobile Navigation

Two helper functions are used:

- `toggleNav()`
- `closeNav()`

These manage the open/close state of the mobile menu.

### Reveal Animation

Elements with the `.reveal` class animate in when they enter the viewport.

## Design Highlights

- warm neutral color palette
- serif + sans-serif typography pairing
- clean card-based layouts
- visual hierarchy with section labels
- subtle motion through reveal animations
- editorial-style presentation instead of a generic template look

## Browser Compatibility

This project should work in all modern browsers that support:

- CSS Grid
- Flexbox
- `IntersectionObserver`

Examples:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

## Possible Future Improvements

- Add a downloadable resume button
- Add live project demo links beside GitHub links
- Add dark mode toggle
- Add form-based contact section
- Add project filters by tech stack
- Add SEO meta tags and social preview tags
- Add favicon and browser tab branding
- Add performance optimizations for images
- Add accessibility improvements such as stronger focus states and aria labels

## Author

**Harsh**

- GitHub: <https://github.com/itsharsh56>
- LinkedIn: <https://www.linkedin.com/in/harshvr/>
- Email: <mailto:harsh531970@gmail.com>

