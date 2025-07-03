# Personal Website

A modern, responsive personal website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Clean, minimal design with smooth transitions
- Mobile-first responsive layout
- Sections:
  - Homepage with hero section and social links
  - Resume with experience timeline
  - Twitter feed with selected tweets
  - Bots showcase with project details

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd personal-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel

1. Install the Vercel CLI
```bash
npm install -g vercel
```

2. Deploy to Vercel
```bash
vercel
```

3. Follow the prompts to configure your deployment

### Netlify

1. Install the Netlify CLI
```bash
npm install -g netlify-cli
```

2. Deploy to Netlify
```bash
netlify deploy
```

3. Follow the prompts to configure your deployment

## Customization

### Social Links

Update the social links in `src/app/page.tsx` with your own profiles.

### Resume Content

Edit the experience timeline in `src/app/resume/page.tsx` to add your own experience.

### Twitter Feed

Update the hardcoded tweets in `src/app/twitter/page.tsx` with your own tweets.

### Bots Section

Add new bot projects to the `bots` array in `src/app/bots/page.tsx`.

### Styling

- Color scheme can be modified in `tailwind.config.js`
- Font family is set in `src/app/layout.tsx`
- Global styles are in `src/app/globals.css`

## License

MIT
