import {iMenu} from "~/interfaces/navigation.interface.ts";

export const startMenu: iMenu[] = [
  { text: 'Introduction', to: '/guide' },
  { text: 'Quick Start', to: '/guide/quick-start' },
]

export const architectureMenu: iMenu[] = [
  { text: 'Api', to: '/guide/api' },
  { text: 'Router', to: '/guide/router' },
  { text: 'Store', to: '/guide/store' },
  { text: 'Layouts', to: '/guide/layouts', disabled: true },
  { text: 'Views', to: '/guide/views', disabled: true },
  { text: 'Components', to: '/guide/components', disabled: true },
  { text: 'Styles', to: '/guide/styles', disabled: true },
]

export const examplesMenu: iMenu[] = [
  { text: 'Login Form', to: '/guide/login-example' },
  { text: 'Not for guest', to: '/guide/access-example' },
  { text: 'Table', to: '/guide/table-example', disabled: true },
  { text: 'Notification', to: '/guide/table-example', disabled: true },
  { text: 'Teleport', to: '/guide/teleport-example' },
  { text: 'Config Provider', to: '/guide/config-provider', disabled: true },
]

export const instrumentsMenu: iMenu[] = [
  { text: 'VueForm', to: '/', disabled: true },
  { text: 'VueUse', to: '/', disabled: true },
]

export const navMenu = [
  { title: 'Getting Started', menu: startMenu },
  { title: 'Basic Architecture', menu: architectureMenu },
  { title: 'Examples', menu: examplesMenu },
  { title: 'Instruments', menu: instrumentsMenu },
]
