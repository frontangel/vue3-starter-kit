export const introductionRoutes: any[] = [
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
        component: () => import('~/views/Dashboard/DashboardView.vue'),
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('~/views/Dashboard/DashboardView.vue'),
      }
    ]
  }
]

export default introductionRoutes
