This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Prerequisites

1. Install the Vercel CLI globally:

```bash
npm install -g vercel
```

1. Login to your Vercel account:

```bash
vercel login
```

### Deploy to Vercel

#### Production Deployment

```bash
npm run deploy
# or
vercel --prod
```

#### Preview Deployment

```bash
npm run deploy-preview
# or
vercel
```

### Automatic Deployments

This project is configured for automatic deployments when connected to a Git repository:

- **Production**: Deployments are triggered on pushes to the `main` branch
- **Preview**: Deployments are triggered on pushes to any other branch or pull requests

### Environment Variables

If your application uses environment variables, add them in the Vercel dashboard:

1. Go to your project settings on Vercel
2. Navigate to the "Environment Variables" section
3. Add your variables for different environments (Production, Preview, Development)

### Configuration Files

- `vercel.json`: Main Vercel configuration
- `.vercelignore`: Files to ignore during deployment
- `next.config.ts`: Next.js configuration optimized for Vercel
