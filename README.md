## SunGod Lens Guide MVP Component

This application has been written to create a React Functional Component that can demonstrate to the user the difference between different types of polarized lenses that SunGod offers. The component is made of 3 smaller components:

1. `PageLayout` - The layout of the component and the selection of lenses.
2. `ImageViewer` - The image displaying component, handles showing images and adjusting displayed percentage.
3. `ImageSelector` - The image selecting component, handles which base image is selected.

## Setup

1. `git clone https://github.com/LukeDoughtyy/SunGodApllication.git` - clone this repo
2. `npm install` - install dependencies
3. `npm run dev` - run application

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
