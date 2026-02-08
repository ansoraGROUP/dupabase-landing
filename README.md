# Dupabase Landing

Landing page for [dupabase.dev](https://dupabase.dev) — built with Next.js 16, Tailwind CSS 4, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui, Radix UI
- **Animations:** Framer Motion
- **Code Highlighting:** Shiki

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Docker

```bash
# Build and run with Docker Compose
make up

# Stop
make down

# Rebuild
make build
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages
├── components/
│   ├── landing/    # Landing page sections
│   └── ui/         # shadcn/ui components
└── lib/            # Utilities
```

## Deployment

The landing page is deployed at [dupabase.dev](https://dupabase.dev).
