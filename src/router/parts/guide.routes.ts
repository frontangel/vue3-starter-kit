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
        path: 'layouts',
        name: 'Layouts',
        component: () => import('~/views/Guide/LayoutsView.vue'),
        meta: {
          title: 'Layouts'
        }
      },
      {
        path: 'views',
        name: 'Views',
        component: () => import('~/views/Guide/ViewsView.vue'),
        meta: {
          title: 'Views'
        }
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import('~/views/Guide/ComponentsView.vue'),
        meta: {
          title: 'Components'
        }
      },
      {
        path: 'styles',
        name: 'Styles',
        component: () => import('~/views/Guide/StylesView.vue'),
        meta: {
          title: 'Styles'
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
        path: 'access-example',
        name: 'AccessExample',
        component: () => import('~/views/Guide/AccessExampleView.vue'),
        meta: {
          title: 'Access Page Example',
          requiresAuth: true
        },
      },
      {
        path: 'tabs-example',
        name: 'TabsExample',
        component: () => import('~/views/Guide/TabsExampleView.vue'),
        meta: {
          title: 'Tabs Example'
        }
      },
      {
        path: 'notification-example',
        name: 'NotificationExample',
        component: () => import('~/views/Guide/NotificationsExampleView.vue'),
        meta: {
          title: 'Notification Example'
        }
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
        path: 'config-provider-example',
        name: 'ConfigProviderExample',
        component: () => import('~/views/Guide/ConfigProviderExampleView.vue'),
        meta: {
          title: 'Config Provider Example'
        }
      },
    ]
  }
]

export default guideRoutes
