Pokémon Expo App

A high-performance, mobile-first Pokédex built with React Native, Expo SDK 54, and TanStack Query. This project was developed as a technical assessment to demonstrate modern mobile architecture, clean UI composition, and resilient data-fetching strategies.

Tech Stack

    Framework: Expo (SDK 54)

    Navigation: Expo Router (Type-safe file-based routing)

    State & Data: TanStack Query v5 (Server state management)

    Networking: Axios (Centralized API client)

    Styling: NativeWind (Tailwind CSS) & React Native Paper

    Testing: Jest & React Native Testing Library

Architectural Highlights
 Modular Component Design

The application follows the Single Responsibility Principle. I decomposed the complex Detail view into atomic sub-components (DetailHero, BreedingSection, StatsSection, MovesSection). This modularity ensures:

    Scalability: Each section can be updated or tested in isolation.

    Readability: The "Controller" files remain slim and focused on logic.

 Resilient Data Fetching

Using TanStack Query, I implemented a robust caching layer:

    Optimistic UI: Data is cached locally to provide instant navigation back to previously viewed Pokémon.

    Error Handling: Integrated a custom ErrorState with retry logic to handle API timeouts gracefully.

    Transformation Layer: API data is sanitized and formatted (e.g., metric conversions, string capitalization) before reaching the UI.

 Design & UX Fidelity

    Dynamic Theming: UI accents and background colors automatically adapt based on the Pokémon's primary type using a custom design token system.

    Layout Stability: Implemented Skeleton Loaders for both the Grid and Detail views to eliminate layout shift (CLS) and improve perceived performance.

    Contextual Interaction: A Modal-based moves list allows users to view complete move sets without losing their place in the detail view.

Getting Started
Prerequisites

    Node.js (v18 or newer)

    npm or yarn

    Expo Go app on a physical device or an Android/iOS emulator

Installation & Setup

1.Clone the repository:
git clone https://github.com/bekidink/pokemon-expo-app.git
cd pokemon-expo-app

2.Install dependencies:
npm install --legacy-peer-deps

3.Start the development server:
npm start

Testing

The test suite is configured with jest-expo to provide an environment that accurately mocks the React Native runtime.


npm test
npm run test:watch

Directory Structure
├── app/               # Expo Router pages (Navigation logic)
├── components/        
│   ├── pokemon/       # Domain-specific components
│   └── ui/            # Reusable UI (Skeletons, ErrorStates, Inputs)
├── constants/         # Design tokens and TYPE_COLORS
├── hooks/             # Custom TanStack Query hooks
├── services/          # API services and Axios configuration


