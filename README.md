# Game Hub

<img width="800" alt="Screenshot 2024-05-10 at 04 02 49" src="https://github.com/noureddineleg/game-hub/assets/58888748/92cbe360-72bf-41e0-b620-9135a40ccbff">
<img width="800" alt="Screenshot 2024-05-10 at 04 02 06" src="https://github.com/noureddineleg/game-hub/assets/58888748/1f7b58ab-9bf1-4313-bd9e-f02ee5526b0b">


## Overview
Game Hub is a web application developed with React JS and TypeScript, leveraging the RAWG.io API to provide comprehensive video game data. It's designed to offer users detailed information on various games, enabling seamless browsing and exploration of titles across different platforms.

## Key Features
- **Search Functionality**: Users can search for games based on title, genre, or platform.
- **Game Details**: Access in-depth details for each game, such as descriptions, release dates, and ratings.
- **Responsive Design**: Optimized for various devices to ensure a smooth user experience across desktops, tablets, and smartphones.

## Technologies
- **React JS**: Manages the frontend UI components.
- **TypeScript**: Enhances JavaScript with type safety for more robust and error-free code.
- **RAWG.io API**: Sources all game information displayed within the app.
- **Vercel**: Deploys and hosts the application, providing a live and accessible web presence.

## Getting Started
Follow these steps to get a local copy up and running:

1. **Clone the repository**
```bash
   git clone https://github.com/noureddineleg/game-hub
   cd game-hub
```

2. **Install dependencies**
```bash
   npm install
```
4. **Environment Configuration**
   Insert your RAWG.io API key

5. **Launch the application**
```bash
  npm start
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
