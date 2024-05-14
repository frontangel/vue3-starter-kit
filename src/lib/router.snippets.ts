export const rooterMiddlewareSnippet = `import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

function isUserAuthenticated(): boolean {
  return Boolean(localStorage.getItem('accessToken') || localStorage.getItem('refreshToken'))
}

// @ts-ignore
export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  // Redirect to main page id user is Auth
  if (to.name === 'SignIn' && isUserAuthenticated()) {
    return next('/')
  }

  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    return next({ name: 'SignIn', query: { redirect: to.name?.toString() } })
  }
  next()
}
`
export const routerPartSnippet = `export const authRoutes = [
  {
    path: '/auth',
    redirect: '/auth/sign-in',
    meta: {
      layout: 'Auth'
    },
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('~/views/Auth/SignInView.vue'),
        meta: {
          title: 'Sign In'
        }
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('~/views/Auth/SignUpView.vue'),
        meta: {
          title: 'Sign Up'
        }
      }
    ]
  }
]

export default authRoutes
`
export const indexRouterSnippet = `import { createRouter, createWebHistory } from 'vue-router'
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
  // parts
  ...authRoutes,
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
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes
})

// middlewares
router.beforeEach(authGuard)
router.afterEach(seoMiddleware)

export default router
`
