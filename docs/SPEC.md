Build a single-page portfolio website for a software developer named Kevin Andrean Haryadi. Audience: recruiters and hiring managers who skim quickly. They should understand who he is and what he has built within seconds, and be able to click deeper or email him. Write all copy in English.

# HARD RULES
- Use ONLY facts given in this spec. Do NOT invent client names, company names, statistics, awards, testimonials, or metrics. Anything not given must be a clearly visible placeholder.
- ALL content (profile text, projects, skills, experience, links) lives in ONE data file: src/data/content.js. Components render entirely from it. Never hardcode content in components.
- Project images live in public/images/projects/<project-slug>/. Reference them from content.js by relative path. Generate neutral local SVG placeholders (16:10, labeled "Placeholder") in those folders. Do not use remote placeholder URLs.
- Contact email is a dummy: hello@example.com (mailto link). No contact form, no backend, no phone number.

# DESIGN
- Clean and professional, but not flat black-and-white: use color deliberately.
- Light theme. Background: off-white (#F8FAFC). Text: deep slate (#0F172A). Primary accent: indigo (#4F46E5). Secondary accent: teal (#0D9488). Use accents for buttons, tags, section highlights, and a subtle gradient (indigo to teal) in the hero background and on key headings. Keep gradients subtle.
- Typography: "Inter" for body, "Space Grotesk" for headings. Generous whitespace, 8px spacing scale, rounded corners (12px), soft shadows.
- Subtle motion only: hover lift on cards, smooth scroll, fade-in on scroll. No heavy animation.
- Fully responsive (mobile first), accessible (alt text, focus states, sufficient contrast, keyboard navigable). Lazy-load images.
- Sticky top navigation with anchor links: About, Projects, Integrations, Skills, Experience, Contact. Highlight the active section.

# PAGE SECTIONS (single landing page, in this order)

1. HERO / INTRO
   - Name: Kevin Andrean Haryadi
   - Title: Software Developer, Web, Games & AI Tools
   - Short intro (use this text, lightly polished): "Software developer with 7+ years of professional experience, plus freelance work since 2015, across web and game development. I deliver client integrations in JavaScript, build games in Unity3D (C#) and Unreal Engine (C++), and recently built AI-powered Python tools."
   - Location: Surabaya, East Java, Indonesia
   - Small badge: "Open to new opportunities"
   - Buttons: "View projects" (scrolls to Projects), "Email me" (mailto), and a GitHub icon link to https://github.com/kevin-andrean
   - A decorative but tasteful visual element on the right (abstract shapes or a code/game-inspired illustration). No stock photos of people.

2. PROJECTS (thumbnail gallery)
   - Responsive grid: 3 columns desktop, 2 tablet, 1 mobile.
   - Filter chips above the grid: All, Games, Web & Integrations, AI & Python.
   - Each card shows: screenshot thumbnail (16:10), project title, a one-line description, a context badge saying where/when it was done (e.g. "Personal project", "MarketJS · 2019-2026", "Shireishi Production · 2022-2024", "Freelance · 2015-2018"), 2-4 tech tags, and small icon links (Live demo, GitHub) that appear ONLY if that project has a URL. A project with no link must still look complete, with no empty buttons.
   - Clicking anywhere on the card opens that project's detail page.
   - Seed with these projects (the first two are real; the rest are placeholders I will replace, and must be labeled "Placeholder" in the UI):
     a) IDX Market Assistant (real). Personal project. AI-powered market analysis assistant for the Indonesian stock market, combining an LLM backend (OpenRouter), live web search (Tavily) and stock data (yfinance) behind a Gradio UI. Tags: Python, LLM, Gradio. Category: AI & Python.
     b) IDX Monitor (real). Personal project. Python service that polls the IDX public disclosure (Keterbukaan Informasi) API against configurable keyword and issuer rules and sends alerts via the Telegram Bot API. Includes a module that tracks stocks entering repeated trading suspensions, using trading-day calendar logic (XIDX), and reliable access to a public API that rejects default HTTP clients (curl_cffi). Tags: Python, Telegram Bot API, curl_cffi. Category: AI & Python.
     c) 3 placeholder game projects at MarketJS (JavaScript, ImpactJS). Original titles built end-to-end. Category: Games.
     d) 1 placeholder Unity3D (C#) game at Shireishi Production. Category: Games.
     e) 1 placeholder Unreal Engine (C++) game at Shireishi Production. Category: Games.
     f) 1 placeholder client web app in PHP/MySQL (Laravel), freelance. Category: Web & Integrations.
   - PROJECT DETAIL PAGE (own route, e.g. /projects/:slug, shareable URL, with a Back to projects button and previous/next project navigation). Contents: title, context badge, hero screenshot, screenshot gallery (3-5 images, click to enlarge), "Overview", "My role", "What I built", "Tech stack" tags, and a links area (Live demo, GitHub) shown only when the URL exists.

