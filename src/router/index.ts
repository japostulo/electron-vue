/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

export const layouts = {
  default: () => import('@/layouts/Default.vue'),
}

const routes: RouteRecordRaw[] = []

const routeModules: any = import.meta.glob('@/modules/*/router/*.ts', { eager: true });

for (const path in routeModules) {
  routes.push(...routeModules[path].default)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
