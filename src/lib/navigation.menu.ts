import { iMenu } from '~/interfaces/navigation.interface.ts';

export const startMenu: iMenu[] = [
  { text: 'Introduction', name: 'Introduction' },
  { text: 'Quick Start', name: 'QuickStart' },
]

export const architectureMenu: iMenu[] = [
  { text: 'Api', name: 'Api' },
  { text: 'Router', name: 'Router' },
  { text: 'Store', name: 'Store' },
  { text: 'Layouts', name: 'Layouts' },
  { text: 'Views', name: 'Views' },
  { text: 'Components', name: 'Components' },
  { text: 'Styles', name: 'Styles' },
]

export const examplesMenu: iMenu[] = [
  { text: 'Login Page', name: 'LoginExample' },
  { text: 'Not for guest', name: 'AccessExample' },
  { text: 'Tabs', name: 'TabsExample' },
  { text: 'Notification', name: 'NotificationExample' },
  { text: 'Teleport', name: 'TeleportExample' },
  { text: 'Config Provider', name: 'ConfigProviderExample' },
  { text: 'Quick Tips', name: 'QuickTips' },
]

export const instrumentsMenu: iMenu[] = [
  { text: 'Vuelidate', to: 'https://vuelidate-next.netlify.app/', external: true },
  { text: 'VueUse', to: 'https://vueuse.org/', external: true },
  { text: 'Faker', to: 'https://fakerjs.dev', external: true },
  { text: 'Iconify', to: 'https://iconify.design', external: true },
  { text: 'Mock adapter', to: 'https://github.com/ctimmerm/axios-mock-adapter', external: true },
  { text: 'Pinia', to: 'https://pinia.vuejs.org/', external: true },
  { text: 'AutoAnimate', to: 'https://auto-animate.formkit.com/', external: true },
]

export const navMenu = [
  { title: 'Getting Started', menu: startMenu },
  { title: 'Basic Architecture', menu: architectureMenu },
  { title: 'Examples', menu: examplesMenu },
  { title: 'Instruments', menu: instrumentsMenu },
]
