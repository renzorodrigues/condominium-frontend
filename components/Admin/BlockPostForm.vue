<template>
  <v-card class="mx-auto form-card" max-width="800" elevation="2">
    <v-app-bar class="mb-5" dark color="primary">
      <v-toolbar-title>NOVO BLOCO</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <form @submit.prevent="save">
        <v-row>
          <v-col>
            <v-text-field
              v-model="condominiumName"
              dense
              :error-messages="nameErrors"
              :counter="50"
              label="NOME DO CONDOMÍNIO"
              required
              @input="$v.condominiumName.$touch()"
              @blur="$v.condominiumName.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="publicPlace"
              dense
              label="LOGRADOURO"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="number" dense label="NÚMERO"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="complement"
              dense
              label="COMPLEMENTO"
              font
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-text-field v-model="zipCode" dense label="CEP"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="district"
              dense
              label="BAIRRO"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="city" dense label="CIDADE"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="selectState"
              dense
              :error-messages="selectErrors"
              :items="states"
              label="UF"
              required
              @input="$v.selectState.$touch()"
              @blur="$v.selectState.$touch()"
            ></v-select>
          </v-col>
        </v-row>
        <div class="d-flex mt-5">
          <v-btn color="primary" class="mr-2" type="submit"> SALVAR </v-btn>
          <v-btn @click="clear"> LIMPAR </v-btn>
          <v-btn class="ml-auto" @click="close"> FECHAR </v-btn>
        </div>
      </form>
    </v-container>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  mixins: [validationMixin],
  props: {
    refresh: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      condominiumName: '',
      publicPlace: '',
      number: '',
      complement: '',
      zipCode: '',
      district: '',
      city: '',
      selectState: null,
      states: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
      ],

      checkbox: false,
      dialog: false,
      dialogDelete: false,
    }
  },

  validations: {
    condominiumName: { required, maxLength: maxLength(50) },
    selectState: { required },
  },

  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.selectState.$dirty) return errors
      !this.$v.selectState.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.condominiumName.$dirty) return errors
      !this.$v.condominiumName.maxLength &&
        errors.push('O nome deve ter o máximo de 50 caracteres.')
      !this.$v.condominiumName.required &&
        errors.push('O nome do condomínio deve ser informado.')
      return errors
    },
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  methods: {
    async save() {
      this.$v.$touch()
      this.$nuxt.$loading.start()
      await axios
        // .post('http://localhost:5000/api/Condominium', {
        .post('https://renzo-condo.herokuapp.com/api/Condominium', {
          name: this.condominiumName,
          address: {
            publicPlace: this.publicPlace,
            number: this.number,
            complement: this.complement,
            zipCode: this.zipCode,
            district: this.district,
            city: this.city,
            state: this.selectState,
          },
        })
        .then((response) => {
          this.showDialogAction(false)
          this.showNotifierAction({
            visible: true,
            text: 'CADASTRADO COM SUCESSO!',
            color: 'success',
          })
          this.clear()
          this.$nuxt.$loading.finish()
          this.refresh();
        })
        .catch(() => {
          this.showDialogAction(false)
          this.showNotifierAction({
            visible: true,
            text: 'DEU RUIM!',
            color: 'warning',
          })
          this.clear()
          this.$nuxt.$loading.finish()
        })
    },
    clear() {
      this.$v.$reset()
      this.condominiumName = ''
      this.publicPlace = ''
      this.number = ''
      this.complement = ''
      this.zipCode = ''
      this.district = ''
      this.city = ''
      this.selectState = null
    },
    close() {
      this.clear()
      this.showDialogAction(false)
    },
    ...mapActions(['showDialogAction', 'showNotifierAction']),
  },
}
</script>

<style scoped>
.form-card {
  padding: 20px;
}
</style>