3. 100+ CLIENT INTEGRATIONS (dedicated showcase section)
   - Headline: "100+ client integrations delivered" with a large animated count-up number.
   - Short explanation using only these facts: delivered 100+ game integrations (third-party APIs and custom client requirements) in a high-velocity production pipeline at MarketJS, using JavaScript (ImpactJS, jQuery); wrote reusable integration code and interfaces so game titles could access client APIs and ad networks; tested client APIs ahead of integration; acted as main contact for international clients on requirements and timelines.
   - Below it, a 3-4 card "How I work" row: Reusable integration code, API testing before integration, Debugging escalated projects (cloned and debugged game projects to resolve issues escalated by other programmers), Client communication.
   - A placeholder strip labeled "Selected integrations (coming soon)" with 6 empty logo/title slots, driven by the data file. Do NOT invent client or network names.

4. SKILLS (grouped, with simple chips; no percentage bars or star ratings)
   - Languages: JavaScript, C#, C++, Python, PHP, SQL, HTML/CSS
   - Engines & Frameworks: Unity3D, Unreal Engine, ImpactJS, jQuery, Laravel
   - Web & APIs: REST API integration, JSON, MySQL, ad-network and client API integration
   - Delivery: AWS S3, CloudFront, Cloudflare, BunnyCDN
   - Tools & Data: Git, GitHub, pandas, Telegram Bot API, Gradio

5. EXPERIENCE (vertical timeline, most recent first)
   - MarketJS, Programmer & Project Manager, Apr 2019 - Sep 2026: Delivered 100+ game integrations; wrote reusable integration code and interfaces; cloned and debugged escalated projects; built 1-2 original titles per year end-to-end; set up and used AWS S3, CloudFront, Cloudflare and BunnyCDN; main contact for international clients.
   - Shireishi Production, Game Programmer (part-time, concurrent with MarketJS), May 2022 - Mar 2024: Kicked off and led game projects with a cross-functional team, selecting engines and plugins and building from scratch in Unity3D (C#) and Unreal Engine (C++).
   - Freelance Developer, 2015 - 2018: Built client web applications in PHP/MySQL (Laravel) and games in Unity3D; negotiated scope and requirements directly with clients.
   - Education: Sarjana Terapan Komputer (S.Tr.Kom.), Politeknik Elektronika Negeri Surabaya, 2019, GPA 3.63/4.00 (equivalent to a Bachelor of Computer Science in Informatics Engineering).

6. CONTACT
   - Short line: "Looking for a developer? Let's talk."
   - Large mailto button (hello@example.com), GitHub link. Leave an optional LinkedIn slot in the data file that stays hidden while empty.
   - Simple footer with name and current year.

# TECH / QUALITY
- Stack: Vite + React + React Router + Tailwind CSS. JavaScript, not TypeScript.
- Use HashRouter (not BrowserRouter) so detail pages work on GitHub Pages with refresh and shared links. Project routes: /#/projects/:slug.
- Self-host fonts with @fontsource packages (Inter, Space Grotesk) rather than loading from Google Fonts.
- Configure vite.config.js with a base path read from an environment variable, defaulting to "/".
- Add a GitHub Actions workflow (.github/workflows/deploy.yml) that builds and deploys to GitHub Pages. Do NOT push, commit, or publish anything yourself.
- Add page title, meta description, and a favicon. Skip Open Graph tags for now.
- Write a README.md that explains: how to run locally, which file to edit to change content, where to put real screenshots, and how to deploy.