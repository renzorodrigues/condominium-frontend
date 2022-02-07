<template>
  <div>
    <v-card
      class="d-flex justify-start mb-6 pa-3"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    >
      <v-row>
        <AdminCard
          :title="'Condomínios'"
          :route="'/admin/condominiums'"
          :image="'https://images.unsplash.com/photo-1616474655260-de945dff1b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'"
        />
        <AdminCard
          :title="'Usuários'"
          :image="'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'"
        />
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AdminCard from '@/components/Admin/AdminCard'
export default {
  components: {
    AdminCard,
  },
}
</script>