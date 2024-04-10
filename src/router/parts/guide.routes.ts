export const guideRoutes: any[] = [
  {
    path: '/guide',
    redirect: '/guide/introduction',
    meta: {
      layout: 'Sidebar',
      requiresAuth: true
    },
    children: [
      {
        path: 'introduction',
        name: 'Introduction',
        component: () => import('~/views/Guide/IntroductionView.vue'),
        meta: {
          title: 'Introduction'
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
        component: () => import('~/views/Guide/QuickStartView.vue'),
        meta: {
          title: 'Router'
        }
      },
      {
        path: 'state',
        name: 'State',
        component: () => import('~/views/Guide/QuickStartView.vue'),
        meta: {
          title: 'State'
        }
      },
      {
        path: 'api',
        name: 'Api',
        component: () => import('~/views/Guide/QuickStartView.vue'),
        meta: {
          title: 'Api'
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
