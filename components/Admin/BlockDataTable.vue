<template>
  <div>
    <v-data-table
      :headers="unitHeaders"
      :items="units"
      sort-by="calories"
      class="elevation-0"
      :loading="loadingDataTable"
      hide-default-footer
      show-expand
      item-key="code"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>{{ $store.state.block.code }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template #activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                small
                v-bind="attrs"
                v-on="on"
              >
                Nova Unidade
              </v-btn>
            </template>
            <UnitPostForm />
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div v-for="i in item.unitUsers" :key="i" class="ma-3">
            <div class="d-flex justify-start mb-6">
              <div v-if="i.unitUserType === 1" class="d-flex justify-start">
                {{ 'Proprietário: ' + i.name }}
              </div>
              <div v-if="i.unitUserType === 2" class="d-flex justify-start">
                {{ 'Inquilino: ' + i.name }}
              </div>
              <div class="d-flex justify-start">CPF: {{ i.cpf }}</div>
            </div>
          </div>
        </td>
      </template>
    </v-data-table>
    <div v-if="pagination.totalPages > 1" class="pa-4 text-center">
      <v-pagination
        v-model="pagination.pageNumber"
        :length="pagination.totalPages"
        :total-visible="10"
        circle
        @input="next"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UnitPostForm from '@/components/Admin/UnitPostForm'
export default {
  components: {
    UnitPostForm,
  },
  props: {
    block: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    expanded: [],
    loadingDataTable: false,
    dialog: false,
    dialogDelete: false,
    unitHeaders: [
      {
        text: 'Código',
        align: 'start',
        value: 'code',
      },
      { text: 'M²', value: 'size', sortable: false },
      { text: 'Alugado', value: 'isRented', sortable: false },
      { text: 'Proprietário', value: 'unitUsers.name', sortable: false },
      { text: 'CPF', value: 'unitUsers.cpf', sortable: false },
      { text: '', value: 'data-table-expand' },
    ],
    units: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    pagination: {
      pageNumber: 1,
      pageSize: 10,
      totalPages: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    block() {
      this.units = []
      this.getUnitsByBlockId(
        this.$store.state.block.id,
        this.pagination.pageNumber,
        this.pagination.pageSize
      )
    },
  },

  created() {
    this.units = []
    this.getUnitsByBlockId(
      this.$store.state.block.id,
      this.pagination.pageNumber,
      this.pagination.pageSize
    )
  },

  methods: {
    getUnitsByBlockId(blockId, pageNumber, pageSize) {
      this.loadingDataTable = true
      this.$store.dispatch('showLockedAction', true)
      axios
        .get(
          'http://localhost:5000/api/Unit/' +
            blockId +
            '/' +
            pageNumber +
            '/' +
            pageSize
        )
        .then((response) => {
          this.pagination.totalPages = response.data.data.totalPages
          response.data.data.units.forEach((element) => {
            element.isRented = element.isRented ? 'Sim' : 'Não'
            element.unitUsers.forEach((user) => {
              if (user.unitUserType === 1) {
                element.unitUsers.name = user.name
              }
            })
            this.units.push(element)
          })
          this.loadingDataTable = false
          this.$store.dispatch('showLockedAction', false)
        })
        .catch(() => {
          this.loadingDataTable = false
          this.$store.dispatch('showLockedAction', false)
        })
    },

    initialize() {},

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    next(pageNumber) {
      this.units = []
      this.getUnitsByBlockId(
        this.$store.state.block.id,
        pageNumber,
        this.pagination.pageSize
      )
    },
  },
}
</script>