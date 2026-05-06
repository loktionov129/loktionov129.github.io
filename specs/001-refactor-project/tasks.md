# Refactor Project Tasks

## Phase 1: Setup (project initialization)

- [ ] T001 Create project structure per implementation plan in G:\devnull\loktionov129\loktionov129.github.io\specs\001-refactor-project
- [ ] T002 Install dependencies using npm or yarn in G:\devnull\loktionov129\loktionov129.github.io

## Phase 2: Foundational (blocking prerequisites - MUST complete before user stories)

- [ ] T003 Configure ESLint for linting as defined in .eslintrc.json
- [ ] T004 Set up Jest for unit testing
- [ ] T005 Identify outdated dependencies.
- [ ] T006 Update dependencies using `npm update` or `yarn upgrade`.

## Phase 3: User Stories (P1, P2, P3...)

### US1: Improve Navigation

- [ ] T007 Create Navbar component in src/components/Navbar.js
- [ ] T008 Implement navigation logic in Navbar.js
- [ ] T009 Add routing configuration in pages/_app.js

### US2: Enhance User Profile Page

- [ ] T010 Create UserProfile component in src/pages/userProfile.js
- [ ] T011 Fetch user data from API and display it in UserProfile.js
- [ ] T012 Implement form for updating user profile information
## Phase 4: TypeScript Migration
- [ ] T013 Convert `.js` files to `.ts` and add type definitions.
- [ ] T014 Convert `.jsx` files to `.tsx` and add type definitions.
- [ ] T015 Ensure all components are properly typed.

## Phase 5: Routing Update
- [ ] T016 Configure Next.js app routing in `next.config.js` or equivalent.
- [ ] T017 Update page components to use the new routing system.

## Phase 6: State Management Refactor
- [ ] T018 Install Zustand using npm or yarn (`npm install zustand` or `yarn add zustand`).
- [ ] T019 Replace Redux with Zustand in all relevant files.
- [ ] T020 Update state management logic in components to use Zustand hooks.

## Phase 7: CSS Framework Update
- [ ] T021 Install TailwindCSS v4 using npm or yarn (`npm install tailwindcss@latest` or `yarn add tailwindcss@latest`).
- [ ] T022 Configure TailwindCSS by running the setup command (`npx tailwindcss init -p`).
- [ ] T023 Rewrite existing styles to use TailwindCSS utility classes.

## Phase 8: Testing and Debugging
- [ ] T024 Update Jest tests for new components and services.
- [ ] T025 Run all tests using `npm test` or `yarn test` to ensure everything works correctly.

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T026 Add documentation comments to all components and services
- [ ] T027 Review and update the project documentation (`README.md`, etc.).
