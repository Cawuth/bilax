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
        <td v-for="y in props.item.year" :key="y.anno">
          <v-text-field v-model.number="y.value" aria-placeholder="0" type="number"></v-text-field>
        </td>
        
      </template>
    </v-data-table>
    <v-text-field v-model.number="a"></v-text-field>
    <v-text-field v-model.number="b"></v-text-field>
    <v-text-field v-model.number="s"></v-text-field>
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
          text: "2018",
          align: "left",
          sortable: false,
          value: "numero",
        }
      ],
      row: [
        { desc: "STATO PATRIMONIALE ATTIVO", cod: "PA"},
        { desc: "A) Crediti verso soci per versamenti ancora dovuti", cod: "PA.A"},
        { desc: "    Crediti verso soci già richiamati", cod: "PA.A1"},
        { desc: "    Crediti verso soci non ancora richiamati", cod: "PA.A2"},
      ],
      a: 0,
      b: 0
    };
  },
  computed: {
    s() {
      return this.a + this.b;
    },
    years() {
      return [
        [{anno: "2018", value: PA},]
      ];
    }
  },
  watch: {
    s() {
      this.s = this.a + this.b;
    },
    row() {
      for (let i = 0; i < this.row[0].year.length; i++) {
        this.row[1].year[i].value = this.row[2].year[i].value + this.row[3].year[i].value;
      }
    }
    
  },
  methods: {
    addCol() {
      let len = this.years[0].length;
      let temp = this.years[0][len-1].anno;
      this.headers.push({text: temp-1,
          align: "left",
          sortable: false})
      for(let r of this.years) {
        r.push({anno: temp - 1 , value: 0});
      }
    }
  } 
}
</script>

<style lang="scss" scoped>
</style>

