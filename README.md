# TypeScript + ESLint + Prettier + Jest + Tailwind CSS with Vite

This is a template project that integrates:

- Vite as the build tool and development server
- TypeScript for type-safe code
- ESLint for code quality
- Prettier for consistent code formatting
- Jest for testing
- Tailwind CSS for utility-first styling

## Features

- React with TypeScript using SWC for fast compilation
- ESLint configured with TypeScript support
- Prettier integration for consistent code style
- Jest configured for TypeScript testing with coverage reports
- Tailwind CSS for rapid UI development
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

3. Initialize Git repository (if you didn't clone an existing one):

```bash
git init
git add .
git commit -m "Initial commit"
```

4. Start the development server:

```bash
npm run dev
```

## Step-by-Step Setup Process

This template was created with the following steps:

1. Create a new Vite project with TypeScript template:

   ```bash
   npm create vite@latest . -- --template typescript
   npm install
   ```

2. Install and configure ESLint:

   ```bash
   npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

3. Install and configure Prettier:

   ```bash
   npm install -D prettier eslint-plugin-prettier eslint-config-prettier
   ```

4. Install Jest for testing:

   ```bash
   npm install -D jest ts-jest @types/jest
   npm install -D jest-environment-jsdom
   npm install -D ts-node # Required for TypeScript config files
   ```

5. Install React Testing Library:

   ```bash
   npm install -D @testing-library/react @testing-library/jest-dom
   ```

6. Install CSS modules mock for Jest:

   ```bash
   npm install -D identity-obj-proxy
   ```

7. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss @tailwindcss/vite autoprefixer
   npm install -D @tailwindcss/postcss postcss
   npm install -D tailwindcss-cli
   npx tailwindcss-cli init -p
   ```

8. Update Tailwind configuration to process your content files:

   ```js
   // tailwind.config.js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   ```js
   // postcss.config.js
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   };
   ```

   ```js
   // vite.config.ts
   import { defineConfig } from 'vite';
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

   ```css
   // index.css
   @import "tailwindcss";
   ```

9. Add Tailwind directives to your CSS file:

   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

10. Initialize Git repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

## Installed Packages

### Main Dependencies

- `react`: UI library
- `react-dom`: React DOM renderer

### Development Dependencies

- `vite`: Build tool and dev server
- `typescript`: TypeScript language support
- `@types/react`, `@types/react-dom`: Type definitions
- `@vitejs/plugin-react-swc`: Fast React compiler for Vite

#### ESLint

- `eslint`: Code linter
- `@typescript-eslint/parser`: TypeScript parser for ESLint
- `@typescript-eslint/eslint-plugin`: TypeScript rules for ESLint
- `eslint-plugin-react-hooks`: React Hooks rules
- `eslint-plugin-react-refresh`: React Refresh rules
- `eslint-plugin-prettier`: Run Prettier as an ESLint rule
- `eslint-config-prettier`: Turn off ESLint rules that conflict with Prettier

#### Prettier

- `prettier`: Code formatter

#### Jest

- `jest`: Testing framework
- `ts-jest`: TypeScript support for Jest
- `@types/jest`: TypeScript types for Jest
- `jest-environment-jsdom`: DOM environment for Jest
- `ts-node`: TypeScript execution for Jest config
- `identity-obj-proxy`: Mock CSS modules in tests

#### Testing Libraries

- `@testing-library/react`: Testing utilities for React
- `@testing-library/jest-dom`: DOM testing assertions

#### Tailwind CSS

- `tailwindcss`: Utility-first CSS framework
- `postcss`: CSS processing tool
- `autoprefixer`: Vendor prefixing for CSS

## Important Notes and Gotchas

⚠️ **Things to be careful about:**

1. **TypeScript Configuration**: The project uses three TypeScript config files:

   - `tsconfig.json`: The main entry point that references other configs
   - `tsconfig.app.json`: For application code
   - `tsconfig.jest.json`: For tests

   Be careful when modifying them to maintain compatibility.

2. **Jest Configuration**: Jest requires `jest-environment-jsdom` and `ts-node` packages. Without them, tests will fail.

3. **ESLint & Prettier**: The configuration carefully integrates both tools. Changing ESLint rules might conflict with Prettier.

4. **Line Endings**: Git may show warnings about CRLF/LF line endings, especially on Windows. Configure Git appropriately for your environment.

5. **React Version**: This template uses React 19. If you need to support older projects, downgrade React and update dependencies accordingly.

6. **Module Resolution**: The project uses different module resolution strategies for the app (bundler) and tests (node). Keep this in mind when importing modules.

7. **Tailwind CSS Configuration**: The `tailwind.config.js` file is pre-configured for this project. Modify it as needed for custom styles.

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
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # TypeScript app configuration
├── tsconfig.jest.json   # TypeScript test configuration
└── vite.config.ts       # Vite configuration
```

## Extending the Configuration

You can easily extend or modify the ESLint, Prettier, Jest, or Tailwind CSS configurations according to your project needs.
