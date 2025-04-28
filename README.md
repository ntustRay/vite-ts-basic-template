# TypeScript + ESLint + Prettier + Jest with Vite

This is a template project that integrates:
- Vite as the build tool and development server
- TypeScript for type-safe code
- ESLint for code quality
- Prettier for consistent code formatting
- Jest for testing

## Features

- React with TypeScript using SWC for fast compilation
- ESLint configured with TypeScript support
- Prettier integration for consistent code style
- Jest configured for TypeScript testing with coverage reports
- Ready-to-use development environment

## Getting Started

1. Clone this repository:
```bash
git clone <repository-url>
cd vite-ts-basic-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:coverage` - Generate test coverage report

## Project Structure

```
vite-ts-basic-template/
├── node_modules/
├── public/
├── src/
│   ├── __tests__/       # Test files
│   ├── assets/          # Static assets
│   ├── components/      # React components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .prettierrc          # Prettier configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── jest.config.ts       # Jest configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # TypeScript app configuration
├── tsconfig.jest.json   # TypeScript test configuration
└── vite.config.ts       # Vite configuration
```

## Extending the Configuration

You can easily extend or modify the ESLint, Prettier, or Jest configurations according to your project needs.
