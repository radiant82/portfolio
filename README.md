# 🚀 Jayneel — Portfolio Website

A modern, glassmorphism-styled developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Customization Guide](#-customization-guide)
- [Deploying to Netlify](#-deploying-to-netlify)
- [Tech Stack](#-tech-stack)
- [Troubleshooting](#-troubleshooting)

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. Node.js (version 20 or higher)

Node.js is the runtime that lets you run JavaScript/TypeScript on your machine.

- **Download**: Go to [https://nodejs.org](https://nodejs.org) and download the **LTS** version (recommended).
- **Verify installation**: Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:
  ```bash
  node --version
  ```
  You should see something like `v20.x.x`. If you see an error, Node.js isn't installed yet.

### 2. npm (comes with Node.js)

npm is the package manager used to install project dependencies. It comes bundled with Node.js.

- **Verify installation**:
  ```bash
  npm --version
  ```
  You should see a version number like `10.x.x`.

### 3. Git

Git is used to download (clone) the project from GitHub.

- **Download**: Go to [https://git-scm.com](https://git-scm.com) and install it.
- **Verify installation**:
  ```bash
  git --version
  ```

> **💡 Tip**: If you're on **Mac**, you may already have Git installed. Just open Terminal and try `git --version`. If it's not installed, macOS will prompt you to install it.

---

## 🏁 Getting Started

Follow these steps to get the website running on your local machine:

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/jayneel/portfolio-website-Jayneel.git
```

> **What does this do?** It downloads the entire project from GitHub to your computer, creating a new folder called `portfolio-website-Jayneel`.

### Step 2: Navigate into the Project Folder

```bash
cd portfolio-website-Jayneel
```

> **What does `cd` mean?** It stands for "change directory" — it moves you into the project folder so you can run commands inside it.

### Step 3: Install Dependencies

```bash
npm install
```

> **What does this do?** It reads the `package.json` file and downloads all the libraries (like React, Next.js, Tailwind CSS, etc.) the project needs to work. These get saved in a `node_modules` folder.
>
> ⏳ This might take 1–2 minutes the first time. You'll see a progress bar.

### Step 4: Start the Development Server

```bash
npm run dev
```

> **What does this do?** It starts a local web server on your computer. You'll see output like:
> ```
> ▲ Next.js 14.2.x
>   - Local:  http://localhost:3000
> ✓ Ready in 1.5s
> ```

### Step 5: View the Website

Open your web browser and go to:

👉 **[http://localhost:3000](http://localhost:3000)**

You should see the portfolio website running live! 🎉

> **💡 Hot Reload**: Any changes you make to the code will automatically refresh in the browser — no need to restart the server.

### Step 6: Stop the Server

When you're done, go back to your terminal and press:

```
Ctrl + C
```

This stops the development server.

---

## 📁 Project Structure

Here's a simplified overview of what each folder and file does:

```
portfolio-website-Jayneel/
│
├── public/                     # Static files (images, icons)
│   └── images/                 # All project & profile images
│
├── src/                        # All source code lives here
│   ├── app/                    # Pages and routing (Next.js App Router)
│   │   ├── layout.tsx          # ← The main wrapper (navbar + footer on every page)
│   │   ├── page.tsx            # ← Homepage (what you see at "/")
│   │   ├── globals.css         # ← Global styles and design system
│   │   ├── about/page.tsx      # ← About page ("/about")
│   │   ├── projects/
│   │   │   ├── page.tsx        # ← Projects listing ("/projects")
│   │   │   └── [slug]/page.tsx # ← Individual project pages ("/projects/some-project")
│   │   ├── contact/page.tsx    # ← Contact page ("/contact")
│   │   └── api/contact/route.ts # ← Backend API for the contact form
│   │
│   ├── components/             # Reusable UI building blocks
│   │   ├── Navbar.tsx          # Navigation bar (top of every page)
│   │   ├── Footer.tsx          # Footer (bottom of every page)
│   │   ├── HeroSection.tsx     # Big intro section on homepage
│   │   ├── ProjectCard.tsx     # Card component for each project
│   │   ├── ContactForm.tsx     # The contact form with validation
│   │   └── ...                 # More components
│   │
│   └── data/
│       └── projects.ts         # ← All project data (edit this to add/change projects!)
│
├── tailwind.config.ts          # Tailwind CSS theme configuration
├── next.config.mjs             # Next.js configuration
├── netlify.toml                # Netlify deployment settings
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

> **Key insight**: In Next.js App Router, every `page.tsx` file inside the `app/` folder automatically becomes a route. For example, `app/about/page.tsx` → `/about`.

---

## 📜 Available Scripts

Run these from the project root folder:

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Starts the development server at `localhost:3000` |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Checks code for errors and style issues |

---

## 🎨 Customization Guide

### Change Your Name & Info

1. **Profile info** — Edit the text in `src/components/HeroSection.tsx` (greeting, role, description).
2. **About page** — Edit `src/app/about/page.tsx` (bio paragraphs, highlights).
3. **Footer & Navbar brand** — Search for "Jayneel" in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.

### Add or Edit Projects

Open `src/data/projects.ts` — this file contains all project data as a simple array. Each project looks like:

```typescript
{
  slug: "my-project",          // URL-friendly name (used in the URL)
  title: "My Cool Project",
  description: "A short description...",
  image: "/images/my-project.png",  // Add your image to public/images/
  tech: ["React", "Node.js"],
  isFeatured: true,            // Set to true to show on homepage
  overview: "Longer description...",
  features: ["Feature 1", "Feature 2"],
  challenges: "What was hard...",
  solution: "How you solved it...",
  gallery: ["/images/my-project.png"],
}
```

To add a new project:
1. Add your project image to the `public/images/` folder.
2. Add a new object to the `projects` array in `src/data/projects.ts`.
3. That's it! The project page is auto-generated.

### Change Colors & Theme

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  dark: "#0a0f1c",        // Main background
  darker: "#060a14",      // Deeper background
  accent: "#06b6d4",      // Primary accent (cyan)
  accent_light: "#22d3ee", // Lighter accent
},
```

### Change Social Links

Search for `socialLinks` in the components — you'll find arrays of social link objects in `HeroSection.tsx`, `Footer.tsx`, and `contact/page.tsx`. Update the `href` values with your own URLs.

---

## 🌐 Deploying to Netlify

This project is pre-configured for [Netlify](https://www.netlify.com) deployment. Here's how:

### Step 1: Push to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

> Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

### Step 2: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign up (free) or log in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** and select your repository.
4. Netlify will auto-detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**.

That's it! Netlify will build and deploy your site. You'll get a free URL like `https://your-site-name.netlify.app`.

> **💡 Auto-deploys**: Every time you push new code to GitHub, Netlify will automatically rebuild and update your live site.

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org) | React framework with App Router, SSG, and API routes |
| [React 18](https://react.dev) | UI component library |
| [TypeScript](https://typescriptlang.org) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework |
| [React Icons](https://react-icons.github.io/react-icons) | Icon library |
| [Netlify](https://netlify.com) | Hosting and deployment |

---

## ❓ Troubleshooting

### "command not found: node" or "command not found: npm"

Node.js isn't installed or isn't in your system PATH. Re-download and install from [nodejs.org](https://nodejs.org).

### "command not found: git"

Git isn't installed. Download it from [git-scm.com](https://git-scm.com).

### `npm install` fails with permission errors

On Mac/Linux, try:
```bash
sudo npm install
```
Or better yet, fix npm permissions by following [this guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### Port 3000 is already in use

Something else is running on port 3000. Either close that program, or start on a different port:
```bash
npm run dev -- -p 3001
```
Then open `http://localhost:3001` instead.

### The site looks broken or styles aren't loading

1. Stop the dev server (`Ctrl + C`).
2. Delete the `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

### Build fails with type errors

Run the linter to see what's wrong:
```bash
npm run lint
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

