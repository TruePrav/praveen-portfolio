# praveen-portfolio - Agent Guide

> What: Praveen Mahtani's personal portfolio (praveenmahtani.xyz): AI Agent Engineer positioning, shipped systems, agent network, skills, resume. Stack: Next.js 14.2 (app router) / React 18 / TypeScript strict / Tailwind 3.4 / Vercel. Status: live at https://www.praveenmahtani.xyz (the apex 307-redirects to www; `site.url` uses www; main branch auto-deploys on Vercel).

## Commands
- dev: `npm run dev` (port 3000) | build: `npm run build` | lint: `npm run lint` | types: `npx tsc --noEmit`
- No tests, no database, no env vars. Vercel Analytics is wired in `app/layout.tsx`.
- Deploy: push to `main`; Vercel builds. (`npm run deploy` / gh-pages is legacy and unused.)

## Codemap (where's the thing that does X)
- `app/content.ts` - THE single source of all copy and data: site (incl. `site.url`, the one domain source), hero, projects, references (businesses + logos), agentNetwork, skills, exploring, about, contact, resume (web2, web3, certifications). Edit copy here, never in components. Plain data, exported types.
- `app/page.tsx` - home page (Island design): skip link, Nav, then Hero, References (`#references`), Work (`#work`), Systems (`#systems`), Skills (`#skills`), About (`#about`), Contact (`#contact`), Footer.
- `app/components/` - Island components, each reads `content.ts`: `Nav.tsx` (client, sticky, mobile menu, `base` prop makes anchors `/#work` off the home page), `nav-links.ts` (section labels), `Hero.tsx` (coral italic phrase is the `HIGHLIGHT` constant), `References.tsx` (first reference is the featured wide card), `Work.tsx` (featured with logo = logo tile story; featured without logo = "At a glance" panel; non-featured = mini grid; mini cards show 5 stack pills and keep the rest in the HTML, visually hidden until the list is hovered, so AI readers see the full stack), `Systems.tsx` (Alfred illustration on the orchestrator card; agents show name + short title only), `Skills.tsx`, `About.tsx`, `Contact.tsx` + `CopyButton.tsx` (client), `Footer.tsx`, `parts.tsx` (`LogoTile`, `StatusChip`, `SectionHead`), `icons.tsx`.
- `app/components/island.module.css` - ALL Island tokens (`--sand`, `--ink`, `--teal`, `--coral`, `--serif`, `--sans`, shadows, radii) are defined on its `.root` class, applied to `<body>` in `app/layout.tsx`, so every route inherits them. Also holds shared component styles.
- `app/resume/` - `/resume`: `page.tsx` (server; header, certifications, Nav with `base="/"`, Footer), `ResumeTabs.tsx` (client, accessible Web2/Web3 tablist, shows `experience.logo` when set), `resume.module.css` (includes `@media print`: white, nav/footer hidden, both tabs printed). Data from `content.resume`.
- Logos: `public/logos/` (`play.png`, `levelup.png`, `digisales.png` + `digisales-on-dark.png`, `greenbox.jpg`, `silverware.png`), referenced from `content.ts`. `tone: 'dark'` logos sit on a dark plate, `tone: 'light'` on a light plate. Old `public/play-logo.png`, `tp-logo.png`, `greenbox-logo.png`, `digisales2.png`, `digisales-old.png` are unused leftovers.
- `/bots` and `/twitter` were removed 2026-10-20; `next.config.js` permanently redirects both to `/`. Copies in `C:\sync\praveen-portfolioackup-2026-10-20-hero-circleemoved-pages\`.
- Backups: the previous dark design, globals, layout, resume and the rejected design proposals are in `C:\sync\praveen-portfolio\backup-2026-10-16-pre-island\`.
- `app/globals.css` - minimal base only: Tailwind directives, box-sizing, smooth scroll (off for reduced motion), body bg/color. No design tokens here.
- `app/layout.tsx` - root layout: Fraunces + Manrope via `next/font/google`, Island root class on `<body>`, Analytics, metadata (title, description, openGraph, twitter card) and a schema.org Person JSON-LD block, all from `content.ts`.
- Machine-readable routes, all generated from `content.ts`: `app/llms.txt/route.ts` (`/llms.txt`, full plain-text profile: projects with full stacks, agents, skills, experience), `app/sitemap.ts` (`/sitemap.xml`: home, resume, llms.txt), `app/robots.ts` (`/robots.txt`, allow all + sitemap).
- `public/` - `praveenpfp.jpeg` (portrait), `alfred-orchestrator.webp` (Alfred org-chart illustration, used in Systems and as Alfred's Work tile via `Logo.art`), `logos/`, favicon.
- `public/logos/` - official business logos (play, levelup, digisales + digisales-on-dark, greenbox, silverware), fetched from each business's own site 2026-10-16, trimmed; wired via the `Logo` type (`tone` = which plate colour it needs, `plate` = custom plate colour, `art: true` = illustration that fills the tile edge to edge) on `references` and some `projects`.
- Config: `next.config.js` (security headers + CSP: scripts self only, styles self + fonts.googleapis, fonts self + fonts.gstatic, images self/data/https), `tailwind.config.js` (custom colors/animations), `app/next.config.js` is an unused leftover (`output: export`), ignored by Next.
- Docs: `README.md`, `REDESIGN-SUMMARY.md` and `SECURITY-AUDIT.md` are historical (March 2026).

## Invariants & gotchas
- Copy lives ONLY in `app/content.ts`. A renderer that hardcodes a project, agent, metric or link is a bug.
- No invented metrics: every number in `content.ts` traces to the resume or the project registry (`C:\sync\_alfred\Projects.md`). No uptime percentages.
- No em dashes in copy (Praveen's rule). No client names beyond the ones already public (PLAY Barbados, Greenbox Barbados, Digisales, ailevelup.ca, Infinite Technology Inc., LevelUp Enterprises Inc.). No phone numbers, wallets, balances.
- Fonts only via `next/font/google` (self-hosted at build); the CSP blocks any other origin. No external scripts.
- Island contrast rules: plain coral `#E8664A` is decorative only (never text); coral text uses `#BE3F25` (large type) or `#8F2E18`; teal text uses `#0B645D`.
- Section ids on the home page are `references`, `work`, `systems`, `skills`, `about`, `contact`; `hero.primaryCta.target` is `work` and maps directly.
- Build is static (all routes prerendered). `npm run build` must stay green before any push.

## Deeper docs
- Vault: `C:\sync\praveen-portfolio\_vault\` (gitignored, lives in the main checkout only): `Architecture.md`, `Changelog.md`, `Decisions.md`, `Open-Questions.md`.

<!-- Update rule: adding/moving/renaming routes, components, content sections or config = update this file in the same commit/session. Keep under ~150 lines. -->
