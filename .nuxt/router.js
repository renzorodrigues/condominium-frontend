import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30de8c24 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1fb5bae9 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _11cfb866 = () => interopDefault(import('..\\pages\\admin\\condominiums\\index.vue' /* webpackChunkName: "pages/admin/condominiums/index" */))
const _5fa0fd26 = () => interopDefault(import('..\\pages\\admin\\condominiums\\_id\\index.vue' /* webpackChunkName: "pages/admin/condominiums/_id/index" */))
const _f3ae32be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _30de8c24,
    name: "admin"
  }, {
    path: "/inspire",
    component: _1fb5bae9,
    name: "inspire"
  }, {
    path: "/admin/condominiums",
    component: _11cfb866,
    name: "admin-condominiums"
  }, {
    path: "/admin/condominiums/:id",
    component: _5fa0fd26,
    name: "admin-condominiums-id"
  }, {
    path: "/",
    component: _f3ae32be,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
