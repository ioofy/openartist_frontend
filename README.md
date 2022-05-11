# React MarketPlace using CDD Concept

this repo only for learning deep about react also lifecycle and using CDD Concept.

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 💅 Tailwind + Emotion for styling
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🖌 ~~Renovate — Keep your dependencies up to date~~
- 👷 ~~PR Workflow — Run Type Check & Linters on all Pull Requests~~

## Quick Start

If you want to learn this repo using this command to cloning or create the app

```
yarn create next-app -e https://github.com/ioofy/yukBeli
# or
npx create-next-app -e https://github.com/ioofy/yukBeli
```

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic) or pnpm

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from "@/components/Button";

// To import images or other files from the public folder
import avatar from "@/public/avatar.png";
```

### Switch to yarn or npm

By default, this starter uses pnpm, but this choice is yours. If you'd like to switch to yarn, delete the `pnpm-lock.yaml` file, install the dependencies with `npm i or yarn`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
