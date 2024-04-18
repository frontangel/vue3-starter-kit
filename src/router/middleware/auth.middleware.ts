import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

function isUserAuthenticated(): boolean {
  return Boolean(localStorage.getItem('accessToken') || localStorage.getItem('refreshToken'))
}

// @ts-ignore
export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (to.name === 'SignIn' && isUserAuthenticated()) {
    return next('/')
  }

  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    return next({ name: 'SignIn' })
  }
  next()
}
