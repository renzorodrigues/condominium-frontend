<template>
  <v-card class="ma-2 text-center" max-width="150" link :to="route">
    <v-img
      :src="image"
      max-height="100"
    ></v-img>
    <div> {{ title }} </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: 'https://nicolasmelis.com/wp-content/themes/panama/assets/img/empty/600x600.png'
    }
  },
}
</script>