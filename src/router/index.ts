import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '~/router/parts/dashboard.routes.ts'
import authRoutes from '~/router/parts/auth.routes.ts'
import { authGuard } from '~/router/middleware/auth.middleware.ts'
import { seoMiddleware } from '~/router/middleware/seo.middleware.ts'
import introductionRoutes from '~/router/parts/introduction.routes.ts'

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/dashboard'
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...introductionRoutes,
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('~/views/Errors/NotFoundView.vue'),
    meta: {
      title: 'Page not found',
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(authGuard)
router.afterEach(seoMiddleware)

export default router
