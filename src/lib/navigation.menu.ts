import { iMenu } from '~/interfaces/navigation.interface.ts';

export const startMenu: iMenu[] = [
  { text: 'Introduction', name: 'Introduction' },
  { text: 'Quick Start', name: 'QuickStart' },
]

export const architectureMenu: iMenu[] = [
  { text: 'Api', name: 'Guide' },
  { text: 'Router', name: 'Api' },
  { text: 'Store', name: 'Store' },
  { text: 'Layouts', name: 'Layouts' },
  { text: 'Views', disabled: true, name: '' },
  { text: 'Components', disabled: true, name: '' },
  { text: 'Styles', disabled: true, name: '' },
]

export const examplesMenu: iMenu[] = [
  { text: 'Login Form', name: 'LoginExample' },
  { text: 'Not for guest', name: 'AccessExample' },
  { text: 'Table', disabled: true, name: '' },
  { text: 'Notification', disabled: true, name: '' },
  { text: 'Teleport', name: 'TeleportExample' },
  { text: 'Config Provider', disabled: true, name: '' },
]

export const instrumentsMenu: iMenu[] = [
  { text: 'VueForm', to: '/', disabled: true, name: '' },
  { text: 'VueUse', to: '/', disabled: true, name: '' },
]

export const navMenu = [
  { title: 'Getting Started', menu: startMenu },
  { title: 'Basic Architecture', menu: architectureMenu },
  { title: 'Examples', menu: examplesMenu },
  { title: 'Instruments', menu: instrumentsMenu },
]
