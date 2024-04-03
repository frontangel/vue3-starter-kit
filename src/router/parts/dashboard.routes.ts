export const dashboardRoutes: any[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('~/views/Dashboard/DashboardView.vue'),
    meta: {
      layout: 'Sidebar',
      requiresAuth: true
    }
  }
]

export default dashboardRoutes
