import { RouteLocationNormalized } from 'vue-router'
import { useTitle } from '~/utils/seo.utils.ts'

export function seoMiddleware(to: RouteLocationNormalized) {
  useTitle(to.meta.title as string)
}
