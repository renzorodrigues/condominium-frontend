export const state = () => ({
  visible: false
})

export const mutations = {
  showNotifierMutation(state, payload) {
    state.visible = payload
  }
}

export const actions = {
  showNotifierAction({ commit }, payload) {
    commit('showNotifierMutation', payload)
  },
}

export const getters = {
  showNotifierGetter(state) {
    return state.visible
  },
}
