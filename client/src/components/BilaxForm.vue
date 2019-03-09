<template>
  <v-flex>
    <v-card-title>
    <v-btn color="primary" dark large @click="addCol()"><v-icon dark>add</v-icon> AGIUNGI COLONNA</v-btn>
    
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-btn slot="activator" color="error" dark large ><v-icon dark>delete</v-icon> RIMUOVI COLONNA</v-btn>
      <v-card>
        <v-card-title>Quale colonna vuoi eliminare</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio v-for="v in headers.slice(2,headers.length)" :key="v.text" :label="v.text.toString()" :value="v.text"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="Elimina(),dialog = false">Elimina</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-spacer></v-spacer>
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
    ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="row"
      class="elevation-1"
      :search="search"
      hide-actions
    >
      <template slot="items" :class="props.item.class" slot-scope="props">
        <td :class="props.item.class" >{{ props.item.desc }}</td>
        <td :class="props.item.class">{{ props.item.cod }}</td>
        <td v-for="v in props.item.values" :class="props.item.class" :key="v.anno" >
          <v-text-field v-model.number="v.value" reverse placeholder="0" type="number" @change="master(v.anno, props.item.cod),addPoint(v.anno)"></v-text-field>
        </td>

      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
          La ricerca per "{{ search }}" non ha prodotto risultati.
      </v-alert>
    </v-data-table>
  </v-flex>

</template>

<script>
import TdText from './TdText.vue'

