export const state = () => ({
  dialog: false,
  notify: {
    visible: false,
    text: '',
    color: ''
  },
  block: {
    id: '',
    code: ''
  },
  locked: false
})

export const mutations = {
  showDialogMutation(state, payload) {
    state.dialog = payload
  },

  showNotifierMutation(state, payload) {
    state.notify = payload
  },

  showBlockMutation(state, payload) {
    state.block = payload
  },

  showLockedMutation(state, payload) {
    state.locked = payload
  }
}

export const actions = {
  showDialogAction({ commit }, payload) {
    commit('showDialogMutation', payload)
  },

  showNotifierAction({ commit }, payload) {
    commit('showNotifierMutation', payload)
  },

  showBlockAction({ commit }, payload) {
    commit('showBlockMutation', payload)
  },

  showLockedAction({ commit }, payload) {
    commit('showLockedMutation', payload)
  },
}

export const getters = {
  showDialogGetter(state) {
    return state.dialog
  },

  showNotifierGetter(state) {
    return state.notify
  },

  showBlockGetter(state) {
    return state.block
  },

  showLockedGetter(state) {
    return state.locked
  },
}
