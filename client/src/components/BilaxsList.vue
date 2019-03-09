<template>
  <v-flex>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" left dark><v-icon>add</v-icon>Aggiungi Azienda</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Aggiungi Azienda</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="nome" label="Nome Azienda" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="ragione" label="Ragione Socile Azienda"  required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addAzienda(),dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-data-table
      :headers="headers"
      :items="aziende"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.nome }}</td>
        <td>{{ props.item.ragione }}</td>
      </template>
    </v-data-table>
  </v-flex>
  
</template>

<script>
export default {
  name: 'BilaxList',
  data () {
    return {
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome'
        },
        {
          text: 'Ragione Sociale',
          align: 'left',
          sortable: false,
          value: 'ragione'
        }
      ],
      aziende: [
        
      ],
      dialog: false,
      nome:"",
      ragione:""
    }
  },
  methods: {
    addAzienda () {
      this.aziende.push({value:false, nome:this.nome, ragione:this.ragione});
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