export default {
  name: 'BilaxForm',
  data () {
    return {
      search: '',
      dialogm1: '',
      dialog: false,
      headers: [
        {
          text: 'Descrizione',
          align: 'left',
          sortable: false,
          value: 'desc'
        },
        {
          text: 'Codice',
          align: 'left',
          sortable: false,
          value: 'cod'
        },
        {
          text: '2019',
          align: 'left',
          sortable: false,
          value: 'numero'
        }
      ],
      row: [
        { desc: 'STATO PATRIMONIALE ATTIVO', class: 'inizio', cod: 'PA', values: [{ anno: 2019, value: '' }] },
        { desc: 'A) Crediti verso soci per versamenti ancora dovuti', class: 'Lettera', cod: 'PA.A', values: [{ anno: 2019, value: '' }] },
        { desc: '    Crediti verso soci già richiamati', class: 'LetteraNumero', cod: 'PA.A1', values: [{ anno: 2019, value: '' }] },
        { desc: '    Crediti verso soci non ancora richiamati', class: 'LetteraNumero', cod: 'PA.A2', values: [{ anno: 2019, value: '' }] },
        { desc: 'B) Immobilizzazioni, con separata indicazione di quelle concesse in locazione finanziaria', class: 'Lettera', cod: 'PA.B', values: [{ anno: 2019, value: '' }] },
        { desc: '    I. Immateriali', class: 'LetteraNumero', cod: 'PA.B1', values: [{ anno: 2019, value: '' }] },
        { desc: '        1) Costi di impianto e di ampliamento', class: 'LetteraNumeroNumero', cod: 'PA.B11', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B11a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B11b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B11c', values: [{ anno: 2019, value: '' }] },
        { desc: '        2) Costi di ricerca, di sviluppo e di pubblicità', class: 'LetteraNumeroNumero', cod: 'PA.B12', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B12a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B12b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B12c', values: [{ anno: 2019, value: '' }] },
        { desc: "        3) Diritti di brevetto industriale e di utilizzo di opere dell'ingegno", class: 'LetteraNumeroNumero', cod: 'PA.B13', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B13a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B13b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B13c', values: [{ anno: 2019, value: '' }] },
        { desc: '        4) Concessioni, licenze, marchi e diritti simili', class: 'LetteraNumeroNumero', cod: 'PA.B14', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B14a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B14b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B14c', values: [{ anno: 2019, value: '' }] },
        { desc: '        Differenza da consolidamento', class: 'LetteraNumeroNumero', cod: 'PA.B18', values: [{ anno: 2019, value: '' }] },
        { desc: '        5) Avviamento', class: 'LetteraNumeroNumero', cod: 'PA.B15', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B15a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B15b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B15c', values: [{ anno: 2019, value: '' }] },
        { desc: '        6) Immobilizzazioni immateriali in corso e acconti', class: 'LetteraNumeroNumero', cod: 'PA.B16', values: [{ anno: 2019, value: '' }] },
        { desc: '        7) Altre', class: 'LetteraNumeroNumero', cod: 'PA.B17', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B17a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B17b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B17c', values: [{ anno: 2019, value: '' }] },
        { desc: '    II. Materiali', class: 'LetteraNumero', cod: 'PA.B2', values: [{ anno: 2019, value: '' }] },
        { desc: '        1) Terreni e fabbricati', class: 'LetteraNumero', cod: 'PA.B21', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B21a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B21b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B21c', values: [{ anno: 2019, value: '' }] },
        { desc: '        2) Impianti e macchinario', class: 'LetteraNumeroNumero', cod: 'PA.B22', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B22a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B22b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B22c', values: [{ anno: 2019, value: '' }] },
        { desc: '        3) Attrezzature industriali e commerciali', class: 'LetteraNumeroNumero', cod: 'PA.B23', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B23a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B23b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B23c', values: [{ anno: 2019, value: '' }] },
        { desc: '        4) Altri beni', class: 'LetteraNumeroNumero', cod: 'PA.B24', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B24a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B24b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B24c', values: [{ anno: 2019, value: '' }] },
        { desc: '        5) Immobilizzazioni in corso e acconti', class: 'LetteraNumeroNumero', cod: 'PA.B25', values: [{ anno: 2019, value: '' }] },
        { desc: '        6) Concesse in Locazione Finanziaria', class: 'LetteraNumeroNumero', cod: 'PA.B26', values: [{ anno: 2019, value: '' }] },
        { desc: '            Costo storico', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B26a', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo ammortamenti)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B26b', values: [{ anno: 2019, value: '' }] },
        { desc: '            (Fondo svalutazioni)', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B26c', values: [{ anno: 2019, value: '' }] },
        { desc: '    III. Finanziarie', class: 'LetteraNumero', cod: 'PA.B3', values: [{ anno: 2019, value: '' }] },
        { desc: '        1) Partecipazioni in:', class: 'LetteraNumeroNumero', cod: 'PA.B31', values: [{ anno: 2019, value: '' }] },
        { desc: '            a) imprese controllate', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B31a', values: [{ anno: 2019, value: '' }] },
        { desc: '            b) imprese collegate', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B31b', values: [{ anno: 2019, value: '' }] },
        { desc: '            c) imprese controllanti', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B31c', values: [{ anno: 2019, value: '' }] },
        { desc: '            d) altre imprese', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B31d', values: [{ anno: 2019, value: '' }] },
        { desc: '        2) Crediti', class: 'LetteraNumeroNumero', cod: 'PA.B32', values: [{ anno: 2019, value: '' }] },
        { desc: '            a) verso imprese controllate', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B32a', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32a1', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32a2', values: [{ anno: 2019, value: '' }] },
        { desc: '            b) verso imprese collegate', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B32b', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32b1', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32b2', values: [{ anno: 2019, value: '' }] },
        { desc: '            c) verso imprese controllanti', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B32c', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32c1', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32c2', values: [{ anno: 2019, value: '' }] },
        { desc: '            d) verso altri', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B32d', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32d1', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLetteraNumero', cod: 'PA.B32d2', values: [{ anno: 2019, value: '' }] },
        { desc: '        3) Altri titoli', class: 'LetteraNumeroNumero', cod: 'PA.B33', values: [{ anno: 2019, value: '' }] },
        { desc: '        4) Azioni proprie', class: 'LetteraNumeroNumero', cod: 'PA.B34', values: [{ anno: 2019, value: '' }] },
        { desc: '            Valore nominale complessivo', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B34a', values: [{ anno: 2019, value: '' }] },
        { desc: '            Differenza dal valore nominale', class: 'LetteraNumeroNumeroLettera', cod: 'PA.B34b', values: [{ anno: 2019, value: '' }] },
        { desc: 'C) Attivo circolante', class: 'Lettera', cod: 'PA.C', values: [{ anno: 2019, value: '' }] },
        { desc: '    I. Rimanenze', class: 'LetteraNumero', cod: 'PA.C1', values: [{ anno: 2019, value: '' }] },
        { desc: '        1) Materie prime, sussidiarie e di consumo', class: 'LetteraNumeroNumero', cod: 'PA.C11', values: [{ anno: 2019, value: '' }] },
        { desc: '        2) Prodotti in corso di lavorazione e semilavorati', class: 'LetteraNumeroNumero', cod: 'PA.C12', values: [{ anno: 2019, value: '' }] },
        { desc: '        3) Lavori in corso su ordinazione', class: 'LetteraNumeroNumero', cod: 'PA.C13', values: [{ anno: 2019, value: '' }] },
        { desc: '        4) Prodotti finiti e merci', class: 'LetteraNumeroNumero', cod: 'PA.C14', values: [{ anno: 2019, value: '' }] },
        { desc: '        5) Acconti', class: 'LetteraNumeroNumero', cod: 'PA.C15', values: [{ anno: 2019, value: '' }] },
        { desc: '    II. Crediti', class: 'LetteraNumero', cod: 'PA.C2', values: [{ anno: 2019, value: '' }] },
        { desc: '        1) verso clienti', class: 'LetteraNumeroNumero', cod: 'PA.C21', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C21a', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C21b', values: [{ anno: 2019, value: '' }] },
        { desc: '        2) verso imprese controllate', class: 'LetteraNumeroNumero', cod: 'PA.C22', values: [{ anno: 2019, value: '' }] },
        { desc: '                - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C22a', values: [{ anno: 2019, value: '' }] },
        { desc: '                - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C22b', values: [{ anno: 2019, value: '' }] },
        { desc: '        3) verso imprese collegate', class: 'LetteraNumeroNumero', cod: 'PA.C23', values: [{ anno: 2019, value: '' }] },
        { desc: '           - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C23a', values: [{ anno: 2019, value: '' }] },
        { desc: '           - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C23b', values: [{ anno: 2019, value: '' }] },
        { desc: '       4) verso controllanti', class: 'LetteraNumeroNumero', cod: 'PA.C24', values: [{ anno: 2019, value: '' }] },
        { desc: '           - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C24a', values: [{ anno: 2019, value: '' }] },
        { desc: '           - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C24b', values: [{ anno: 2019, value: '' }] },
        { desc: '       4-bis) crediti tributari', class: 'LetteraNumeroNumero', cod: 'PA.C2B', values: [{ anno: 2019, value: '' }] },
        { desc: '           - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C2Ba', values: [{ anno: 2019, value: '' }] },
        { desc: '           - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C2Bb', values: [{ anno: 2019, value: '' }] },
        { desc: '       4-ter) Imposte anticipate', class: 'LetteraNumeroNumero', cod: 'PA.C2T', values: [{ anno: 2019, value: '' }] },
        { desc: '           - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C2Ta', values: [{ anno: 2019, value: '' }] },
        { desc: '           - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C2Tb', values: [{ anno: 2019, value: '' }] },
        { desc: '       5) verso altri', class: 'LetteraNumeroNumero', cod: 'PA.C25', values: [{ anno: 2019, value: '' }] },
        { desc: '           - entro 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C25a', values: [{ anno: 2019, value: '' }] },
        { desc: '           - oltre 12 mesi', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C25b', values: [{ anno: 2019, value: '' }] },
        { desc: '   III. Attività finanziarie che non costituiscono immobilizzazioni', class: 'LetteraNumero', cod: 'PA.C3', values: [{ anno: 2019, value: '' }] },
        { desc: '       1) Partecipazioni in imprese controllate', class: 'LetteraNumeroNumero', cod: 'PA.C31', values: [{ anno: 2019, value: '' }] },
        { desc: '       2) Partecipazioni in imprese collegate', class: 'LetteraNumeroNumero', cod: 'PA.C32', values: [{ anno: 2019, value: '' }] },
        { desc: '       3) Partecipazioni in imprese controllanti', class: 'LetteraNumeroNumero', cod: 'PA.C33', values: [{ anno: 2019, value: '' }] },
        { desc: '       4) Altre partecipazioni', class: 'LetteraNumeroNumero', cod: 'PA.C34', values: [{ anno: 2019, value: '' }] },
        { desc: '       5) Azioni proprie', class: 'LetteraNumeroNumero', cod: 'PA.C35', values: [{ anno: 2019, value: '' }] },
        { desc: '           Valore nominale complessivo', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C35a', values: [{ anno: 2019, value: '' }] },
        { desc: '           Differenza dal valore nominale', class: 'LetteraNumeroNumeroLettera', cod: 'PA.C35b', values: [{ anno: 2019, value: '' }] },
        { desc: '       6) Altri titoli', class: 'LetteraNumeroNumero', cod: 'PA.C36', values: [{ anno: 2019, value: '' }] },
        { desc: '   IV. Disponibilità liquide', class: 'LetteraNumero', cod: 'PA.C4', values: [{ anno: 2019, value: '' }] },
        { desc: '       1) Depositi bancari e postali', class: 'LetteraNumeroNumero', cod: 'PA.C41', values: [{ anno: 2019, value: '' }] },
        { desc: '       2) Assegni', class: 'LetteraNumeroNumero', cod: 'PA.C42', values: [{ anno: 2019, value: '' }] },
        { desc: '       3) Denaro e valori in cassa', class: 'LetteraNumeroNumero', cod: 'PA.C43', values: [{ anno: 2019, value: '' }] },
        { desc: 'D) Ratei e risconti attivi', class: 'Lettera', cod: 'PA.D', values: [{ anno: 2019, value: '' }] },
        { desc: '   Disaggio su prestiti', class: 'LetteraNumero', cod: 'PA.D1', values: [{ anno: 2019, value: '' }] },
        { desc: '   Vari', class: 'LetteraNumero', cod: 'PA.D2', values: [{ anno: 2019, value: '' }] },
        { desc: 'STATO PATRIMONIALE PASSIVO', class: 'inizio', cod: 'PP', values: [{ anno: 2019, value: '' }] },
        { desc: 'A) Patrimonio netto', class: 'Lettera', cod: 'PP.A', values: [{ anno: 2019, value: '' }] },
        { desc: '   I. Capitale', class: 'LetteraNumero', cod: 'PP.A1', values: [{ anno: 2019, value: '' }] },
        { desc: '   II. Riserva da sovrapprezzo delle azioni', class: 'LetteraNumero', cod: 'PP.A2', values: [{ anno: 2019, value: '' }] },
        { desc: '   III. Riserva di rivalutazione', class: 'LetteraNumero', cod: 'PP.A3', values: [{ anno: 2019, value: '' }] },
        { desc: '   IV. Riserva legale', class: 'LetteraNumero', cod: 'PP.A4', values: [{ anno: 2019, value: '' }] },
        { desc: '   V. Riserve statutarie', class: 'LetteraNumero', cod: 'PP.A6', values: [{ anno: 2019, value: '' }] },
        { desc: '   VI. Riserva per azioni proprie in portafoglio', class: 'LetteraNumero', cod: 'PP.A5', values: [{ anno: 2019, value: '' }] },
        { desc: '   VII. Altre riserve, distintamente indicate:', class: 'LetteraNumero', cod: 'PP.A7', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva straordinaria o facoltativa', class: 'LetteraNumeroNumero', cod: 'PP.A7a', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva per acquisto azioni proprie', class: 'LetteraNumeroNumero', cod: 'PP.A7n', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva da deroghe ex art. 2423 Cod.Civ.', class: 'LetteraNumeroNumero', cod: 'PP.A7o', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva azioni o quote della società controllante', class: 'LetteraNumeroNumero', cod: 'PP.A7p', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva non distribuibile da rivalutazione delle partecipazioni', class: 'LetteraNumeroNumero', cod: 'PP.A7q', values: [{ anno: 2019, value: '' }] },
        { desc: '       Versamenti in conto aumento di capitale', class: 'LetteraNumeroNumero', cod: 'PP.A7r', values: [{ anno: 2019, value: '' }] },
        { desc: '       Versamenti in conto futuro aumento di capitale', class: 'LetteraNumeroNumero', cod: 'PP.A7s', values: [{ anno: 2019, value: '' }] },
        { desc: '       - Versamenti in conto capitale', class: 'LetteraNumeroNumero', cod: 'PP.A7b', values: [{ anno: 2019, value: '' }] },
        { desc: '       Versamenti a copertura perdite', class: 'LetteraNumeroNumero', cod: 'PP.A7t', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva da riduzione capitale sociale', class: 'LetteraNumeroNumero', cod: 'PP.A7u', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva avanzo di fusione', class: 'LetteraNumeroNumero', cod: 'PP.A7v', values: [{ anno: 2019, value: '' }] },
        { desc: '       Riserva per utili su cambi', class: 'LetteraNumeroNumero', cod: 'PP.A7w', values: [{ anno: 2019, value: '' }] },
        { desc: '       Varie altre riserve', class: 'LetteraNumeroNumero', cod: 'PP.A7j', values: [{ anno: 2019, value: '' }] },
        { desc: '           varie altre riserve', class: 'LetteraNumeroNumeroLettera', cod: 'PP.A7j1', values: [{ anno: 2019, value: '' }] },
        { desc: '           - da arrotondamento automatico in Euro (2 decimali)', class: 'LetteraNumeroNumeroLettera', cod: 'PP=A7j2', values: [{ anno: 2019, value: '' }] },
        { desc: '       - Riserva di conversione da consolidamento estero', class: 'LetteraNumeroNumero', cod: 'PP.A7l', values: [{ anno: 2019, value: '' }] },
        { desc: '       - Riserva di consolidamento', class: 'LetteraNumeroNumero', cod: 'PP.A7m', values: [{ anno: 2019, value: '' }] },
        { desc: '   VIII. Utili (perdite) portati a nuovo', class: 'LetteraNumero', cod: 'PP.A8', values: [{ anno: 2019, value: '' }] },
        { desc: '   Utile (Perdita) Residua', class: 'LetteraNumero', cod: 'PP.A9', values: [{ anno: 2019, value: '' }] },
        { desc: "       Utile (perdita) dell'esercizio", class: 'LetteraNumeroNumero', cod: 'PP=A9a', values: [{ anno: 2019, value: '' }] },
        { desc: "       Copertura Parziale Perdita d'Esercizio", class: 'LetteraNumeroNumero', cod: 'PP.A9b', values: [{ anno: 2019, value: '' }] },
        { desc: '   Patrimonio di Terzi', class: 'LetteraNumero', cod: 'PP.AA', values: [{ anno: 2019, value: '' }] },
        { desc: '       Capitale e riserve di terzi', class: 'LetteraNumeroNumero', cod: 'PP.AA1', values: [{ anno: 2019, value: '' }] },
        { desc: "       Utile (perdita) dell'esercizio di pertinenza di terzi", class: 'LetteraNumeroNumero', cod: 'PP=AA2', values: [{ anno: 2019, value: '' }] },
        { desc: 'B) Fondi per rischi e oneri', class: 'Lettera', cod: 'PP.B', values: [{ anno: 2019, value: '' }] },
        { desc: '   1) Fondo per trattamento di quiescenza e obblighi simili', class: 'LetteraNumero', cod: 'PP.B1', values: [{ anno: 2019, value: '' }] },
        { desc: '   2) Fondo per imposte, anche differite', class: 'LetteraNumero', cod: 'PP.B2', values: [{ anno: 2019, value: '' }] },
        { desc: '   di consolidamento per rischi e oneri futuri', class: 'LetteraNumero', cod: 'PP.B4', values: [{ anno: 2019, value: '' }] },
        { desc: '   3) Altri fondi', class: 'LetteraNumero', cod: 'PP.B3', values: [{ anno: 2019, value: '' }] },
        { desc: 'C) Trattamento fine rapporto di lavoro subordinato', class: 'Lettera', cod: 'PP.C', values: [{ anno: 2019, value: '' }] },
        { desc: 'D) Debiti', class: 'Lettera', cod: 'PP.D', values: [{ anno: 2019, value: '' }] },
        { desc: '   1) Obbligazioni non convertibili', class: 'LetteraNumero', cod: 'PP.D1', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D1a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D1b', values: [{ anno: 2019, value: '' }] },
        { desc: '   2) Obbligazioni convertibili', class: 'LetteraNumero', cod: 'PP.D2', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D2a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D2b', values: [{ anno: 2019, value: '' }] },
        { desc: '   3) Debiti verso soci per finanziamenti', class: 'LetteraNumero', cod: 'PP.DF', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DFa', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DFb', values: [{ anno: 2019, value: '' }] },
        { desc: '   4) Debiti verso banche', class: 'LetteraNumero', cod: 'PP.D3', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D3a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D3b', values: [{ anno: 2019, value: '' }] },
        { desc: '   5) Debiti verso altri finanziatori', class: 'LetteraNumero', cod: 'PP.D4', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D4a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D4b', values: [{ anno: 2019, value: '' }] },
        { desc: '   6) Acconti', class: 'LetteraNumero', cod: 'PP.D5', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D5a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D5b', values: [{ anno: 2019, value: '' }] },
        { desc: '   7) Debiti verso fornitori', class: 'LetteraNumero', cod: 'PP.D6', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D6a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D6b', values: [{ anno: 2019, value: '' }] },
        { desc: '   8) Debiti rappresentati da titoli di credito', class: 'LetteraNumero', cod: 'PP.D7', values: [{ anno: 2019, value: '' }] },
        { desc: '       - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D7a', values: [{ anno: 2019, value: '' }] },
        { desc: '       - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D7b', values: [{ anno: 2019, value: '' }] },
        { desc: '   9)Debiti verso imprese controllate', class: 'LetteraNumero', cod: 'PP.D8', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D8a', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D8b', values: [{ anno: 2019, value: '' }] },
        { desc: '   10)Debiti verso imprese collegate', class: 'LetteraNumero', cod: 'PP.D9', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D9a', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.D9b', values: [{ anno: 2019, value: '' }] },
        { desc: '   11)Debiti verso controllanti', class: 'LetteraNumero', cod: 'PP.DA', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DAa', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DAb', values: [{ anno: 2019, value: '' }] },
        { desc: '   12)Debiti tributari', class: 'LetteraNumero', cod: 'PP.DB', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DBa', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DBb', values: [{ anno: 2019, value: '' }] },
        { desc: '   13)Debiti verso istituti di previdenza e sicurezza sociale', class: 'LetteraNumero', cod: 'PP.DC', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DCa', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DCb', values: [{ anno: 2019, value: '' }] },
        { desc: '   14) Altri debiti', class: 'LetteraNumero', cod: 'PP.DD', values: [{ anno: 2019, value: '' }] },
        { desc: '   - entro 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DDa', values: [{ anno: 2019, value: '' }] },
        { desc: '   - oltre 12 mesi', class: 'LetteraNumeroNumero', cod: 'PP.DDb', values: [{ anno: 2019, value: '' }] },
        { desc: 'E) Ratei e risconti ', class: 'LetteraNumero', cod: 'PP.E', values: [{ anno: 2019, value: '' }] },
        { desc: '   -aggio su prestiti', class: 'LetteraNumeroNumero', cod: 'PP.E1', values: [{ anno: 2019, value: '' }] },
        { desc: '   -vari', class: 'LetteraNumeroNumero', cod: 'PP.E2', values: [{ anno: 2019, value: '' }] },
        { desc: 'CONTI D’ORDINE', class: 'inizio', cod: 'PO', values: [{ anno: 2019, value: '' }] },
        { desc: 'Rischi assunti dall’impresa', class: 'Lettera', cod: 'PO.A', values: [{ anno: 2019, value: '' }] },
        { desc: '	Fideiussioni', class: 'LetteraNumero', cod: 'PO.A1', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate', class: 'LetteraNumeroNumero', cod: 'PO.A1a', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese collegate', class: 'LetteraNumeroNumero', cod: 'PO.A1b', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A1c', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate da controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A1d', values: [{ anno: 2019, value: '' }] },
        { desc: '	ad altre imprese', class: 'LetteraNumeroNumero', cod: 'PO.A1e', values: [{ anno: 2019, value: '' }] },
        { desc: '	Avalli', class: 'LetteraNumero', cod: 'PO.A2', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate', class: 'LetteraNumeroNumero', cod: 'PO.A2a', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese collegate', class: 'LetteraNumeroNumero', cod: 'PO.A2b', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A2c', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate da controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A2d', values: [{ anno: 2019, value: '' }] },
        { desc: '	ad altre imprese', class: 'LetteraNumeroNumero', cod: 'PO.A2e', values: [{ anno: 2019, value: '' }] },
        { desc: '	Altre garanzie personali', class: 'LetteraNumero', cod: 'PO.A3', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate', class: 'LetteraNumeroNumero', cod: 'PO.A3a', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese collegate', class: 'LetteraNumeroNumero', cod: 'PO.A3b', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A3c', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate da controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A3d', values: [{ anno: 2019, value: '' }] },
        { desc: '	ad altre imprese', class: 'LetteraNumeroNumero', cod: 'PO.A3e', values: [{ anno: 2019, value: '' }] },
        { desc: '	Garanzie Reali', class: 'LetteraNumero', cod: 'PO.A4', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate', class: 'LetteraNumeroNumero', cod: 'PO.A4a', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese collegate', class: 'LetteraNumeroNumero', cod: 'PO.A4b', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A4c', values: [{ anno: 2019, value: '' }] },
        { desc: '	a imprese controllate da controllanti', class: 'LetteraNumeroNumero', cod: 'PO.A4d', values: [{ anno: 2019, value: '' }] },
        { desc: '	ad altre imprese', class: 'LetteraNumeroNumero', cod: 'PO.A4e', values: [{ anno: 2019, value: '' }] },
        { desc: '	Altri Rischi', class: 'LetteraNumero', cod: 'PO.A5', values: [{ anno: 2019, value: '' }] },
        { desc: '	crediti ceduti pro solvendo', class: 'LetteraNumeroNumero', cod: 'PO.A5a', values: [{ anno: 2019, value: '' }] },
        { desc: '	altri', class: 'LetteraNumeroNumero', cod: 'PO.A5b', values: [{ anno: 2019, value: '' }] },
        { desc: 'Impegni Assunti dall’impresa', class: 'Lettera', cod: 'PO.B', values: [{ anno: 2019, value: '' }] },
        { desc: 'Beni di terzi presso l’impresa', class: 'Lettera', cod: 'PO.C', values: [{ anno: 2019, value: '' }] },
        { desc: '	merci in conto lavorazione', class: 'LetteraNumero', cod: 'PO.C1', values: [{ anno: 2019, value: '' }] },
        { desc: '	beni presso l’impresa a titolo di deposito o comodato', class: 'LetteraNumero', cod: 'PO.C2', values: [{ anno: 2019, value: '' }] },
        { desc: '	beni presso l’impresa in pegno o cauzione', class: 'LetteraNumero', cod: 'PO.C3', values: [{ anno: 2019, value: '' }] },
        { desc: '	altro', class: 'LetteraNumero', cod: 'PO.C4', values: [{ anno: 2019, value: '' }] },
        { desc: 'Altri conti d’ordine', class: 'Lettera', cod: 'PO.L', values: [{ anno: 2019, value: '' }] },
        { desc: 'CONTO ECONOMICO', class: 'inizio', cod: 'E', values: [{ anno: 2019, value: '' }] },
        { desc: 'A) Valore della produzione', class: 'Lettera', cod: 'E.A', values: [{ anno: 2019, value: '' }] },
        { desc: '	1) Ricavi delle vendite e delle prestazioni', class: 'LetteraNumero', cod: 'E.A1', values: [{ anno: 2019, value: '' }] },
        { desc: '	2)Variazione rimanenze prodotti in corso di lavor., semilavorati e finiti', class: 'LetteraNumero', cod: 'E.A2', values: [{ anno: 2019, value: '' }] },
        { desc: '	3) Ricavi delle vendite e delle prestazioni', class: 'LetteraNumero', cod: 'E.A1', values: [{ anno: 2019, value: '' }] },
        { desc: '	4) Incrementi di Immobilizzazioni per lavori interni', class: 'LetteraNumero', cod: 'E.A4', values: [{ anno: 2019, value: '' }] },
        { desc: '	5) Altri ricavi e proventi', class: 'LetteraNumero', cod: 'E.A5', values: [{ anno: 2019, value: '' }] },
        { desc: '	   - Vari', class: 'LetteraNumeroNumero', cod: 'E.A51', values: [{ anno: 2019, value: '' }] },
        { desc: '	   - Contributi in conto esercizio', class: 'LetteraNumeroNumero', cod: 'E.A52', values: [{ anno: 2019, value: '' }] },
        { desc: 'B) Costi della produzione', class: 'Lettera', cod: 'E.B', values: [{ anno: 2019, value: '' }] },
        { desc: '	6) Acquisti materie prime,sussidiarie, di consumo e di merci', class: 'LetteraNumero', cod: 'E.B1', values: [{ anno: 2019, value: '' }] },
        { desc: 'MARGINE LORDO', class: 'inizio', cod: 'ML', values: [{ anno: 2019, value: '' }] },
        { desc: '	7) Spese per prestazioni di servizi', class: 'LetteraNumero', cod: 'E.B2', values: [{ anno: 2019, value: '' }] },
        { desc: '	8) Spese per godimento di beni di terzi', class: 'LetteraNumero', cod: 'E.B3', values: [{ anno: 2019, value: '' }] },
        { desc: '	9) Costi del personale', class: 'LetteraNumero', cod: 'E.B4', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	a) Salari e stipendi', class: 'LetteraNumeroNumero', cod: 'E.B41', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	b) Oneri sociali', class: 'LetteraNumeroNumero', cod: 'E.B42', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	c) Trattamento Fine Rapporto', class: 'LetteraNumeroNumero', cod: 'E.B43', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	d) Trattamento di quiescenza e simili', class: 'LetteraNumeroNumero', cod: 'E.B44', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	e) Altri costi', class: 'LetteraNumeroNumero', cod: 'E.B45', values: [{ anno: 2019, value: '' }] },
        { desc: 'EBITDA (MOL)', class: 'inizio', cod: 'EBITDA', values: [{ anno: 2019, value: '' }] },
        { desc: '	10) Ammortamenti e svalutazioni', class: 'LetteraNumero', cod: 'E.B5', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	a) Ammortamento delle immobilizzazioni immateriali', class: 'LetteraNumeroNumero', cod: 'E.B51', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	b) Ammortamento delle immobilizzazioni materiali', class: 'LetteraNumeroNumero', cod: 'E.B52', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	c) Altre svalutazioni delle immobilizzazioni', class: 'LetteraNumeroNumero', cod: 'E.B53', values: [{ anno: 2019, value: '' }] },
        { desc: '	 	d) Svalutazione cred. del circol. e delle disponibilità liquide', class: 'LetteraNumeroNumero', cod: 'E.B54', values: [{ anno: 2019, value: '' }] },
        { desc: '	11) Variazioni rimanenze materie prime, sussid., di consume e merci', class: 'LetteraNumero', cod: 'E.B6', values: [{ anno: 2019, value: '' }] },
        { desc: '	12) Accantonamenti per rischi', class: 'LetteraNumero', cod: 'E.B7', values: [{ anno: 2019, value: '' }] },
        { desc: '	13) Altri accantonamenti', class: 'LetteraNumero', cod: 'E.B8', values: [{ anno: 2019, value: '' }] },
        { desc: '	14) Oneri diversi di gestione', class: 'LetteraNumero', cod: 'E.B9', values: [{ anno: 2019, value: '' }] },
        { desc: 'RISULTATO OPERATIVO EBIT', class: 'inizio', cod: 'E=B', values: [{ anno: 2019, value: '' }] },
        { desc: '	C) Proventi e oneri finanziari', class: 'Lettera', cod: 'E.C', values: [{ anno: 2019, value: '' }] },
        { desc: '	15) Proventi e partecipazioni', class: 'LetteraNumero', cod: 'E.C1', values: [{ anno: 2019, value: '' }] },
        { desc: '		- Imprese controllate', class: 'LetteraNumeroNumero', cod: 'E.C11', values: [{ anno: 2019, value: '' }] },
        { desc: '		- Imprese collegate', class: 'LetteraNumeroNumero', cod: 'E.C12', values: [{ anno: 2019, value: '' }] },
        { desc: '		- Altri', class: 'LetteraNumeroNumero', cod: 'E.C13', values: [{ anno: 2019, value: '' }] },
        { desc: '	16) Altri proventi finanziari', class: 'LetteraNumero', cod: 'E.C2', values: [{ anno: 2019, value: '' }] },
        { desc: '	  a) da crediti iscritti nelle immobilizzazioni', class: 'LetteraNumeroNumero', cod: 'E.C21', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da imprese controllate', class: 'LetteraNumeroNumeroLettera', cod: 'E.C211', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da imprese collegate', class: 'LetteraNumeroNumeroLettera', cod: 'E.C212', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da controllanti', class: 'LetteraNumeroNumeroLettera', cod: 'E.C213', values: [{ anno: 2019, value: '' }] },
        { desc: '            - altri', class: 'LetteraNumeroNumeroLettera', cod: 'E.C215', values: [{ anno: 2019, value: '' }] },
        { desc: '        b) da titoli iscritti nelle immobilizzazioni', class: 'LetteraNumeroNumero', cod: 'E.C22', values: [{ anno: 2019, value: '' }] },
        { desc: "        c) da titoli inscritti nell'attivo circolante", class: 'LetteraNumeroNumero', cod: 'E.C23', values: [{ anno: 2019, value: '' }] },
        { desc: '        d) proventi finanziari diversi dai precedenti:', class: 'LetteraNumeroNumero', cod: 'E.C24', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da imprese controllate', class: 'LetteraNumeroNumeroLettera', cod: 'E.C241', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da imprese collegate', class: 'LetteraNumeroNumeroLettera', cod: 'E.C245', values: [{ anno: 2019, value: '' }] },
        { desc: '            - da imprese controllanti', class: 'LetteraNumeroNumeroLettera', cod: 'E.C242', values: [{ anno: 2019, value: '' }] },
        { desc: '            - altri proventi finanziari', class: 'LetteraNumeroNumeroLettera', cod: 'E.C244', values: [{ anno: 2019, value: '' }] },
        { desc: '    17) Interessi e altri oneri finanziari:', class: 'LetteraNumero', cod: 'E.C3', values: [{ anno: 2019, value: '' }] },
        { desc: '        - da imprese controllate', class: 'LetteraNumeroNumero', cod: 'E.C31', values: [{ anno: 2019, value: '' }] },
        { desc: '        - da imprese collegate', class: 'LetteraNumeroNumero', cod: 'E.C32', values: [{ anno: 2019, value: '' }] },
        { desc: '        - da imprese controllanti', class: 'LetteraNumeroNumero', cod: 'E.C33', values: [{ anno: 2019, value: '' }] },
        { desc: '        - altri', class: 'LetteraNumeroNumero', cod: 'E.C35', values: [{ anno: 2019, value: '' }] },
        { desc: '    17-bis) Utili e perdite su cambi', class: 'LetteraNumero', cod: 'E.C4', values: [{ anno: 2019, value: '' }] },
        { desc: 'D) Rettifiche di valore di attività finanziarie', class: 'Lettera', cod: 'E.D', values: [{ anno: 2019, value: '' }] },
        { desc: '    18) Rivalutazioni', class: 'LetteraNumero', cod: 'E.D1', values: [{ anno: 2019, value: '' }] },
        { desc: '        a) di partecipazioni', class: 'LetteraNumeroNumero', cod: 'E.D11', values: [{ anno: 2019, value: '' }] },
        { desc: '            con il metodo del patrimonio netto', class: 'LetteraNumeroNumeroLettera', cod: 'E.D111', values: [{ anno: 2019, value: '' }] },
        { desc: '            altre', class: 'LetteraNumeroNumeroLettera', cod: 'E.D112', values: [{ anno: 2019, value: '' }] },
        { desc: '        b) di immobilizzazioni finanziarie', class: 'LetteraNumeroNumero', cod: 'E.D12', values: [{ anno: 2019, value: '' }] },
        { desc: "        c) di titoli inscritti nell'attivo circolante", class: 'LetteraNumeroNumero', cod: 'E.D13', values: [{ anno: 2019, value: '' }] },
        { desc: '    19) Svalutazioni', class: 'LetteraNumero', cod: 'E.D2', values: [{ anno: 2019, value: '' }] },
        { desc: '        a) di partecipazioni', class: 'LetteraNumeroNumero', cod: 'E.D21', values: [{ anno: 2019, value: '' }] },
        { desc: '            con il metodo del patrimonio netto', class: 'LetteraNumeroNumeroLettera', cod: 'E.D211', values: [{ anno: 2019, value: '' }] },
        { desc: '            altre', class: 'LetteraNumeroNumeroLettera', cod: 'E.D212', values: [{ anno: 2019, value: '' }] },
        { desc: '        b) di immobilizzazioni finanziarie', class: 'LetteraNumeroNumero', cod: 'E.D22', values: [{ anno: 2019, value: '' }] },
        { desc: "        c) di titoli inscritti nell'attivo circolante", class: 'LetteraNumeroNumero', cod: 'E.D23', values: [{ anno: 2019, value: '' }] },
        { desc: 'E) Proventi e oneri straordinari', class: 'Lettera', cod: 'E.E', values: [{ anno: 2019, value: '' }] },
        { desc: '    20) Proventi straordinari', class: 'LetteraNumero', cod: 'E.E1', values: [{ anno: 2019, value: '' }] },
        { desc: '        - Plusvalenze non produzione', class: 'LetteraNumeroNumero', cod: 'E.E11', values: [{ anno: 2019, value: '' }] },
        { desc: '        - Varie', class: 'LetteraNumeroNumero', cod: 'E.E12', values: [{ anno: 2019, value: '' }] },
        { desc: '            - Varie', class: 'LetteraNumeroNumeroLettera', cod: 'E.E121', values: [{ anno: 2019, value: '' }] },
        { desc: '            - Proventi (Oneri) straordinari per redazione Bilancio in Euro (2 decimali)', class: 'LetteraNumeroNumeroLettera', cod: 'E.E122', values: [{ anno: 2019, value: '' }] },
        { desc: '    21) Oneri straordinari', class: 'LetteraNumero', cod: 'E.E2', values: [{ anno: 2019, value: '' }] },
        { desc: '        - Minusvalenze non produzione', class: 'LetteraNumeroNumero', cod: 'E.E21', values: [{ anno: 2019, value: '' }] },
        { desc: '        - Imposte su esercizi precedenti', class: 'LetteraNumeroNumero', cod: 'E.E22', values: [{ anno: 2019, value: '' }] },
        { desc: '        - Varie', class: 'LetteraNumeroNumero', cod: 'E.E23', values: [{ anno: 2019, value: '' }] },
        { desc: 'Risultato prima delle imposte', class: 'Lettera', cod: 'E.F', values: [{ anno: 2019, value: '' }] },
        { desc: "22) Imposte sul reddito dell'esercizio", class: 'LetteraNumero', cod: 'E.F1', values: [{ anno: 2019, value: '' }] },
        { desc: '    a) Imposte correnti', class: 'LetteraNumeroNumero', cod: 'E.F11', values: [{ anno: 2019, value: '' }] },
        { desc: '    b) Imposte differite', class: 'LetteraNumeroNumero', cod: 'E.F12', values: [{ anno: 2019, value: '' }] },
        { desc: '    c) Imposte anticipate', class: 'LetteraNumeroNumero', cod: 'E.F13', values: [{ anno: 2019, value: '' }] },
        { desc: '    d) Proventi (oneri) da adesione al regime di consolidato fiscale / trasparenza fiscale', class: 'LetteraNumeroNumero', cod: 'E.F14', values: [{ anno: 2019, value: '' }] },
        { desc: "23) Utile (Perdita) dell'esercizio", class: 'LetteraNumero', cod: 'E.F2', values: [{ anno: 2019, value: '' }] },
        { desc: "Utile (perdita) dell'esercizio di pertinenza di terzi", class: 'Lettera', cod: 'E.G', values: [{ anno: 2019, value: '' }] },
        { desc: "Utile (perdita) dell'esercizio di pertinenza per il gruppo", class: 'Lettera', cod: 'E.H', values: [{ anno: 2019, value: '' }] },
        { desc: 'Riclassificazione SP secondo il criterio finanziario', class: 'inizio', cod: '', values: [{ anno: 2019, value: '' }] },
        { desc: 'Immobilizzazioni Immateriali', class: 'Colorato', cod: 'IMM.1', values: [{ anno: 2019, value: '' }] },
        { desc: 'Immobilizzazioni materiali', class: '', cod: 'IMM.2', values: [{ anno: 2019, value: '' }] },
        { desc: 'Immobilizzazioni finanziarie', class: 'Colorato', cod: 'IMM.3', values: [{ anno: 2019, value: '' }] },
        { desc: 'TOTALE IMMOBILIZZAZIONI', class: '', cod: 'IMM', values: [{ anno: 2019, value: '' }] },
        { desc: 'Attività consolidate', class: 'Colorato', cod: 'ATTCONS', values: [{ anno: 2019, value: '' }] },
        { desc: 'Rimanenze', class: '', cod: 'RIMA', values: [{ anno: 2019, value: '' }] },
        { desc: 'Clienti', class: 'Colorato', cod: 'LD1', values: [{ anno: 2019, value: '' }] },
        { desc: 'Altri crediti entro 12 mesi', class: '', cod: 'LD2', values: [{ anno: 2019, value: '' }] },
        { desc: 'Crediti oltre 12 mesi', class: 'Colorato', cod: 'CROLTRE12', values: [{ anno: 2019, value: '' }] },
        { desc: 'Attività finanziarie non immobilizzate', class: '', cod: 'ATTFINNONIMM', values: [{ anno: 2019, value: '' }] },
        { desc: 'Liquidità', class: 'Colorato', cod: 'LI', values: [{ anno: 2019, value: '' }] },
        { desc: 'ratei e Risconti attivi', class: '', cod: 'RATRISATT', values: [{ anno: 2019, value: '' }] },
        { desc: 'Attività Correnti', class: 'Colorato', cod: 'ATTCORR', values: [{ anno: 2019, value: '' }] },
        { desc: 'Liquidità + crediti + ratei', class: '', cod: 'LIQCRERAT', values: [{ anno: 2019, value: '' }] },
        { desc: 'Attività correnti - liquidità', class: 'Colorato', cod: 'ATTCORRLIQ', values: [{ anno: 2019, value: '' }] },
        { desc: 'Totale impieghi (capitale investito)', class: '', cod: 'CI', values: [{ anno: 2019, value: '' }] },
        { desc: 'Patrimonio Netto', class: 'Colorato', cod: 'PN', values: [{ anno: 2019, value: '' }] },
        { desc: 'Fondi', class: '', cod: 'FON', values: [{ anno: 2019, value: '' }] },
        { desc: 'TFR', class: 'Colorato', cod: 'TFR', values: [{ anno: 2019, value: '' }] },
        { desc: 'debiti finanziari MLT', class: '', cod: 'MLT', values: [{ anno: 2019, value: '' }] },
        { desc: 'Passività consolidate', class: 'Colorato', cod: 'PMLT', values: [{ anno: 2019, value: '' }] },
        { desc: 'Passività consolidate + CN', class: '', cod: 'PMLT+PN', values: [{ anno: 2019, value: '' }] },
        { desc: 'debiti finanziari BT', class: 'Colorato', cod: 'DEBFINBT', values: [{ anno: 2019, value: '' }] },
        { desc: 'Fornitori', class: '', cod: 'FORN', values: [{ anno: 2019, value: '' }] },
        { desc: 'debiti non finanziari oltre 12 mesi', class: 'Colorato', cod: 'DFB', values: [{ anno: 2019, value: '' }] },
        { desc: 'debiti non finanziari entro 12 mesi', class: '', cod: 'DEBNONFINENTR12MES', values: [{ anno: 2019, value: '' }] },
        { desc: 'ratei e risconti', class: 'Colorato', cod: 'RATERIS', values: [{ anno: 2019, value: '' }] },
        { desc: 'Passività correnti', class: '', cod: 'PR', values: [{ anno: 2019, value: '' }] },
        { desc: 'Capitale circolante netto', class: 'Colorato', cod: 'CAPCIRNET', values: [{ anno: 2019, value: '' }] },
        { desc: 'Totale fonti (Passività + Netto)', class: '', cod: 'TOTFON', values: [{ anno: 2019, value: '' }] },
        { desc: 'variaz. Cred.+mag.', class: 'Colorato', cod: 'VARCREDMAG', values: [{ anno: 2019, value: '' }] },
        { desc: 'variaz.ricavi', class: '', cod: 'VARRIC', values: [{ anno: 2019, value: '' }] },
        { desc: 'variaz.att.cotrr.', class: 'Colorato', cod: 'VARATTCOTRR', values: [{ anno: 2019, value: '' }] }
      ],
      PA: 0,
      PAA: 1,
      PAA1: 2,
      PAA2: 3,
      PAB: 4,
      PAB1: 5,
      PAB11: 6,
      PAB11A: 7,
      PAB11B: 8,
      PAB11C: 9,
      PAB12: 10,
      PAB12A: 11,
      PAB12B: 12,
      PAB12C: 13,
      PAB13: 14,
      PAB13A: 15,
      PAB13B: 16,
      PAB13C: 17,
      PAB14: 18,
      PAB14A: 19,
      PAB14B: 20,
      PAB14C: 21,
      PAB18: 22,
      PAB15: 23,
      PAB15A: 24,
      PAB15B: 25,
      PAB15C: 26,
      PAB16: 27,
      PAB17: 28,
      PAB17A: 29,
      PAB17B: 30,
      PAB17C: 31,
      PAB2: 32,
      PAB21: 33,
      PAB21A: 34,
      PAB21B: 35,
      PAB21C: 36,
      PAB22: 37,
      PAB22A: 38,
      PAB22B: 39,
      PAB22C: 40,
      PAB23: 41,
      PAB23A: 42,
      PAB23B: 43,
      PAB23C: 44,
      PAB24: 45,
      PAB24A: 46,
      PAB24B: 47,
      PAB24C: 48,
      PAB25: 49,
      PAB26: 50,
      PAB26A: 51,
      PAB26B: 52,
      PAB26C: 53,
      PAB3: 54,
      PAB31: 55,
      PAB31A: 56,
      PAB31B: 57,
      PAB31C: 58,
      PAB31D: 59,
      PAB32: 60,
      PAB32A: 61,
      PAB32A1: 62,
      PAB32A2: 63,
      PAB32B: 64,
      PAB32B1: 65,
      PAB32B2: 66,
      PAB32C: 67,
      PAB32C1: 68,
      PAB32C2: 69,
      PAB32D: 70,
      PAB32D1: 71,
      PAB32D2: 72,
      PAB33: 73,
      PAB34: 74,
      PAB34A: 75,
      PAB34B: 76,
      PAC: 77,
      PAC1: 78,
      PAC11: 79,
      PAC12: 80,
      PAC13: 81,
      PAC14: 82,
      PAC15: 83,
      PAC2: 84,
      PAC21: 85,
      PAC21A: 86,
      PAC21B: 87,
      PAC22: 88,
      PAC22A: 89,
      PAC22B: 90,
      PAC23: 91,
      PAC23A: 92,
      PAC23B: 93,
      PAC24: 94,
      PAC24A: 95,
      PAC24B: 96,
      PAC2B: 97,
      PAC2BA: 98,
      PAC2BB: 99,
      PAC2T: 100,
      PAC2TA: 101,
      PAC2TB: 102,
      PAC25: 103,
      PAC25A: 104,
      PAC25B: 105,
      PAC3: 106,
      PAC31: 107,
      PAC32: 108,
      PAC33: 109,
      PAC34: 110,
      PAC35: 111,
      PAC35A: 112,
      PAC35B: 113,
      PAC36: 114,
      PAC4: 115,
      PAC41: 116,
      PAC42: 117,
      PAC43: 118,
      PAD: 119,
      PAD1: 120,
      PAD2: 121,
      PP: 122,
      PPA: 123,
      PPA1: 124,
      PPA2: 125,
      PPA3: 126,
      PPA4: 127,
      PPA5: 128,
      PPA6: 129,
      PPA7: 130,
      PPA7A: 131,
      PPA7N: 132,
      PPA7O: 133,
      PPA7P: 134,
      PPA7Q: 135,
      PPA7R: 136,
      PPA7S: 137,
      PPA7B: 138,
      PPA7T: 139,
      PPA7U: 140,
      PPA7V: 141,
      PPA7W: 142,
      PPA7J: 143,
      PPA7J1: 144,
      PPA7J2: 145,
      PPA7L: 146,
      PPA7M: 147,
      PPB: 155,
      PPB1: 156,
      PPB2: 157,
      PPB3: 158,
      PPB4: 159,
      PPC: 160,
      PPD: 161,
      PPD1: 162,
      PPD1A: 163,
      PPD1B: 164,
      PPD2: 165,
      PPD2A: 166,
      PPD2B: 167,
      PPDF: 168,
      PPDFA: 169,
      PPDFB: 170,
      PPD3: 171,
      PPD3A: 172,
      PPD3B: 173,
      PPD4: 174,
      PPD4A: 175,
      PPD4B: 176,
      PPD5: 177,
      PPD5A: 178,
      PPD5B: 179,
      PPD6: 180,
      PPD6A: 181,
      PPD6B: 182,
      PPD7: 183,
      PPD7A: 184,
      PPD7B: 185,
      PPD8: 186,
      PPD8A: 187,
      PPD8B: 188,
      PPD9: 189,
      PPD9A: 190,
      PPD9B: 191,
      PPDA: 192,
      PPDAA: 193,
      PPDAB: 194,
      PPDB: 195,
      PPDBA: 196,
      PPDBB: 197,
      PPDC: 198,
      PPDCA: 199,
      PPDCB: 200,
      PPDD: 201,
      PPDDA: 202,
      PPDDB: 203,

      EA: 244,
      EA1: 245,
      EA2: 246,
      EA3: 247,
      EA4: 248,
      EA5: 249,
      EA51: 250,
      EA52: 251,
      EB: 252,
      EB1: 253,
      ML: 254,
      EB2: 255,
      EB3: 256,
      EB4: 257,
      EB41: 258,
      EB42: 259,
      EB43: 260,
      EB44: 261,
      EB45: 262,
      EBITDA: 263,
      EB5: 264,
      EB51: 265,
      EB52: 266,
      EB53: 267,
      EB54: 268,
      EB6: 269,
      EB7: 270,
      EB8: 271,
      EB9: 272,
      ExB: 273,
      EC: 274,
      EC1: 275,
      EC11: 276,
      EC12: 277,
      EC13: 278,
      EC2: 279,
      EC21: 280,
      EC211: 281,
      EC212: 282,
      EC213: 283,
      EC215: 284,
      EC22: 285,
      EC23: 286,
      EC24: 287,
      EC241: 288,
      EC242: 289,
      EC244: 290,
      EC245: 291,
      EC3: 292,
      EC31: 293,
      EC32: 294,
      EC33: 295,
      EC35: 296,
      EC4: 297,
      ED: 298,
      ED1: 299,
      ED11: 300,
      ED111: 301,
      ED112: 302,
      ED12: 303,
      ED13: 304,
      ED2: 305,
      ED21: 306,
      ED211: 307,
      ED212: 308,
      ED22: 309,
      ED23: 310,
      EE: 311,
      EE1: 312,
      EE11: 313,
      EE12: 314,
      EE121: 315,
      EE122: 316,
      EE2: 317,
      EE21: 318,
      EE22: 319,
      EE23: 320,
      EF: 321,
      EF1: 322,
      EF11: 323,
      EF12: 324,
      EF13: 325,
      EF14: 326,
      EF2: 327,
      EG: 328,
      EH: 329
    }
  },
  computed: {

  },
  methods: {
    addCol () {
      let len = this.headers.length
      let last_year = parseInt(this.headers[len - 1].text)
      this.headers.push({ text: last_year - 1,
        align: 'left',
        sortable: false })
      for (let r of this.row) {
        r.values.push({ anno: last_year - 1, value: '' })
      }
    },
    remCol () {
      let len = this.headers.length
      let last_year = parseInt(this.headers[len - 1].text)
      if (last_year != 2019) {
        this.headers.pop()
        for (let r of this.row) {
          r.values.pop()
        }
      }
    },
    Elimina() {
      let year=parseInt(this.dialogm1);
      let index;
      let cont=0;
      for (let v of this.row[0].values) {
        if (v.anno==year) {
          index=cont;
        }
        cont++;
      }
      this.headers.splice(index+2,1);
      for (let r of this.row) {
        console.log(index);
        r.values.splice(index,1);
      }
    },
    aggiungiPunti(app){
      app.toString();
      let i;
      let result="";
      for(i=app.length-1;i>-1;i--){
          console.log(app[i]);
          console.log(app.length-1-i);
          
          if((app.length-1-i)%3==0 && (app.length-1-i)!=0){
              result="."+result;
          }

          result=app[i]+result;
          
          console.log("--------");
      }
      console.log(result);
      return result;
    },
    togliPunti(app){
        app.toString();
        let i;
        let result="";

        for(i=0;i<app.length;i++){
            if(app[i]!="."){
                result=result+app[i];
            }
        }
        console.log(parseInt(result));
        //return parseInt(result);
        app=parseInt(result);
    },
    addPoint(anno) {
      let indexAnno = 2019 - parseInt(anno)
      for (let r of this.row) {
        //if(r.values[indexAnno].value!="") {
          r.values[indexAnno].value= this.aggiungiPunti( r.values[indexAnno].value);
        //}
      }
    },
    removePoint(anno) {
      let indexAnno = 2019 - parseInt(anno)
      let temp;
      for (let r of this.row) {
        if (r.values[indexAnno].value!="") {
          temp=r.values[indexAnno].value
          this.togliPunti(temp);
          console.log("toltopunti")
          r.values[indexAnno].value=temp;
        }
      }
    },
    master (anno, cod) {
      switch (cod) {
        case 'PA':
          this.startPA(anno)
          break
        case 'PA.A':
          this.startPAA(anno)
          break
        case 'PA.A1':
          this.startPAA1(anno)
          break
        case 'PA.A2':
          this.startPAA2(anno)
          break
        case 'PA.B':
          this.startPAB(anno)
          break
        case 'PA.B1':
          this.startPAB1(anno)
          break
        case 'PA.B11':
          this.startPAB11(anno)
          break
        case 'PA.B11a':
          this.startPAB11a(anno)
          break
        case 'PA.B11b':
          this.startPAB11b(anno)
          break
        case 'PA.B11c':
          this.startPAB11c(anno)
          break
        case 'PA.B12':
          this.startPAB12(anno)
          break
        case 'PA.B12a':
          this.startPAB12a(anno)
          break
        case 'PA.B12b':
          this.startPAB12b(anno)
          break
        case 'PA.B12c':
          this.startPAB12c(anno)
          break
        case 'PA.B13':
          this.startPAB13(anno)
          break
        case 'PA.B13a':
          this.startPAB13a(anno)
          break
        case 'PA.B13b':
          this.startPAB13b(anno)
          break
        case 'PA.B13c':
          this.startPAB13c(anno)
          break
        case 'PA.B14':
          this.startPAB14(anno)
          break
        case 'PA.B14a':
          this.startPAB14a(anno)
          break
        case 'PA.B14b':
          this.startPAB14b(anno)
          break
        case 'PA.B14c':
          this.startPAB14c(anno)
          break
        case 'PA.B18':
          this.startPAB18(anno)
          break
        case 'PA.B15':
          this.startPAB15(anno)
          break
        case 'PA.B15a':
          this.startPAB15a(anno)
          break
        case 'PA.B15b':
          this.startPAB15b(anno)
          break
        case 'PA.B15c':
          this.startPAB15c(anno)
          break
        case 'PA.B16':
          this.startPAB16(anno)
          break
        case 'PA.B17':
          this.startPAB17(anno)
          break
        case 'PA.B17a':
          this.startPAB17a(anno)
          break
        case 'PA.B17b':
          this.startPAB17b(anno)
          break
        case 'PA.B17c':
          this.startPAB17c(anno)
          break
        case 'PA.B2':
          this.startPAB2(anno)
          break
        case 'PA.B21':
          this.startPAB21(anno)
          break
        case 'PA.B21a':
          this.startPAB21A(anno)
          break
        case 'PA.B21b':
          this.startPAB21B(anno)
          break
        case 'PA.B21c':
          this.startPAB21C(anno)
          break
        case 'PA.B22':
          this.startPAB22(anno)
          break
        case 'PA.B22a':
          this.startPAB22A(anno)
          break
        case 'PA.B22b':
          this.startPAB22B(anno)
          break
        case 'PA.B22c':
          this.startPAB22C(anno)
          break
        case 'PA.B23':
          this.startPAB23(anno)
          break
        case 'PA.B23a':
          this.startPAB23A(anno)
          break
        case 'PA.B23b':
          this.startPAB23B(anno)
          break
        case 'PA.B23c':
          this.startPAB23C(anno)
          break
        case 'PA.B24':
          this.startPAB24(anno)
          break
        case 'PA.B24a':
          this.startPAB24A(anno)
          break
        case 'PA.B24b':
          this.startPAB24B(anno)
          break
        case 'PA.B24c':
          this.startPAB24C(anno)
          break
        case 'PA.B25':
          this.startPAB25(anno)
          break
        case 'PA.B26':
          this.startPAB26(anno)
          break
        case 'PA.B26a':
          this.startPAB26A(anno)
          break
        case 'PA.B26b':
          this.startPAB26B(anno)
          break
        case 'PA.B26c':
          this.startPAB26C(anno)
          break
        case 'PA.B3':
          this.startPAB3(anno)
          break
        case 'PA.B31':
          this.startPAB31(anno)
          break
        case 'PA.B31a':
          this.startPAB31A(anno)
          break
        case 'PA.B31b':
          this.startPAB31B(anno)
          break
        case 'PA.B31c':
          this.startPAB31C(anno)
          break
        case 'PA.B31d':
          this.startPAB31D(anno)
          break
        case 'PA.B32':
          this.startPAB32(anno)
          break
        case 'PA.B32a':
          this.startPAB32A(anno)
          break
        case 'PA.B32a1':
          this.startPAB32A1(anno)
          break
        case 'PA.B32a2':
          this.startPAB32A2(anno)
          break
        case 'PA.B32b':
          this.startPAB32B(anno)
          break
        case 'PA.B32b1':
          this.startPAB32B1(anno)
          break
        case 'PA.B32b2':
          this.startPAB32B2(anno)
          break
        case 'PA.B32c':
          this.startPAB32C(anno)
          break
        case 'PA.B32c1':
          this.startPAB32C1(anno)
          break
        case 'PA.B32c2':
          this.startPAB32C2(anno)
          break
        case 'PA.B32d':
          this.startPAB32D(anno)
          break
        case 'PA.B32d1':
          this.startPAB32D1(anno)
          break
        case 'PA.B32d2':
          this.startPAB32D2(anno)
          break
        case 'PA.B33':
          this.startPAB33(anno)
          break
        case 'PA.B34':
          this.startPAB34(anno)
          break
        case 'PA.B34a':
          this.startPAB34A(anno)
          break
        case 'PA.B34b':
          this.startPAB34B(anno)
          break
        case 'PA.C':
          this.startPAC(anno)
          break
        case 'PA.C1':
          this.startPAC1(anno)
          break
        case 'PA.C11':
          this.startPAC11(anno)
          break
        case 'PA.C12':
          this.startPAC12(anno)
          break
        case 'PA.C13':
          this.startPAC13(anno)
          break
        case 'PA.C14':
          this.startPAC14(anno)
          break
        case 'PA.C15':
          this.startPAC15(anno)
          break
        case 'PA.C2':
          this.startPAC2(anno)
          break
        case 'PA.C21':
          this.startPAC21(anno)
          break
        case 'PA.C21a':
          this.startPAC21A(anno)
          break
        case 'PA.C21b':
          this.startPAC21B(anno)
          break
        case 'PA.C22':
          this.startPAC22(anno)
          break
        case 'PA.C22a':
          this.startPAC22A(anno)
          break
        case 'PA.C22b':
          this.startPAC22B(anno)
          break
        case 'PA.C23':
          this.startPAC23(anno)
          break
        case 'PA.C23a':
          this.startPAC23A(anno)
          break
        case 'PA.C23b':
          this.startPAC23B(anno)
          break
        case 'PA.C24':
          this.startPAC24(anno)
          break
        case 'PA.C24a':
          this.startPAC24A(anno)
          break
        case 'PA.C24b':
          this.startPAC24B(anno)
          break
        case 'PA.C2B':
          this.startPAC2B(anno)
          break
        case 'PA.C2Ba':
          this.startPAC2BA(anno)
          break
        case 'PA.C2Bb':
          this.startPAC2BB(anno)
          break
        case 'PA.C2T':
          this.startPACTB(anno)
          break
        case 'PA.C2Ta':
          this.startPAC2TA(anno)
          break
        case 'PA.C2Tb':
          this.startPAC2TB(anno)
          break
        case 'PA.C25':
          this.startPAC25(anno)
          break
        case 'PA.C25a':
          this.startPAC25A(anno)
          break
        case 'PA.C25b':
          this.startPAC25B(anno)
          break
        case 'PA.C3':
          this.startPAC3(anno)
          break
        case 'PA.C31':
          this.startPAC31(anno)
          break
        case 'PA.C32':
          this.startPAC32(anno)
          break
        case 'PA.C33':
          this.startPAC33(anno)
          break
        case 'PA.C34':
          this.startPAC34(anno)
          break
        case 'PA.C35':
          this.startPAC35(anno)
          break
        case 'PA.C35a':
          this.startPAC35A(anno)
          break
        case 'PA.C35b':
          this.startPAC35B(anno)
          break
        case 'PA.C36':
          this.startPAC36(anno)
          break
        case 'PA.C5':
          this.startPAC4(anno)
          break
        case 'PA.C41':
          this.startPAC41(anno)
          break
        case 'PA.C42':
          this.startPAC42(anno)
          break
        case 'PA.C43':
          this.startPAC43(anno)
          break
        case 'PA.D':
          this.startPAD(anno)
          break
        case 'PA.D1':
          this.startPAD1(anno)
          break
        case 'PA.D2':
          this.startPAD2(anno)
          break
        case 'PP':
          this.startPP(anno)
          break
        case 'PP.A':
          this.startPPA(anno)
          break
        case 'PP.A1':
          this.startPPA1(anno)
          break
        case 'PP.A2':
          this.startPPA2(anno)
          break
        case 'PP.A3':
          this.startPPA3(anno)
          break
        case 'PP.A4':
          this.startPPA4(anno)
          break
        case 'PP.A5':
          this.startPPA5(anno)
          break
        case 'PP.A6':
          this.startPPA6(anno)
          break
        case 'PP.A7':
          this.startPPA7(anno)
          break
        case 'PP.A7a':
          this.startPPA7A(anno)
          break
        case 'PP.A7n':
          this.startPPA7N(anno)
          break
        case 'PP.A7o':
          this.startPPA7O(anno)
          break
        case 'PP.A7p':
          this.startPPA7P(anno)
          break
        case 'PP.A7q':
          this.startPPA7Q(anno)
          break
        case 'PP.A7r':
          this.startPPA7R(anno)
          break
        case 'PP.A7s':
          this.startPPA7S(anno)
          break
        case 'PP.A7b':
          this.startPPA7B(anno)
          break
        case 'PP.A7t':
          this.startPPA7T(anno)
          break
        case 'PP.A7u':
          this.startPPA7U(anno)
          break
        case 'PP.A7v':
          this.startPPA7V(anno)
          break
        case 'PP.A7w':
          this.startPPA7W(anno)
          break
        case 'PP.A7j':
          this.startPPA7J(anno)
          break
        case 'PP.A7j1':
          this.startPPA7J1(anno)
          break
        case 'PP.A7j2':
          this.startPPA7J2(anno)
          break
        case 'PP.A7l':
          this.startPPA7L(anno)
          break
        case 'PP.A7m':
          this.startPPA7M(anno)
          break
        case 'PP.B':
          this.startPPB(anno)
          break
        case 'PP.B1':
          this.startPPB1(anno)
          break
        case 'PP.B2':
          this.startPPB2(anno)
          break
        case 'PP.B3':
          this.startPPB3(anno)
          break
        case 'PP.B4':
          this.startPPB4(anno)
          break
        case 'PP.C':
          this.startPPC(anno)
          break
        case 'PP.D':
          this.startPPD(anno)
          break
        case 'PP.D1':
          this.startPPD1(anno)
          break
        case 'PP.D1a':
          this.startPPD1a(anno)
          break
        case 'PP.D1b':
          this.startPPD1b(anno)
          break
        case 'PP.D2':
          this.startPPD2(anno)
          break
        case 'PP.D2a':
          this.startPPD2a(anno)
          break
        case 'PP.D2b':
          this.startPPD2b(anno)
          break
        case 'PP.DF':
          this.startPPDF(anno)
          break
        case 'PP.DFa':
          this.startPPDFa(anno)
          break
        case 'PP.DFb':
          this.startPPDFb(anno)
          break
        case 'PP.D3':
          this.startPPD3(anno)
          break
        case 'PP.D3a':
          this.startPPD3a(anno)
          break
        case 'PP.D3b':
          this.startPPD3b(anno)
          break
        case 'PP.D4':
          this.startPPD4(anno)
          break
        case 'PP.D4a':
          this.startPPD4a(anno)
          break
        case 'PP.D4b':
          this.startPPD4b(anno)
          break
        case 'PP.D5':
          this.startPPD5(anno)
          break
        case 'PP.D5a':
          this.startPPD5a(anno)
          break
        case 'PP.D5b':
          this.startPPD5b(anno)
          break
        case 'PP.D6':
          this.startPPD6(anno)
          break
        case 'PP.D6a':
          this.startPPD6a(anno)
          break
        case 'PP.D6b':
          this.startPPD6b(anno)
          break
        case 'PP.D7':
          this.startPPD7(anno)
          break
        case 'PP.D7a':
          this.startPPD7a(anno)
          break
        case 'PP.D7b':
          this.startPPD7b(anno)
          break
        case 'PP.D8':
          this.startPPD8(anno)
          break
        case 'PP.D8a':
          this.startPPD8a(anno)
          break
        case 'PP.D8b':
          this.startPPD8b(anno)
          break
        case 'PP.D9':
          this.startPPD9(anno)
          break
        case 'PP.D9a':
          this.startPPD9a(anno)
          break
        case 'PP.D9b':
          this.startPPD9b(anno)
          break
        case 'PP.DA':
          this.startPPDA(anno)
          break
        case 'PP.DAa':
          this.startPPDAa(anno)
          break
        case 'PP.DAb':
          this.startPPDAb(anno)
          break
        case 'PP.DB':
          this.startPPDB(anno)
          break
        case 'PP.DBa':
          this.startPPDBa(anno)
          break
        case 'PP.DBb':
          this.startPPDBb(anno)
          break
        case 'PP.DC':
          this.startPPDC(anno)
          break
        case 'PP.DCa':
          this.startPPDCa(anno)
          break
        case 'PP.DCb':
          this.startPPDCb(anno)
          break
        case 'PP.DD':
          this.startPPDD(anno)
          break
        case 'PP.DDa':
          this.startPPDDa(anno)
          break
        case 'PP.DDb':
          this.startPPDDb(anno)
          break
        case 'EA':
          this.startEA(anno)
          break
        case 'EA1':
          this.startEA1(anno)
          break
        case 'EA2':
          this.startEA2(anno)
          break
        case 'EA3':
          this.startEA3(anno)
          break
        case 'EA4':
          this.startEA4(anno)
          break
        case 'EA5':
          this.startEA5(anno)
          break
        case 'EA51':
          this.startEA51(anno)
          break
        case 'EA52':
          this.startEA52(anno)
          break
        case 'EB':
          this.startEB(anno)
          break
        case 'EB1':
          this.startEB1(anno)
          break
        case 'ML':
          this.startML(anno)
          break
        case 'EB2':
          this.startEB2(anno)
          break
        case 'EB3':
          this.startEB3(anno)
          break
        case 'EB4':
          this.startEB4(anno)
          break
        case 'EB41':
          this.startEB41(anno)
          break
        case 'EB42':
          this.startEB42(anno)
          break
        case 'EB43':
          this.startEB43(anno)
          break
        case 'EB44':
          this.startEB44(anno)
          break
        case 'EB45':
          this.startEB45(anno)
          break
        case 'EBITDA':
          this.startEBITDA(anno)
          break
        case 'EB5':
          this.startEB5(anno)
          break
        case 'EB51':
          this.startEB51(anno)
          break
        case 'EB52':
          this.startEB52(anno)
          break
        case 'EB53':
          this.startEB53(anno)
          break
        case 'EB54':
          this.startEB54(anno)
          break
        case 'EB6':
          this.startEB6(anno)
          break
        case 'EB7':
          this.startEB7(anno)
          break
        case 'EB8':
          this.startEB8(anno)
          break
        case 'EB9':
          this.startEB9(anno)
          break
        case 'ExB':
          this.startExB(anno)
          break
        case 'E.C':
          this.startEC(anno)
          break
        case 'E.C1':
          this.startEC1(anno)
          break
        case 'E.C11':
          this.startEC11(anno)
          break
        case 'E.C12':
          this.startEC12(anno)
          break
        case 'E.C13':
          this.startEC13(anno)
          break
        case 'E.C2':
          this.startEC2(anno)
          break
        case 'E.C21':
          this.startEC21(anno)
          break
        case 'E.C211':
          this.startEC211(anno)
          break
        case 'E.C212':
          this.startEC212(anno)
          break
        case 'E.C213':
          this.startEC213(anno)
          break
        case 'E.C215':
          this.startEC215(anno)
          break
        case 'E.C22':
          this.startEC22(anno)
          break
        case 'E.C23':
          this.startEC23(anno)
          break
        case 'E.C24':
          this.startEC24(anno)
          break
        case 'E.C241':
          this.startEC241(anno)
          break
        case 'E.C242':
          this.startEC242(anno)
          break
        case 'E.C244':
          this.startEC244(anno)
          break
        case 'E.C245':
          this.startEC245(anno)
          break
        case 'E.C3':
          this.startEC3(anno)
          break
        case 'E.C31':
          this.startEC31(anno)
          break
        case 'E.C32':
          this.startEC32(anno)
          break
        case 'E.C33':
          this.startEC33(anno)
          break
        case 'E.C35':
          this.startEC35(anno)
          break
        case 'E.C4':
          this.startEC4(anno)
          break

        case 'E.D':
          this.startED(anno)
          break
        case 'E.D1':
          this.startED1(anno)
          break
        case 'E.D11':
          this.startED11(anno)
          break
        case 'E.D111':
          this.startED111(anno)
          break
        case 'E.D112':
          this.startED112(anno)
          break
        case 'E.D12':
          this.startED12(anno)
          break
        case 'E.D13':
          this.startED13(anno)
          break

        case 'E.D2':
          this.startED2(anno)
          break
        case 'E.D21':
          this.startED21(anno)
          break
        case 'E.D211':
          this.startED211(anno)
          break
        case 'E.D212':
          this.startED212(anno)
          break
        case 'E.D22':
          this.startED22(anno)
          break
        case 'E.D23':
          this.startED23(anno)
          break

        case 'E.E':
          this.calculateEE(anno)
          break
        case 'E.E1':
          this.calculateEE1(anno)
          break
        case 'E.E11':
          this.calculateEE11(anno)
          break
        case 'E.E12':
          this.calculateEE12(anno)
          break
        case 'E.E121':
          this.calculateEE121(anno)
          break
        case 'E.E122':
          this.calculateEE122(anno)
          break
        case 'E.E2':
          this.calculateEE2(anno)
          break
        case 'E.E21':
          this.calculateEE21(anno)
          break
        case 'E.E22':
          this.calculateEE22(anno)
          break
        case 'E.E23':
          this.calculateEE23(anno)
          break
        case 'E.E':
          this.calculateEE(anno)
          break
        case 'E.F':
          this.calculateEF(anno)
          break
        case 'E.F1':
          this.calculateEF1(anno)
          break
        case 'E.F11':
          this.calculateEF11(anno)
          break
        case 'E.F12':
          this.calculateEF12(anno)
          break
        case 'E.F13':
          this.calculateEF13(anno)
          break
        case 'E.F14':
          this.calculateEF14(anno)
          break
        case 'E.F2':
          this.calculateEF2(anno)
          break
        case 'E.G':
          this.calculateEG(anno)
          break
        case 'E.H':
          this.calculateEH(anno)
          break
      }
    },
    startPA (anno) {
    },
    startPAA (anno) {
      this.calculatePA(anno)
    },
    startPAA1 (anno) {
      this.calculatePAA(anno)
    },
    startPAA2 (anno) {
      this.calculatePAA(anno)
    },
    startPAB (anno) {
      this.calculatePA(anno)
    },
    startPAB1 (anno) {
      this.calculatePAB(anno)
    },
    startPAB11 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB11a (anno) {
      this.calculatePAB11(anno)
    },
    startPAB11b (anno) {
      this.calculatePAB11(anno)
    },
    startPAB11c (anno) {
      this.calculatePAB11(anno)
    },
    startPAB12 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB12a (anno) {
      this.calculatePAB12(anno)
    },
    startPAB12b (anno) {
      this.calculatePAB12(anno)
    },
    startPAB12c (anno) {
      this.calculatePAB12(anno)
    },
    startPAB13 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB13a (anno) {
      this.calculatePAB13(anno)
    },
    startPAB13b (anno) {
      this.calculatePAB13(anno)
    },
    startPAB13c (anno) {
      this.calculatePAB13(anno)
    },
    startPAB14 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB14a (anno) {
      this.calculatePAB14(anno)
    },
    startPAB14b (anno) {
      this.calculatePAB14(anno)
    },
    startPAB14c (anno) {
      this.calculatePAB14(anno)
    },
    startPAB18 (anno) {
    },
    startPAB15 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB15a (anno) {
      this.calculatePAB15(anno)
    },
    startPAB15b (anno) {
      this.calculatePAB15(anno)
    },
    startPAB15c (anno) {
      this.calculatePAB15(anno)
    },
    startPAB16 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB17 (anno) {
      this.calculatePAB1(anno)
    },
    startPAB17a (anno) {
      this.calculatePAB17(anno)
    },
    startPAB17b (anno) {
      this.calculatePAB17(anno)
    },
    startPAB17c (anno) {
      this.calculatePAB17(anno)
    },
    startPAB2 (anno) {
      this.calculatePAB(anno)
    },
    startPAB21 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB21A (anno) {
      this.calculatePAB21(anno)
    },
    startPAB21B (anno) {
      this.calculatePAB21(anno)
    },
    startPAB21C (anno) {
      this.calculatePAB21(anno)
    },
    startPAB22 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB22A (anno) {
      this.calculatePAB22(anno)
    },
    startPAB22B (anno) {
      this.calculatePAB22(anno)
    },
    startPAB22C (anno) {
      this.calculatePAB22(anno)
    },
    startPAB23 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB23A (anno) {
      this.calculatePAB23(anno)
    },
    startPAB23B (anno) {
      this.calculatePAB23(anno)
    },
    startPAB23C (anno) {
      this.calculatePAB23(anno)
    },
    startPAB24 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB24A (anno) {
      this.calculatePAB24(anno)
    },
    startPAB24B (anno) {
      this.calculatePAB24(anno)
    },
    startPAB24C (anno) {
      this.calculatePAB24(anno)
    },
    startPAB25 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB26 (anno) {
      this.calculatePAB2(anno)
    },
    startPAB26A (anno) {
      this.calculatePAB26(anno)
    },
    startPAB26B (anno) {
      this.calculatePAB26(anno)
    },
    startPAB26C (anno) {
      this.calculatePAB26(anno)
    },
    startPAB3 (anno) {
      this.calculatePAB(anno)
    },
    startPAB31 (anno) {
      this.calculatePAB3(anno)
    },
    startPAB31A (anno) {
      this.calculatePAB31(anno)
    },
    startPAB31B (anno) {
      this.calculatePAB31(anno)
    },
    startPAB31C (anno) {
      this.calculatePAB31(anno)
    },
    startPAB31D (anno) {
      this.calculatePAB31(anno)
    },
    startPAB32 (anno) {
      this.calculatePAB3(anno)
    },
    startPAB32A (anno) {
      this.calculatePAB32(anno)
    },
    startPAB32A1 (anno) {
      this.calculatePAB32A(anno)
    },
    startPAB32A2 (anno) {
      this.calculatePAB32A(anno)
    },
    startPAB32B (anno) {
      this.calculatePAB32(anno)
    },
    startPAB32B1 (anno) {
      this.calculatePAB32B(anno)
    },
    startPAB32B2 (anno) {
      this.calculatePAB32B(anno)
    },
    startPAB32C (anno) {
      this.calculatePAB32(anno)
    },
    startPAB32C1 (anno) {
      this.calculatePAB32C(anno)
    },
    startPAB32C2 (anno) {
      this.calculatePAB32C(anno)
    },
    startPAB32D (anno) {
      this.calculatePAB32(anno)
    },
    startPAB32D1 (anno) {
      this.calculatePAB32D(anno)
    },
    startPAB32D2 (anno) {
      this.calculatePAB32D(anno)
    },
    startPAB33 (anno) {
      this.calculatePAB3(anno)
    },
    startPAB34 (anno) {
      this.calculatePAB3(anno)
    },
    startPAB34A (anno) {
      this.calculatePA34(anno)
    },
    startPAB34B (anno) {
      this.calculatePAB34(anno)
    },
    startPAC (anno) {
      this.calculatePA(anno)
    },
    startPAC1 (anno) {
      this.calculatePAC(anno)
    },
    startPAC11 (anno) {
      this.calculatePAC1(anno)
    },
    startPAC12 (anno) {
      this.calculatePAC1(anno)
    },
    startPAC13 (anno) {
      this.calculatePAC1(anno)
    },
    startPAC14 (anno) {
      this.calculatePAC1(anno)
    },
    startPAC15 (anno) {
      this.calculatePAC1(anno)
    },
    startPAC2 (anno) {
      this.calculatePAC(anno)
    },
    startPAC21 (anno) {
      this.calculatePAC2(anno)
    },
    startPAC21A (anno) {
      this.calculatePAC21(anno)
    },
    startPAC21B (anno) {
      this.calculatePAC21(anno)
    },
    startPAC22 (anno) {
      this.calculatePAC2(anno)
    },
    startPAC22A (anno) {
      this.calculatePAC22(anno)
    },
    startPAC22B (anno) {
      this.calculatePAC22(anno)
    },
    startPAC23 (anno) {
      this.calculatePAC2(anno)
    },
    startPAC23A (anno) {
      this.calculatePAC23(anno)
    },
    startPAC23B (anno) {
      this.calculatePAC23(anno)
    },
    startPAC24 (anno) {
      this.calculatePAC2(anno)
    },
    startPAC24A (anno) {
      this.calculatePAC24(anno)
    },
    startPAC24B (anno) {
      this.calculatePAC24(anno)
    },
    startPAC2B (anno) {
      this.calculatePAC2(anno)
    },
    startPAC2BA (anno) {
      this.calculatePAC2B(anno)
    },
    startPAC2BB (anno) {
      this.calculatePAC2B(anno)
    },
    startPAC2T (anno) {
      this.calculatePAC2(anno)
    },
    startPAC2TA (anno) {
      this.calculatePAC2T(anno)
    },
    startPAC2TB (anno) {
      this.calculatePAC2T(anno)
    },
    startPAC25 (anno) {
      this.calculatePAC2(anno)
    },
    startPAC25A (anno) {
      this.calculatePAC25(anno)
    },
    startPAC25B (anno) {
      this.calculatePAC25(anno)
    },
    startPAC3 (anno) {
      this.calculatePAC(anno)
    },
    startPAC31 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC32 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC33 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC34 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC35 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC35A (anno) {
      this.calculatePAC35(anno)
    },
    startPAC35B (anno) {
      this.calculatePAC35(anno)
    },
    startPAC36 (anno) {
      this.calculatePAC3(anno)
    },
    startPAC4 (anno) {
      this.calculatePAC(anno)
    },
    startPAC41 (anno) {
      this.calculatePAC4(anno)
    },
    startPAC42 (anno) {
      this.calculatePAC4(anno)
    },
    startPAC43 (anno) {
      this.calculatePAC4(anno)
    },
    startPAD (anno) {
      this.calculatePA(anno)
    },
    startPAD1 (anno) {
      this.calculatePAD(anno)
    },
    startPAD2 (anno) {
      this.calculatePAD2(anno)
    },
    startPP (anno) {
    },
    startPPA (anno) {
      this.calculatePP(anno)
    },
    startPPA1 (anno) {
      this.calculatePPA(anno)
    },
    startPPA2 (anno) {
      this.calculatePPA(anno)
    },
    startPPA3 (anno) {
      this.calculatePPA(anno)
    },
    startPPA4 (anno) {
      this.calculatePPA(anno)
    },
    startPPA5 (anno) {
      this.calculatePPA(anno)
    },
    startPPA6 (anno) {
      this.calculatePPA(anno)
    },
    startPPA7 (anno) {
      this.calculatePPA(anno)
    },
    startPPA7A (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7N (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7O (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7P (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7Q (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7R (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7S (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7B (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7T (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7U (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7V (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7W (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7J (anno) {
      this.calculatePPA7(anno)
    },
    startPPA7J1 (anno) {
      this.calculatePPA7J(anno)
    },
    startPPA7J2 (anno) {
      this.calculatePPA7J(anno)
    },
    startPPA7L (anno) {
      this.calculatePPA7(anno)
    },
    startPPa7M (anno) {
      this.calculatePPA7(anno)
    },
    startPPB (anno) {
      this.calculatePP(anno)
    },
    startPPB1 (anno) {
      this.calculatePPB(anno)
    },
    startPPB2 (anno) {
      this.calculatePPB(anno)
    },
    startPPB3 (anno) {
      this.calculatePPB(anno)
    },
    startPPB4 (anno) {
      this.calculatePPB(anno)
    },
    startPPC (anno) {
      this.calculatePP(anno)
    },
    startPPD (anno) {
      this.calculatePP(anno)
    },
    startPPD1 (anno) {
      this.calculatePPD(anno)
    },
    startPPD1a (anno) {
      this.calculatePPD1(anno)
    },
    startPPD1b (anno) {
      this.calculatePPD1(anno)
    },
    startPPD2 (anno) {
      this.calculatePPD(anno)
    },
    startPPD2a (anno) {
      this.calculatePPD2(anno)
    },
    startPPD2b (anno) {
      this.calculatePPD2(anno)
    },
    startPPDF (anno) {
      this.calculatePPD(anno)
    },
    startPPDFa (anno) {
      this.calculatePPDF(anno)
    },
    startPPDFb (anno) {
      this.calculatePPDF(anno)
    },
    startPPD3 (anno) {
      this.calculatePPD(anno)
    },
    startPPD3a (anno) {
      this.calculatePPD3(anno)
    },
    startPPD3b (anno) {
      this.calculatePPD3(anno)
    },
    startPPD4 (anno) {
      this.calculatePPD(anno)
    },
    startPPD4a (anno) {
      this.calculatePPD4(anno)
    },
    startPPD4b (anno) {
      this.calculatePPD4(anno)
    },
    startPPD5 (anno) {
      this.calculatePPD(anno)
    },
    startPPD5a (anno) {
      this.calculatePPD5(anno)
    },
    startPPD5b (anno) {
      this.calculatePPD5(anno)
    },
    startPPD6 (anno) {
      this.calculatePPD(anno)
    },
    startPPD6a (anno) {
      this.calculatePPD6(anno)
    },
    startPPD6b (anno) {
      this.calculatePPD6(anno)
    },
    startPPD7 (anno) {
      this.calculatePPD(anno)
    },
    startPPD7a (anno) {
      this.calculatePPD7(anno)
    },
    startPPD7b (anno) {
      this.calculatePPD7(anno)
    },
    startPPD8 (anno) {
      this.calculatePPD(anno)
    },
    startPPD8a (anno) {
      this.calculatePPD8(anno)
    },
    startPPD8b (anno) {
      this.calculatePPD8(anno)
    },
    startPPD9 (anno) {
      this.calculatePPD(anno)
    },
    startPPD9a (anno) {
      this.calculatePPD9(anno)
    },
    startPPD9b (anno) {
      this.calculatePPD9(anno)
    },
    startPPDA (anno) {
      this.calculatePPD(anno)
    },
    startPPDAa (anno) {
      this.calculatePPDA(anno)
    },
    startPPDAb (anno) {
      this.calculatePPDA(anno)
    },
    startPPDB (anno) {
      this.calculatePPD(anno)
    },
    startPPDBa (anno) {
      this.calculatePPDB(anno)
    },
    startPPDBb (anno) {
      this.calculatePPDB(anno)
    },
    startPPDC (anno) {
      this.calculatePPD(anno)
    },
    startPPDCa (anno) {
      this.calculatePPDC(anno)
    },
    startPPDCb (anno) {
      this.calculatePPDC(anno)
    },
    startPPDD (anno) {
      this.calculatePPD(anno)
    },
    startPPDDa (anno) {
      this.calculatePPDD(anno)
    },
    startPPDDb (anno) {
      this.calculatePPDD(anno)
    },
    startEA (anno) {
      this.calculateE(anno)
      this.calculateML(anno)
    },
    startEA1 (anno) {
      this.calculateEA(anno)
    },
    startEA2 (anno) {
      this.calculateEA(anno)
    },
    startEA3 (anno) {
      this.calculateEA(anno)
    },
    startEA4 (anno) {
      this.calculateEA(anno)
    },
    startEA5 (anno) {
      this.calculateEA(anno)
    },
    startEA51 (anno) {
      this.calculateEA5(anno)
    },
    startEA52 (anno) {
      this.calculateEA5(anno)
    },
    startEB (anno) {
      this.calculateE(anno)
    },
    startEB1 (anno) {
      this.calculateEB(anno)
      this.calculateML(anno)
    },
    startEB1 (anno) {
      this.calculateEB(anno)
    },
    startML (anno) {
      this.calculateEBITDA(anno)
    },
    startEB2 (anno) {
      this.calculateEB(anno)
    },
    startEB3 (anno) {
      this.calculateEB(anno)
    },
    startEB4 (anno) {
      this.calculateEB(anno)
    },
    startEB41 (anno) {
      this.calculateEB4(anno)
    },
    startEB42 (anno) {
      this.calculateEB4(anno)
    },
    startEB43 (anno) {
      this.calculateEB4(anno)
    },
    startEB44 (anno) {
      this.calculateEB4(anno)
    },
    startEB45 (anno) {
      this.calculateEB4(anno)
    },
    startEB5 (anno) {
      this.calculateEB(anno)
    },
    startEB51 (anno) {
      this.calculateEB5(anno)
    },
    startEB52 (anno) {
      this.calculateEB5(anno)
    },
    startEB53 (anno) {
      this.calculateEB5(anno)
    },
    startEB54 (anno) {
      this.calculateEB5(anno)
    },
    startEB6 (anno) {
      this.calculateEB(anno)
    },
    startEB7 (anno) {
      this.calculateEB(anno)
    },
    startEB8 (anno) {
      this.calculateEB(anno)
    },
    startEB9 (anno) {
      this.calculateEB(anno)
    },
    startExB (anno) {
      this.calculateE(anno)
    },
    startEC (anno) {
      this.calculateE(anno)
    },
    startEC1 (anno) {
      this.calculateEC(anno)
    },
    startEC11 (anno) {
      this.calculateEC1(anno)
    },
    startEC12 (anno) {
      this.calculateEC1(anno)
    },
    startEC13 (anno) {
      this.calculateEC1(anno)
    },
    startEC2 (anno) {
      this.calculateEC(anno)
    },
    startEC21 (anno) {
      this.calculateEC2(anno)
    },
    startEC211 (anno) {
      this.calculateEC21(anno)
    },
    startEC212 (anno) {
      this.calculateEC21(anno)
    },
    startEC213 (anno) {
      this.calculateEC21(anno)
    },
    startEC215 (anno) {
      this.calculateEC21(anno)
    },
    startEC22 (anno) {
      this.calculateEC2(anno)
    },
    startEC23 (anno) {
      this.calculateEC2(anno)
    },
    startEC24 (anno) {
      this.calculateEC2(anno)
    },
    startEC241 (anno) {
      this.calculateEC24(anno)
    },
    startEC242 (anno) {
      this.calculateEC24(anno)
    },
    startEC244 (anno) {
      this.calculateEC24(anno)
    },
    startEC245 (anno) {
      this.calculateEC24(anno)
    },
    startEC3 (anno) {
      this.calculateEC(anno)
    },
    startEC31 (anno) {
      this.calculateEC3(anno)
    },
    startEC32 (anno) {
      this.calculateEC3(anno)
    },
    startEC33 (anno) {
      this.calculateEC3(anno)
    },
    startEC35 (anno) {
      this.calculateEC3(anno)
    },
    startEC4 (anno) {
      this.calculateEC(anno)
    },
    startED (anno) {
      this.calculateE(anno)
    },
    startED1 (anno) {
      this.calculateED(anno)
    },
    startED11 (anno) {
      this.calculateED1(anno)
    },
    startED111 (anno) {
      this.calculateED11(anno)
    },
    startED112 (anno) {
      this.calculateED11(anno)
    },
    startED12 (anno) {
      this.calculateED1(anno)
    },
    startED13 (anno) {
      this.calculateED1(anno)
    },
    startED2 (anno) {
      this.calculateED(anno)
    },
    startED21 (anno) {
      this.calculateED2(anno)
    },
    startED211 (anno) {
      this.calculateED21(anno)
    },
    startED212 (anno) {
      this.calculateED21(anno)
    },
    startED22 (anno) {
      this.calculateED2(anno)
    },
    startED23 (anno) {
      this.calculateED2(anno)
    },

    startEE (anno) {
      this.startE(anno)
    },
    startEE1 (anno) {
      this.startEE(anno)
    },
    startEE11 (anno) {
      this.startEE1(anno)
    },
    startEE12 (anno) {
      this.startEE1(anno)
    },
    startEE121 (anno) {
      this.startEE12(anno)
    },
    startEE122 (anno) {
      this.startEE12(anno)
    },
    startEE2 (anno) {
      this.startEE(anno)
    },
    startEE21 (anno) {
      this.startEE2(anno)
    },
    startEE22 (anno) {
      this.startEE2(anno)
    },
    startEE23 (anno) {
      this.startEE2(anno)
    },
    startEF (anno) {
      this.startE(anno)
    },
    startEF1 (anno) {
      this.startEF(anno)
    },
    startEF11 (anno) {
      this.startEF1(anno)
    },
    startEF12 (anno) {
      this.startEF1(anno)
    },
    startEF13 (anno) {
      this.startEF1(anno)
    },
    startEF14 (anno) {
      this.startEF1(anno)
    },
    startEF2 (anno) {
      this.startEF(anno)
    },
    startEG (anno) {
      this.startEH(anno)
    },
    startEH (anno) {
      this.startE(anno)
    },
    calculatePA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PA].values[indexAnno].value = this.row[this.PAA].values[indexAnno].value + this.row[this.PAB].values[indexAnno].value + this.row[this.PAC].values[indexAnno].value + this.row[this.PAD].values[indexAnno].value
    },
    calculatePAA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAA].values[indexAnno].value = this.row[this.PAA1].values[indexAnno].value + this.row[this.PAA2].values[indexAnno].value
      this.startPAA(anno)
    },
    calculatePAB (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB].values[indexAnno].value = this.row[this.PAB1].values[indexAnno].value + this.row[this.PAB2].values[indexAnno].value + this.row[this.PAB3].values[indexAnno].value
      this.startPAB(anno)
    },
    calculatePAB1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB1].values[indexAnno].value = this.row[this.PAB11].values[indexAnno].value + this.row[this.PAB12].values[indexAnno].value + this.row[this.PAB13].values[indexAnno].value + this.row[this.PAB14].values[indexAnno].value + this.row[this.PAB15].values[indexAnno].value + this.row[this.PAB16].values[indexAnno].value + this.row[this.PAB17].values[indexAnno].value
      this.startPAB1(anno)
    },
    calculatePAB11 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB11].values[indexAnno].value = this.row[this.PAB11A].values[indexAnno].value - this.row[this.PAB11B].values[indexAnno].value - this.row[this.PAB11C].values[indexAnno].value
      this.startPAB11(anno)
    },
    calculatePAB12 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB12].values[indexAnno].value = this.row[this.PAB12A].values[indexAnno].value - this.row[this.PAB12B].values[indexAnno].value - this.row[this.PAB12C].values[indexAnno].value
      this.startPAB12(anno)
    },
    calculatePAB13 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB13].values[indexAnno].value = this.row[this.PAB13A].values[indexAnno].value - this.row[this.PAB13B].values[indexAnno].value - this.row[this.PAB13C].values[indexAnno].value
      this.startPAB13(anno)
    },
    calculatePAB14 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB14].values[indexAnno].value = this.row[this.PAB14A].values[indexAnno].value - this.row[this.PAB14B].values[indexAnno].value - this.row[this.PAB14C].values[indexAnno].value
      this.startPAB14(anno)
    },
    calculatePAB15 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB15].values[indexAnno].value = this.row[this.PAB15A].values[indexAnno].value - this.row[this.PAB15B].values[indexAnno].value - this.row[this.PAB15C].values[indexAnno].value
      this.startPAB15(anno)
    },
    calculatePAB17 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB17].values[indexAnno].value = this.row[this.PAB17A].values[indexAnno].value - this.row[this.PAB17B].values[indexAnno].value - this.row[this.PAB17C].values[indexAnno].value
      this.startPAB17(anno)
    },
    calculatePAB2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB2].values[indexAnno].value = this.row[this.PAB21].values[indexAnno].value + this.row[this.PAB22].values[indexAnno].value + this.row[this.PAB23].values[indexAnno].value + this.row[this.PAB24].values[indexAnno].value + this.row[this.PAB25].values[indexAnno].value + this.row[this.PAB26].values[indexAnno].value
      this.startPAB2(anno)
    },
    calculatePAB21 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB21].values[indexAnno].value = this.row[this.PAB21A].values[indexAnno].value + this.row[this.PAB21B].values[indexAnno].value + this.row[this.PAB21C].values[indexAnno].value
      this.startPAB21(anno)
    },
    calculatePAB22 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB22].values[indexAnno].value = this.row[this.PAB22A].values[indexAnno].value + this.row[this.PAB22B].values[indexAnno].value + this.row[this.PAB22C].values[indexAnno].value
      this.startPAB22(anno)
    },
    calculatePAB23 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB23].values[indexAnno].value = this.row[this.PAB23A].values[indexAnno].value - this.row[this.PAB23B].values[indexAnno].value - this.row[this.PAB23C].values[indexAnno].value
      this.startPAB23(anno)
    },
    calculatePAB24 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB24].values[indexAnno].value = this.row[this.PAB24A].values[indexAnno].value - this.row[this.PAB24B].values[indexAnno].value - this.row[this.PAB24C].values[indexAnno].value
      this.startPAB24(anno)
    },
    calculatePAB26 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB26].values[indexAnno].value = this.row[this.PAB26A].values[indexAnno].value - this.row[this.PAB26B].values[indexAnno].value - this.row[this.PAB26C].values[indexAnno].value
      this.startPAB26(anno)
    },
    calculatePAB3 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB3].values[indexAnno].value = this.row[this.PAB31].values[indexAnno].value + this.row[this.PAB32].values[indexAnno].value + this.row[this.PAB33].values[indexAnno].value + this.row[this.PAB34].values[indexAnno].value
      this.startPAB3(anno)
    },
    calculatePAB31 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB31].values[indexAnno].value = this.row[this.PAB31A].values[indexAnno].value + this.row[this.PAB31B].values[indexAnno].value + this.row[this.PAB31C].values[indexAnno].value + this.row[this.PAB31D].values[indexAnno].value
      this.startPAB31(anno)
    },
    calculatePAB32 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB32].values[indexAnno].value = this.row[this.PAB32A].values[indexAnno].value + this.row[this.PAB32B].values[indexAnno].value + this.row[this.PAB32C].values[indexAnno].value + this.row[this.PAB32D].values[indexAnno].value
      this.startPAB32(anno)
    },
    calculatePAB32A (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB32A].values[indexAnno].value = this.row[this.PAB32A1].values[indexAnno].value + this.row[this.PAB32A2].values[indexAnno].value
      this.startPAB32A(anno)
    },
    calculatePAB32B (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB32B].values[indexAnno].value = this.row[this.PAB32B1].values[indexAnno].value + this.row[this.PAB32B2].values[indexAnno].value
      this.startPAB32B(anno)
    },
    calculatePAB32C (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB32C].values[indexAnno].value = this.row[this.PAB32C1].values[indexAnno].value + this.row[this.PAB32C2].values[indexAnno].value
      this.startPAB32C(anno)
    },
    calculatePAB32D (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB32D].values[indexAnno].value = this.row[this.PAB32D1].values[indexAnno].value + this.row[this.PAB32D2].values[indexAnno].value
      this.startPAB32D(anno)
    },
    calculatePAB34 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAB34].values[indexAnno].value = this.row[this.PAB34A].values[indexAnno].value + this.row[this.PAB34B].values[indexAnno].value
      this.startPAB34(anno)
    },
    calculatePAC (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC].values[indexAnno].value = this.row[this.PAC1].values[indexAnno].value + this.row[this.PAC2].values[indexAnno].value + this.row[this.PAC3].values[indexAnno].value + this.row[this.PAC4].values[indexAnno].value
      this.startPAC(anno)
    },
    calculatePAC1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC1].values[indexAnno].value = this.row[this.PAC11].values[indexAnno].value + this.row[this.PAC12].values[indexAnno].value + this.row[this.PAC13].values[indexAnno].value + this.row[this.PAC14].values[indexAnno].value + this.row[this.PAC15].values[indexAnno].value
      this.startPAC1(anno)
    },
    calculatePAC2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC2].values[indexAnno].value = this.row[this.PAC21].values[indexAnno].value + this.row[this.PAC22].values[indexAnno].value + this.row[this.PAC23].values[indexAnno].value + this.row[this.PAC24].values[indexAnno].value + this.row[this.PAC2B].values[indexAnno].value + this.row[this.PAC2T].values[indexAnno].value + this.row[this.PAC25].values[indexAnno].value
      this.startPAC2(anno)
    },
    calculatePAC21 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC21].values[indexAnno].value = this.row[this.PAC21A].values[indexAnno].value + this.row[this.PAC21B].values[indexAnno].value
      this.startPAC21(anno)
    },
    calculatePAC22 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC22].values[indexAnno].value = this.row[this.PAC22A].values[indexAnno].value + this.row[this.PAC22B].values[indexAnno].value
      this.startPAC22(anno)
    },
    calculatePAC23 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC23].values[indexAnno].value = this.row[this.PAC23A].values[indexAnno].value + this.row[this.PAC23B].values[indexAnno].value
      this.startPAC23(anno)
    },
    calculatePAC24 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC24].values[indexAnno].value = this.row[this.PAC24A].values[indexAnno].value + this.row[this.PAC24B].values[indexAnno].value
      this.startPAC24(anno)
    },
    calculatePAC2B (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC2B].values[indexAnno].value = this.row[this.PAC2BA].values[indexAnno].value + this.row[this.PAC2BB].values[indexAnno].value
      this.startPAC2B(anno)
    },
    calculatePAC2T (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC2T].values[indexAnno].value = this.row[this.PAC2TA].values[indexAnno].value + this.row[this.PAC2TB].values[indexAnno].value
      this.startPAC2T(anno)
    },
    calculatePAC25 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC25].values[indexAnno].value = this.row[this.PAC25A].values[indexAnno].value + this.row[this.PAC25B].values[indexAnno].value
      this.startPAC25(anno)
    },
    calculatePAC3 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC3].values[indexAnno].value = this.row[this.PAC31].values[indexAnno].value + this.row[this.PAC32].values[indexAnno].value + this.row[this.PAC33].values[indexAnno].value + this.row[this.PAC34].values[indexAnno].value + this.row[this.PAC35].values[indexAnno].value + this.row[this.PAC36].values[indexAnno].value
      this.startPAC3(anno)
    },
    calculatePAC35 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC35].values[indexAnno].value = this.row[this.PAC35A].values[indexAnno].value + this.row[this.PAC35B].values[indexAnno].value
      this.startPAC35(anno)
    },
    calculatePAC4 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAC4].values[indexAnno].value = this.row[this.PAC41].values[indexAnno].value + this.row[this.PAC42].values[indexAnno].value + this.row[this.PAC43].values[indexAnno].value
      this.startPAC4(anno)
    },
    calculatePAD (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PAD].values[indexAnno].value = this.row[this.PAD1].values[indexAnno].value + this.row[this.PAD2].values[indexAnno].value
      this.startPAD(anno)
    },
    calculatePP (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PP].values[indexAnno].value = this.row[this.PPA].values[indexAnno].value + this.row[this.PPB].values[indexAnno].value + this.row[this.PPC].values[indexAnno].value + this.row[this.PPC].values[indexAnno].value + this.row[this.PPD].values[indexAnno].value + this.row[this.PPE].values[indexAnno].value
      this.startPP(anno)
    },
    calculatePPA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPA].values[indexAnno].value = this.row[this.PPA1].values[indexAnno].value + this.row[this.PPA2].values[indexAnno].value + this.row[this.PPA3].values[indexAnno].value + this.row[this.PPA4].values[indexAnno].value + this.row[this.PPA5].values[indexAnno].value + this.row[this.PPA6].values[indexAnno].value + this.row[this.PPA7].values[indexAnno].value + this.row[this.PPA8].values[indexAnno].value + this.row[this.PPA9].values[indexAnno].value + this.row[this.PPAA].values[indexAnno].value
      this.startPPA(anno)
    },
    calculatePPA7 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPA7].values[indexAnno].value = this.row[this.PPA7A].values[indexAnno].value + this.row[this.PPA7N].values[indexAnno].value + this.row[this.PPA7O].values[indexAnno].value + this.row[this.PPA7P].values[indexAnno].value + this.row[this.PPA7Q].values[indexAnno].value + this.row[this.PPA7R].values[indexAnno].value + this.row[this.PPA7S].values[indexAnno].value + this.row[this.PPA7B].values[indexAnno].value + this.row[this.PPA7T].values[indexAnno].value + this.row[this.PPA7U].values[indexAnno].value + this.row[this.PPA7V].values[indexAnno].value + this.row[this.PPA7W].values[indexAnno].value + this.row[this.PPA7J].values[indexAnno].value + this.row[this.PPA7L].values[indexAnno].value + this.row[this.PPA7M].values[indexAnno].value
      this.startPPA7(anno)
    },
    calculatePPA7J (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPA7J].values[indexAnno].value = this.row[this.PPA7J1].values[indexAnno].value + this.row[this.PPA7J2].values[indexAnno].value
      this.startPPA7J(anno)
    },
    calculatePPB (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPB].values[indexAnno].value = this.row[this.PPB1].values[indexAnno].value + this.row[this.PPB2].values[indexAnno].value + this.row[this.PPB3].values[indexAnno].value + this.row[this.PPB4].values[indexAnno].value
      this.startPPB(anno)
    },
    calculatePPD (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD].values[indexAnno].value = this.row[this.PPD1].values[indexAnno].value + this.row[this.PPD2].values[indexAnno].value + this.row[this.PPDF].values[indexAnno].value + this.row[this.PPD3].values[indexAnno].value + this.row[this.PPD4].values[indexAnno].value + this.row[this.PPD5].values[indexAnno].value + this.row[this.PPD6].values[indexAnno].value + this.row[this.PPD7].values[indexAnno].value + this.row[this.PPD8].values[indexAnno].value + this.row[this.PPD9].values[indexAnno].value + this.row[this.PPDA].values[indexAnno].value + this.row[this.PPDB].values[indexAnno].value + this.row[this.PPDC].values[indexAnno].value + this.row[this.PPDD].values[indexAnno].value
      this.startPPD(anno)
    },
    calculatePPD1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD1].values[indexAnno].value = this.row[this.PPD1A].values[indexAnno].value + this.row[this.PPD1B].values[indexAnno].value
      this.startPPD1(anno)
    },
    calculatePPD2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD2].values[indexAnno].value = this.row[this.PPD2A].values[indexAnno].value + this.row[this.PPD2B].values[indexAnno].value
      this.startPPD2(anno)
    },
    calculatePPDF (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPDF].values[indexAnno].value = this.row[this.PPDFA].values[indexAnno].value + this.row[this.PPDFB].values[indexAnno].value
      this.startPPDF(anno)
    },
    calculatePPD3 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD3].values[indexAnno].value = this.row[this.PPD3A].values[indexAnno].value + this.row[this.PPD3B].values[indexAnno].value
      this.startPPD3(anno)
    },
    calculatePPD4 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD4].values[indexAnno].value = this.row[this.PPD4A].values[indexAnno].value + this.row[this.PPD4B].values[indexAnno].value
      this.startPPD4(anno)
    },
    calculatePPD5 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD5].values[indexAnno].value = this.row[this.PPD5A].values[indexAnno].value + this.row[this.PPD5B].values[indexAnno].value
      this.startPPD5(anno)
    },
    calculatePPD6 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD6].values[indexAnno].value = this.row[this.PPD6A].values[indexAnno].value + this.row[this.PPD6B].values[indexAnno].value
      this.startPPD6(anno)
    },
    calculatePPD7 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD7].values[indexAnno].value = this.row[this.PPD7A].values[indexAnno].value + this.row[this.PPD7B].values[indexAnno].value
      this.startPPD7(anno)
    },
    calculatePPD8 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD8].values[indexAnno].value = this.row[this.PPD8A].values[indexAnno].value + this.row[this.PPD8B].values[indexAnno].value
      this.startPPD8(anno)
    },
    calculatePPD9 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPD9].values[indexAnno].value = this.row[this.PPD9A].values[indexAnno].value + this.row[this.PPD9B].values[indexAnno].value
      this.startPPD9(anno)
    },
    calculatePPDA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPDA].values[indexAnno].value = this.row[this.PPDAA].values[indexAnno].value + this.row[this.PPDAB].values[indexAnno].value
      this.startPPDA(anno)
    },
    calculatePPDB (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPDB].values[indexAnno].value = this.row[this.PPDBA].values[indexAnno].value + this.row[this.PPDBB].values[indexAnno].value
      this.startPPDB(anno)
    },
    calculatePPDC (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPDC].values[indexAnno].value = this.row[this.PPDCA].values[indexAnno].value + this.row[this.PPDCB].values[indexAnno].value
      this.startPPDC(anno)
    },
    calculatePPDD (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.PPDD].values[indexAnno].value = this.row[this.PPDDA].values[indexAnno].value + this.row[this.PPDDB].values[indexAnno].value
      this.startPPDD(anno)
    },
    /* calculateE(anno) {
      let indexAnno = 2019 - parseInt(anno);
      this.row[this.E].values[indexAnno].value = ;
    }, */
    calculateEA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EA].values[indexAnno].value = this.row[this.EA1].values[indexAnno].value + this.row[this.EA2].values[indexAnno].value + this.row[this.EA3].values[indexAnno].value + this.row[this.EA4].values[indexAnno].value + this.row[this.EA5].values[indexAnno].value
      this.startEA(anno)
    },
    calculateEA5 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EA5].values[indexAnno].value = this.row[this.EA51].values[indexAnno].value + this.row[this.EA52].values[indexAnno].value
      this.startEA5(anno)
    },
    calculateEB (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EB].values[indexAnno].value = this.row[this.EB1].values[indexAnno].value + this.row[this.EB2].values[indexAnno].value + this.row[this.EB3].values[indexAnno].value + this.row[this.EB4].values[indexAnno].value + this.row[this.EB5].values[indexAnno].value + this.row[this.EB6].values[indexAnno].value + this.row[this.EB7].values[indexAnno].value + this.row[this.EB8].values[indexAnno].value + this.row[this.EB9].values[indexAnno].value
      this.startEB(anno)
    },
    calculateML (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.ML].values[indexAnno].value = this.row[this.EA].values[indexAnno].value - this.row[this.EB1].values[indexAnno].value
      this.startML(anno)
    },
    calculateEB4 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EB4].values[indexAnno].value = this.row[this.EB41].values[indexAnno].value + this.row[this.EB42].values[indexAnno].value + this.row[this.EB43].values[indexAnno].value + this.row[this.EB44].values[indexAnno].value + this.row[this.EB45].values[indexAnno].value
      this.startEB4(anno)
    },
    calculateEBITDA (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EBITDA].values[indexAnno].value = this.row[this.ML].values[indexAnno].value - this.row[this.EB2].values[indexAnno].value - this.row[this.EB3].values[indexAnno].value - this.row[this.EB4].values[indexAnno].value
      this.startEBITDA(anno)
    },
    calculateEB5 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EB5].values[indexAnno].value = this.row[this.EB51].values[indexAnno].value + this.row[this.EB52].values[indexAnno].value + this.row[this.EB53].values[indexAnno].value + this.row[this.EB54].values[indexAnno].value
      this.startEB5(anno)
    },
    calculateExB (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.ExB].values[indexAnno].value = this.row[this.EA].values[indexAnno].value - this.row[this.EB].values[indexAnno].value
    },
    calculateEC (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC].values[indexAnno].value = this.row[this.EC1].values[indexAnno].value + this.row[this.EC2].values[indexAnno].value - this.row[this.EC3].values[indexAnno].value - this.row[this.EC4].values[indexAnno].value
    },
    calculateEC1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC1].values[indexAnno].value = this.row[this.EC11].values[indexAnno].value + this.row[this.EC12].values[indexAnno].value + this.row[this.EC13].values[indexAnno].value
    },
    calculateEC2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC2].values[indexAnno].value = this.row[this.EC21].values[indexAnno].value + this.row[this.EC22].values[indexAnno].value + this.row[this.EC23].values[indexAnno].value + this.row[this.EC24].values[indexAnno].value
    },
    calculateEC21 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC21].values[indexAnno].value = this.row[this.EC211].values[indexAnno].value + this.row[this.EC212].values[indexAnno].value + this.row[this.EC213].values[indexAnno].value + this.row[this.EC215].values[indexAnno].value
    },
    /* CAMBIARE LA SOMMA DI EC21 (TOGLIERE EC214) */calculateEC24 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC24].values[indexAnno].value = this.row[this.EC241].values[indexAnno].value + this.row[this.EC242].values[indexAnno].value + this.row[this.EC244].values[indexAnno].value + this.row[this.EC245].values[indexAnno].value
    },
    calculateEC3 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EC3].values[indexAnno].value = this.row[this.EC31].values[indexAnno].value + this.row[this.EC32].values[indexAnno].value + this.row[this.EC33].values[indexAnno].value + this.row[this.EC35].values[indexAnno].value
    },

    calculateED (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.ED].values[indexAnno].value = this.row[this.ED1].values[indexAnno].value + this.row[this.ED2].values[indexAnno].value
      startED(anno)
    },

    calculateED1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.ED1].values[indexAnno].value = this.row[this.ED11].values[indexAnno].value + this.row[this.ED12].values[indexAnno].value + this.row[this.ED13].values[indexAnno].value
      startED1(anno)
    },

    calculateED11 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.ED11].values[indexAnno].value = this.row[this.ED111].values[indexAnno].value + this.row[this.ED112].values[indexAnno].value
    },

    calculateEE (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EE].values[indexAnno].value = this.row[this.EE1].values[indexAnno].value - this.row[this.EE2].values[indexAnno].value
    },
    calculateEE1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EE1].values[indexAnno].value = this.row[this.EE11].values[indexAnno].value + this.row[this.EE12].values[indexAnno].value
    },
    calculateEE12 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EE12].values[indexAnno].value = this.row[this.EE121].values[indexAnno].value + this.row[this.EE122].values[indexAnno].value
    },
    calculateEE2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EE2].values[indexAnno].value = this.row[this.EE21].values[indexAnno].value + this.row[this.EE22].values[indexAnno].value + this.row[this.EE23].values[indexAnno].value
    },
    // E=B è DA CAMBIARE
    calculateEF (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EF].values[indexAnno].value = this.row[this.E = B].values[indexAnno].value + this.row[this.EC].values[indexAnno].value + this.row[this.ED].values[indexAnno].value + this.row[this.EE].values[indexAnno].value
    },
    calculateEF1 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EF1].values[indexAnno].value = (this.row[this.EF].values[indexAnno].value * 28) / 100
    },
    calculateEF2 (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EF2].values[indexAnno].value = this.row[this.EF].values[indexAnno].value - this.row[this.EF1].values[indexAnno].value
    },
    calculateEH (anno) {
      let indexAnno = 2019 - parseInt(anno)
      this.row[this.EH].values[indexAnno].value = this.row[this.EF2].values[indexAnno].value - this.row[this.EG].values[indexAnno].value
    }
  }
}
</script>

<style lang="scss" scoped>
.inizio {
    background-color: yellow;
    font-weight: bold;
}
.Lettera {
    background-color: #00C0FF  ;
}
.LetteraNumero {
    background-color: #42FFFF ;
}
.LetteraNumeroNumero {
    background-color: #80FFFF ;
}
.LetteraNumeroNumeroLettera {
    background-color: #C1FFFF;
}
.LetteraNumeroNumeroLetteraNumero {
    background-color: #E0FFFF ;
}
.Colorato {
    background-color: #A2A2A2 ;
}
</style>
