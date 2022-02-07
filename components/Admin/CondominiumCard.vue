<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://images.unsplash.com/photo-1616474655260-de945dff1b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      height="200px"
    ></v-img>

    <v-card-title> {{ condominium.name }} </v-card-title>

    <v-card-subtitle> {{ condominium.address.district }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list nav dense>
          <v-list-item link @click="$router.push({ path: '/admin/condominiums/'+condominium.id })">
            <v-list-item-icon>
              <v-icon>mdi-cogs</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title link>Configuração</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Excluir</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    condominium: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    items: [
      { text: 'Configuração', icon: 'mdi-cogs' },
      { text: 'Excluir', icon: 'mdi-trash-can', color: 'error' },
    ],
  })
}
</script>