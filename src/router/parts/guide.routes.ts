export const guideRoutes: any[] = [
  {
    path: '/guide',
    redirect: '/guide',
    name: 'Guide',
    meta: {
      layout: 'Sidebar',
    },
    children: [
      {
        path: '',
        name: 'Introduction',
        component: () => import('~/views/Guide/IntroductionView.vue'),
        meta: {
          title: 'Introduction',
        }
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('~/views/Guide/QuickStartView.vue'),
        meta: {
          title: 'Quick Start'
        }
      },
      {
        path: 'router',
        name: 'Router',
        component: () => import('~/views/Guide/RouterView.vue'),
        meta: {
          title: 'Router'
        }
      },
      {
        path: 'store',
        name: 'Store',
        component: () => import('~/views/Guide/StateView.vue'),
        meta: {
          title: 'Store'
        }
      },
      {
        path: 'api',
        name: 'Api',
        component: () => import('~/views/Guide/ApiView.vue'),
        meta: {
          title: 'Api'
        }
      },
      {
        path: 'login-example',
        name: 'LoginExample',
        component: () => import('~/views/Guide/LoginExampleView.vue'),
        meta: {
          title: 'Login Page Example'
        }
      },
      {
        path: '/guide/access-example',
        name: 'AccessExample',
        component: () => import('~/views/Guide/AccessExampleView.vue'),
        meta: {
          title: 'Access Page Example',
          requiresAuth: true
        },
      },
      {
        path: 'teleport-example',
        name: 'TeleportExample',
        component: () => import('~/views/Guide/TeleportView.vue'),
        meta: {
          title: 'Teleport Example'
        }
      },
      {
        path: 'config-provider',
        name: 'ConfigProvider',
        component: () => import('~/views/Guide/ConfigProviderView.vue'),
        meta: {
          title: 'Config Provider'
        }
      },
    ]
  }
]

export default guideRoutes
