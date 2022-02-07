<template>
  <v-card max-width="812">
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ condominium.name }}</v-card-title>
    <v-card-subtitle>Telefone</v-card-subtitle>

    <v-card-text>
      <div>
        <b>Endereço:</b> {{ condominium.address.publicPlace }},
        {{ condominium.address.number }}
      </div>
      <div v-if="condominium.address.complement">
        <b>Complemento:</b> {{ condominium.address.complement }}
      </div>
      <div><b>Bairro:</b> {{ condominium.address.district }}</div>
      <div><b>CEP:</b> {{ condominium.address.zipCode }}</div>
      <div>
        <b>Cidade:</b> {{ condominium.address.city }} - <b>Estado:</b>
        {{ condominium.address.state }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <div class="d-flex">
      <v-card-title>Blocos</v-card-title>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-4 mt-4"
        color="primary"
        dark
        small
        @click="openDialog"
      >
        Novo Bloco
      </v-btn>
    </div>

    <v-dialog v-model="dialogNewBlock" max-width="500px">
      <BlockPostForm />
    </v-dialog>

    <v-container fluid class="d-flex flex-wrap text-center">
      <div v-for="(block, i) in condominium.blocks" :key="i">
        <BlockCard :block="block" />
      </div>
    </v-container>
    <BlockDataTable v-if="$store.state.block.id" :block="$store.state.block" />
  </v-card>
</template>

<script>
import axios from 'axios'
import BlockCard from '@/components/Admin/BlockCard'
import BlockDataTable from '@/components/Admin/BlockDataTable'
import BlockPostForm from '@/components/Admin/BlockPostForm'
export default {
  components: {
    BlockCard,
    BlockDataTable,
    BlockPostForm
  },
  data() {
    return {
      condominium: {
        id: '',
        address: {
          city: '',
        },
        name: '',
      },
      dialogNewBlock: false
    }
  },
  created() {
    this.getCondominiumById()
  },

  destroyed() {
    this.$store.dispatch('showBlockAction', '')
  },

  methods: {
    getCondominiumById() {
      axios
        // .get('http://localhost:5000/api/Condominium/' + this.$route.params.id)
        .get('https://renzo-condo.herokuapp.com/api/Condominium/' + this.$route.params.id)
        .then((response) => {
          this.condominium = response.data.data
        })
        .catch(() => {})
    },

    openDialog() {
      this.dialogNewBlock = true
    }
  },
}
</script>

<style>
</style>