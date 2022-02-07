<template>
  <v-snackbar
    v-model="visible"
    :color="color"
    content-class="text-center"
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    visible: {
      get() {
        return this.$store.state.notify.visible
      },
      set(value) {
        this.$store.dispatch('showNotifierAction', value)
      },
    },
    text: {
      get() {
        return this.$store.state.notify.text
      },
      set(value) {
        this.$store.dispatch('showNotifierAction', value)
      },
    },
    color: {
      get() {
        return this.$store.state.notify.color
      },
      set(value) {
        this.$store.dispatch('showNotifierAction', value)
      },
    },
  }
}
</script>

<style>
</style>