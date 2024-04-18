import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '~/router/parts/dashboard.routes.ts'
import authRoutes from '~/router/parts/auth.routes.ts'
import { authGuard } from '~/router/middleware/auth.middleware.ts'
import { seoMiddleware } from '~/router/middleware/seo.middleware.ts'
import guideRoutes from '~/router/parts/guide.routes.ts'

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/guide'
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...guideRoutes,
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
  history: createWebHistory(import.meta.env.NODE_ENV === 'production' ? '/vue-vite-ts/' : '/'),
  routes
})

router.beforeEach(authGuard)
router.afterEach(seoMiddleware)

export default router
