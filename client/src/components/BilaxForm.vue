<template>
  <v-flex>
    <v-btn fab dark color="indigo">
        <v-icon  @click="addCol" dark>add</v-icon>
    </v-btn>
    
    <v-data-table
      :headers="headers"
      :items="row"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.desc }}</td>
        <td>{{ props.item.cod }}</td>
        <td v-for="v in props.item.values" :key="v.anno">
          <v-text-field v-model.number="v.value" aria-placeholder="0" type="number" @keyup="master(v.anno, props.item.cod)"></v-text-field>
        </td>
        
      </template>
    </v-data-table>
  </v-flex>
  
</template>

<script>
import TdText from './TdText.vue'

export default {
  name: "BilaxForm",
  data() {
    return {
      headers: [
        {
          text: "Descrizione",
          align: "left",
          sortable: false,
          value: "desc",
        },
        {
          text: "Codice",
          align: "left",
          sortable: false,
          value: "cod",
        },
        {
          text: "2019",
          align: "left",
          sortable: false,
          value: "numero",
        }
      ],
      row: [
        { desc: "STATO PATRIMONIALE ATTIVO", cod: "PA", values: [{anno: 2019, value: 0}]},
        { desc: "A) Crediti verso soci per versamenti ancora dovuti", cod: "PA.A", values: [{anno: 2019, value: 0}]},
        { desc: "    Crediti verso soci già richiamati", cod: "PA.A1", values: [{anno: 2019, value: 0}]},
        { desc: "    Crediti verso soci non ancora richiamati", cod: "PA.A2", values: [{anno: 2019, value: 0}]}
      ]
    };
  },
  computed: {
    
  },
  methods: {
    addCol() {
      let len = this.headers.length;
      let last_year = parseInt(this.headers[len - 1].text);
      this.headers.push({text: last_year-1,
          align: "left",
          sortable: false})
      for(let r of this.row) {
        r.values.push({anno: last_year-1, value: 0});
      }
    },
    master(anno, cod) {
      switch(cod) {
        case 'PA.A':
          this.startPAA(anno);
          break;
        case 'PA.A1':
          this.startPAA1(anno);
          break;
        case 'PA.A2':
          this.startPAA2(anno);
          break;
      }
    },
    startPAA1(anno) {
      this.calculatePAA(anno);
    },
    startPAA2(anno) {
      this.calculatePAA(anno);
    },
    calculatePAA(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[1].values[index_anno].value = this.row[2].values[index_anno].value + this.row[3].values[index_anno].value;
      this.calculatePA(anno);
    },
    calculatePA(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[0].values[index_anno].value = this.row[1].values[index_anno].value;
    }
  } 
}
</script>

<style lang="scss" scoped>
</style>

