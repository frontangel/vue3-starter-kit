[![npm version](https://img.shields.io/badge/Vue-v3-limegreen)](https://v3.ru.vuejs.org/)
[![npm version](https://img.shields.io/badge/Vite-v5-fuchsia)](https://vitejs.dev/)
[![npm version](https://img.shields.io/badge/TS-Type_Script-blue)](https://www.typescriptlang.org/)
[![npm version](https://img.shields.io/badge/Pinia-v2-gold)](https://pinia.vuejs.org/)
[![npm version](https://img.shields.io/badge/Vuelidate-v2-forestgreen)](https://vuelidate-next.netlify.app/)
[![npm version](https://img.shields.io/badge/Uno-Css-gainsboro)](https://unocss.dev/)

# Vue 3 Starter Kit

### Hello friend!
I want to introduce you to a starter kit that helps me in developing Front-End. It contains everything necessary for a quick start on almost any project on Vue. You will be able to find a detailed description of the project architecture with examples and references.


### Architecture:

- **api** - Manages all requests to external or internal APIs.
  - **mock** - Used for storing mock data and functions that simulate responses from external APIs.
- **assets** - For storing static resources of the app.
    - **fonts** - Fonts.
    - **icons** - Icons.
    - **img** - Images.
- **components** - The main place for storing Vue components.
    - **common** - Universal components that can be used in many parts of the app.
    - **feature** - Components specific to certain functional parts or "features" of the app.
- **layouts** - Used for storing layout components that define the structure of the main page layouts in the app.
- **router** - For storing configurations and scripts related to routing.
    - **middleware** - Functions that are executed before entering a route or during route changes.
    - **parts** - For storing configurations and scripts related to routing.
- **store** - For storing all the logic and state of the app.
- **styles** - Storing styles that define the appearance of the app.
- **utils** - Auxiliary functions that can be used in different parts of the app.
- **views** - Pages or large sections of the app.

### How to use

Clone the Vue3 Starter Kit from GitHub using the following command:

```bash
git clone git@github.com:frontangel/vue3-starter-kit.git
```

#### Configuring UnoCSS
Edit the `uno.config.ts` file to configure UnoCSS according to your project needs.

#### Configuring SCSS

Modify the following SCSS files to tailor the styles:

- `styles/_root.scss` - Use this file to set global styles, such as CSS variables.
- `styles/_config.scss` - This file is for setting up SCSS variables, mixins, and functions that are used across your project.

### Libraries:
- [**VueUse**](https://vueuse.org/) - Collection of Vue Composition Utilities.
- [**Vuelidate**](https://vuelidate-next.netlify.app/) - Vuelidate is considered model-based because the validation rules are defined next to your data, and the validation tree structure matches the data model structure.
- [**Faker**](https://fakerjs.dev/) - Generate massive amounts of fake (but realistic) data for testing and development.
- [**Iconify**](https://iconify.design/) - All popular icon sets, one framework.
- [**Pinia**](https://pinia.vuejs.org/) - The intuitive store for Vue.js.
- [**axios-mock-adapter**](https://github.com/ctimmerm/axios-mock-adapter#readme) - Axios adapter that allows to easily mock requests.


### [Demo](https://vue3-starter-kit.frontangel.dev/)

