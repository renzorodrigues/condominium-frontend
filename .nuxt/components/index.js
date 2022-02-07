export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const AdminCard = () => import('../..\\components\\Admin\\AdminCard.vue' /* webpackChunkName: "components/admin-card" */).then(c => wrapFunctional(c.default || c))
export const AdminBlockCard = () => import('../..\\components\\Admin\\BlockCard.vue' /* webpackChunkName: "components/admin-block-card" */).then(c => wrapFunctional(c.default || c))
export const AdminBlockDataTable = () => import('../..\\components\\Admin\\BlockDataTable.vue' /* webpackChunkName: "components/admin-block-data-table" */).then(c => wrapFunctional(c.default || c))
export const AdminBlockPostForm = () => import('../..\\components\\Admin\\BlockPostForm.vue' /* webpackChunkName: "components/admin-block-post-form" */).then(c => wrapFunctional(c.default || c))
export const AdminCondominiumCard = () => import('../..\\components\\Admin\\CondominiumCard.vue' /* webpackChunkName: "components/admin-condominium-card" */).then(c => wrapFunctional(c.default || c))
export const AdminCondominiumPostForm = () => import('../..\\components\\Admin\\CondominiumPostForm.vue' /* webpackChunkName: "components/admin-condominium-post-form" */).then(c => wrapFunctional(c.default || c))
export const AdminUnitPostForm = () => import('../..\\components\\Admin\\UnitPostForm.vue' /* webpackChunkName: "components/admin-unit-post-form" */).then(c => wrapFunctional(c.default || c))
export const SharedLoading = () => import('../..\\components\\Shared\\Loading.vue' /* webpackChunkName: "components/shared-loading" */).then(c => wrapFunctional(c.default || c))
export const SharedSnackbar = () => import('../..\\components\\Shared\\Snackbar.vue' /* webpackChunkName: "components/shared-snackbar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
