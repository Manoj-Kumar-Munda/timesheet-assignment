# Timesheet Management System

A Next.js application for managing employee timesheets with authentication and dashboard functionality.

## Tech Stack

- **Next.js 15** - React framework
- **React 19** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ShadCN/UI** - Component library
- **NextAuth.js** - Authentication
- **Lucide React** - Icons

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create `.env.local` file:
```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- `app/` - Next.js pages and API routes
- `components/` - React components (UI, dashboard, header, footer)
- `data/` - Mock data
- `lib/` - Utility functions
- `middleware.ts` - Authentication middleware

## Authentication

Uses NextAuth.js with credentials provider. Login credentials are configured in the mock data.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting