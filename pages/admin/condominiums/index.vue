<template>
  <div>
    <v-card class="mx-auto form-card" elevation="2">
      <v-dialog v-model="dialog" max-width="800px" persistent>
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Novo Condomínio
          </v-btn>
        </template>
        <CondominiumPostForm :refresh="refresh" />
      </v-dialog>
      <v-container fluid>
        <v-row v-if="condominiums.length > 0">
          <v-col v-for="(item, i) in condominiums" :key="i" cols="2">
            <CondominiumCard :condominium="item" />
          </v-col>
        </v-row>
        <v-row v-else>
          <div class="ma-5">{{ loadingMessage }}</div>
        </v-row>
      </v-container>
    </v-card>

    <Snackbar />
  </div>
</template>

<script>
import axios from 'axios'
import CondominiumPostForm from '@/components/Admin/CondominiumPostForm'
import Snackbar from '@/components/Shared/Snackbar'
import CondominiumCard from '@/components/Admin/CondominiumCard'

export default {
  components: {
    CondominiumPostForm,
    Snackbar,
    CondominiumCard,
  },
  data: () => ({
    condominiums: [],
    loadingMessage: 'Carregando...',
  }),

  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set(value) {
        this.$store.dispatch('showDialogAction', value)
      },
    },
  },

  created() {
    this.$nextTick(() => {
      this.getCondominiums()
    })
  },

  methods: {
    getCondominiums() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      axios
        .get('http://localhost:5000/api/Condominium')
        .then((response) => {
          response.data.data.forEach((element) => {
            this.condominiums.push(element)
          })
          this.$nuxt.$loading.finish()
          this.loadingMessage = 'Não há registros.'
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
          this.loadingMessage = 'Ocorreu um problema ao carregar os dados.'
        })
    },

    refresh() {
      this.condominiums = []
      this.getCondominiums()
    },
  },
}
</script>