<template>
  <v-flex>
    <v-btn icon large fab color="primary" dark>
      <v-icon>add</v-icon>
    </v-btn>
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
  name: "BilaxList",
  data() {
    return {
      headers: [
        {
          text: "Nome",
          align: "left",
          sortable: false,
          value: "nome"
        },
        {
          text: "Ragione Sociale",
          align: "left",
          sortable: false,
          value: "ragione"
        }
      ],
      aziende: [
        { value: false, nome: "Webranking", ragione: "S.p.A" },
        { value: false, nome: "Jolly Lampadari", ragione: "S.r.l" },
        { value: false, nome: "Microsoft", ragione: "S.p.A" },
        { value: false, nome: "Webranking", ragione: "S.p.A" },
        { value: false, nome: "Jolly Lampadari", ragione: "S.r.l" },
        { value: false, nome: "Microsoft", ragione: "S.p.A" },
        { value: false, nome: "Webranking", ragione: "S.p.A" },
        { value: false, nome: "Jolly Lampadari", ragione: "S.r.l" },
        { value: false, nome: "Microsoft", ragione: "S.p.A" },
        { value: false, nome: "Webranking", ragione: "S.p.A" },
        { value: false, nome: "Jolly Lampadari", ragione: "S.r.l" },
        { value: false, nome: "Microsoft", ragione: "S.p.A" }
      ]
    };
  },
  methods: {
    addAzienda() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

