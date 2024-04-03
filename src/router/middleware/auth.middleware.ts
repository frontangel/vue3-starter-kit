import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

function isUserAuthenticated(): boolean {
  return Boolean(localStorage.getItem('token'))
}

// @ts-ignore
export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    return next({ name: 'SignIn' })
  }
  next()
}
