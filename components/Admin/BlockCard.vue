<template>
  <v-card
    class="ma-2"
    width="80"
    :style="{
      backgroundColor:
        $store.state.block.code == block.code ? '#212121' : 'transparent',
      color: $store.state.block.code == block.code ? '#FFFFFF' : '#757575',
    }"
    link
    rounded
    :disabled="$store.state.locked"
    @click="showData"
  >
    <div class="pa-3">
      <v-icon
        :color="$store.state.block.code == block.code ? '#FFFFFF' : '#757575'"
        >mdi-home-city</v-icon
      >
      <div>{{ block.code }}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {}
  },
  methods: {
    showData() {
      this.$store.dispatch('showBlockAction', this.block)
    },
  },
}
</script>