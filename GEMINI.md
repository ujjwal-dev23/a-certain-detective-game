# Project Overview: a-certain-detective-game

A detective-themed web game built with **Preact** and **Vite**, utilizing **PocketBase** as a backend and **Pico CSS** for a minimal, responsive UI.

## Main Technologies
- **Frontend Framework:** [Preact](https://preactjs.com/)
- **Build Tool/Bundler:** [Vite](https://vitejs.dev/)
- **Backend-as-a-Service:** [PocketBase](https://pocketbase.io/)
- **Styling:** [Pico CSS](https://picocss.com/)
- **Routing & SSR:** [preact-iso](https://github.com/preactjs/preact-iso)
- **Language:** TypeScript

## Architecture
- **Frontend (`src/`):** A Single Page Application (SPA) using `preact-iso` for routing and Vite's prerendering capabilities.
- **Backend (`pocketbase/`):** Contains the PocketBase configuration, data, and migrations.
- **Services (`src/services/`):** Contains the `pb-client.ts` for interacting with the PocketBase API.

## Building and Running

### Development
Starts a development server at `http://localhost:5173/`.
```bash
pnpm dev
```

### Production Build
Builds the project for production, emitting to `dist/`. Prerenders routes to static HTML.
```bash
pnpm build
```

### Preview Production Build
Starts a local server to test the production build at `http://localhost:4173/`.
```bash
pnpm preview
```

### Backend (PocketBase)
The backend files are located in the `pocketbase/` directory. 

## Development Conventions

### Styling
- Uses **Pico CSS** for automatic, classless-style UI elements.
- Custom styles should be kept to a minimum or added via Vanilla CSS in `src/style.css`.

### Backend Integration
- Use the singleton instance provided in `src/services/pb-client.ts` for all PocketBase operations.
- Ensure `VITE_DB_URL` is set in your environment variables (e.g., `.env` file).

### Routing
- Routes are defined in `src/index.tsx` using the `Router` component from `preact-iso`.
- Pages are located in `src/pages/`.

### Code Style
- TypeScript is used throughout the project.
- ESLint is configured with `eslint-config-preact`.
- Prefer functional components and hooks.

### File Structure
- `src/components/`: Reusable UI components.
- `src/pages/`: Main view components associated with routes.
- `src/services/`: External API clients and business logic.
- `pocketbase/pb_migrations/`: Database schema migrations.
