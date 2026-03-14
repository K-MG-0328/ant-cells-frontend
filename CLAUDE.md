# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Type-check with tsc then build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

## Architecture

This is a React 19 + TypeScript project built with Vite, following a **layered feature-based architecture** (DDD-inspired clean architecture).

### Directory Structure

```
src/              # App entry point (main.tsx, App.tsx)
features/         # Feature modules (self-contained vertical slices)
├── sample/       # Each feature has four layers:
│   ├── application/    # Use cases / orchestration
│   ├── domain/         # Business logic, models, entities
│   ├── infrastructure/ # API calls, external service adapters
│   └── ui/             # React components for this feature
infrastructure/   # Shared infrastructure utilities
ui/               # Shared/reusable UI components
```

### Layer Responsibilities

- **domain**: Pure business logic and data models — no framework dependencies
- **application**: Orchestrates domain logic; coordinates between domain and infrastructure
- **infrastructure**: External concerns (HTTP requests, storage, third-party services)
- **ui**: React components and presentation logic; consumes application layer

New features should follow this same four-layer structure under `features/`.

### TypeScript

Strict mode is enabled (`noUnusedLocals`, `noUnusedParameters`). The project uses two tsconfig files:
- `tsconfig.app.json` — targets application code (ES2022)
- `tsnet.node.json` — targets `vite.config.ts` (ES2023)

TypeScript compilation is handled by Vite at runtime; `tsc -b` in the build script is for type-checking only.
