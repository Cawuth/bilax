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
        { desc: "    Crediti verso soci non ancora richiamati", cod: "PA.A2", values: [{anno: 2019, value: 0}]},
        { desc: "B) Immobilizzazioni, con separata indicazione di quelle concesse in locazione finanziaria", cod: "PA.B", values: [{anno: 2019, value: 0}]},
        { desc: "    I. Immateriali", cod: "PA.B1", values: [{anno: 2019, value: 0}]},
        { desc: "        1) Costi di impianto e di ampliamento", cod: "PA.B11", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B11a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B11b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B11c", values: [{anno: 2019, value: 0}]},
        { desc: "        2) Costi di ricerca, di sviluppo e di pubblicità", cod: "PA.B12", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B12a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B12b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B12c", values: [{anno: 2019, value: 0}]},
        { desc: "        3) Diritti di brevetto industriale e di utilizzo di opere dell'ingegno", cod: "PA.B13", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B13a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B13b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B13c", values: [{anno: 2019, value: 0}]},
        { desc: "        4) Concessioni, licenze, marchi e diritti simili", cod: "PA.B14", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B14a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B14b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B14c", values: [{anno: 2019, value: 0}]},
        { desc: "        Differenza da consolidamento", cod: "PA.B18", values: [{anno: 2019, value: 0}]},
        { desc: "        5) Avviamento", cod: "PA.B15", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B15a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B15b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B15c", values: [{anno: 2019, value: 0}]},
        { desc: "        6) Immobilizzazioni immateriali in corso e acconti", cod: "PA.B16", values: [{anno: 2019, value: 0}]},
        { desc: "        7) Altre", cod: "PA.B17", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B17a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B17b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B17c", values: [{anno: 2019, value: 0}]},
        { desc: "    II. Materiali", cod: "PA.B2", values: [{anno: 2019, value: 0}]},
        { desc: "        1) Terreni e fabbricati", cod: "PA.B21", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B21a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B21b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B21c", values: [{anno: 2019, value: 0}]},
        { desc: "        2) Impianti e macchinario", cod: "PA.B22", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B22a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B22b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B22c", values: [{anno: 2019, value: 0}]},
        { desc: "        3) Attrezzature industriali e commerciali", cod: "PA.B23", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B23a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B23b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B23c", values: [{anno: 2019, value: 0}]},
        { desc: "        4) Altri beni", cod: "PA.B24", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B24a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B24b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B24c", values: [{anno: 2019, value: 0}]},
        { desc: "        5) Immobilizzazioni in corso e acconti", cod: "PA.B25", values: [{anno: 2019, value: 0}]},
        { desc: "        6) Concesse in Locazione Finanziaria", cod: "PA.B26", values: [{anno: 2019, value: 0}]},
        { desc: "            Costo storico", cod: "PA.B26a", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo ammortamenti)", cod: "PA.B26b", values: [{anno: 2019, value: 0}]},
        { desc: "            (Fondo svalutazioni)", cod: "PA.B26c", values: [{anno: 2019, value: 0}]},
        { desc: "    III. Finanziarie", cod: "PA.B3", values: [{anno: 2019, value: 0}]},
        { desc: "        1) Partecipazioni in:", cod: "PA.B31", values: [{anno: 2019, value: 0}]},
        { desc: "            a) imprese controllate", cod: "PA.B31a", values: [{anno: 2019, value: 0}]},
        { desc: "            b) imprese collegate", cod: "PA.B31b", values: [{anno: 2019, value: 0}]},
        { desc: "            c) imprese controllanti", cod: "PA.B31c", values: [{anno: 2019, value: 0}]},
        { desc: "            d) altre imprese", cod: "PA.B31d", values: [{anno: 2019, value: 0}]},
        { desc: "        2) Crediti", cod: "PA.B32", values: [{anno: 2019, value: 0}]},
        { desc: "            a) verso imprese controllate", cod: "PA.B32a", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.B32a1", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.B32a2", values: [{anno: 2019, value: 0}]},
        { desc: "            b) verso imprese collegate", cod: "PA.B32b", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.B32b1", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.B32b2", values: [{anno: 2019, value: 0}]},
        { desc: "            c) verso imprese controllanti", cod: "PA.B32c", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.B32c1", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.B32c2", values: [{anno: 2019, value: 0}]},
        { desc: "            d) verso altri", cod: "PA.B32d", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.B32d1", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.B32d2", values: [{anno: 2019, value: 0}]},
        { desc: "        3) Altri titoli", cod: "PA.B33", values: [{anno: 2019, value: 0}]},
        { desc: "        4) Azioni proprie", cod: "PA.B34", values: [{anno: 2019, value: 0}]},
        { desc: "            Valore nominale complessivo", cod: "PA.B34a", values: [{anno: 2019, value: 0}]},
        { desc: "            Differenza dal valore nominale", cod: "PA.B34b", values: [{anno: 2019, value: 0}]},
        { desc: "C) Attivo circolante", cod: "PA.C", values: [{anno: 2019, value: 0}]},
        { desc: "    I. Rimanenze", cod: "PA.C1", values: [{anno: 2019, value: 0}]},
        { desc: "        1) Materie prime, sussidiarie e di consumo", cod: "PA.C11", values: [{anno: 2019, value: 0}]},
        { desc: "        2) Prodotti in corso di lavorazione e semilavorati", cod: "PA.C12", values: [{anno: 2019, value: 0}]},
        { desc: "        3) Lavori in corso su ordinazione", cod: "PA.C13", values: [{anno: 2019, value: 0}]},
        { desc: "        4) Prodotti finiti e merci", cod: "PA.C14", values: [{anno: 2019, value: 0}]},
        { desc: "        5) Acconti", cod: "PA.C15", values: [{anno: 2019, value: 0}]},
        { desc: "    II. Crediti", cod: "PA.C2", values: [{anno: 2019, value: 0}]},
        { desc: "        1) verso clienti", cod: "PA.C21", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.C21a", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.C21b", values: [{anno: 2019, value: 0}]},
        { desc: "        2) verso imprese controllate", cod: "PA.C22", values: [{anno: 2019, value: 0}]},
        { desc: "                - entro 12 mesi", cod: "PA.C22a", values: [{anno: 2019, value: 0}]},
        { desc: "                - oltre 12 mesi", cod: "PA.C22b", values: [{anno: 2019, value: 0}]},
        { desc: "        3) verso imprese collegate", cod: "PA.C23", values: [{anno: 2019, value: 0}]},
        { desc: "           - entro 12 mesi", cod: "PA.C23a", values: [{anno: 2019, value: 0}]},
        { desc: "           - oltre 12 mesi", cod: "PA.C23b", values: [{anno: 2019, value: 0}]},
        { desc: "       4) verso controllanti", cod: "PA.C24", values: [{anno: 2019, value: 0}]},
        { desc: "           - entro 12 mesi", cod: "PA.C24a", values: [{anno: 2019, value: 0}]},
        { desc: "           - oltre 12 mesi", cod: "PA.C24b", values: [{anno: 2019, value: 0}]},
        { desc: "       4-bis) crediti tributari", cod: "PA.C2B", values: [{anno: 2019, value: 0}]},
        { desc: "           - entro 12 mesi", cod: "PA.C2Ba", values: [{anno: 2019, value: 0}]},
        { desc: "           - oltre 12 mesi", cod: "PA.C2Bb", values: [{anno: 2019, value: 0}]},
        { desc: "       4-ter) Imposte anticipate", cod: "PA.C2T", values: [{anno: 2019, value: 0}]},
        { desc: "           - entro 12 mesi", cod: "PA.C2Ta", values: [{anno: 2019, value: 0}]},
        { desc: "           - oltre 12 mesi", cod: "PA.C2Tb", values: [{anno: 2019, value: 0}]},
        { desc: "       5) verso altri", cod: "PA.C25", values: [{anno: 2019, value: 0}]},
        { desc: "           - entro 12 mesi", cod: "PA.C25a", values: [{anno: 2019, value: 0}]},
        { desc: "           - oltre 12 mesi", cod: "PA.C25b", values: [{anno: 2019, value: 0}]},
        { desc: "   III. Attività finanziarie che non costituiscono immobilizzazioni", cod: "PA.C3", values: [{anno: 2019, value: 0}]},
        { desc: "       1) Partecipazioni in imprese controllate", cod: "PA.C31", values: [{anno: 2019, value: 0}]},
        { desc: "       2) Partecipazioni in imprese collegate", cod: "PA.C32", values: [{anno: 2019, value: 0}]},
        { desc: "       3) Partecipazioni in imprese controllanti", cod: "PA.C33", values: [{anno: 2019, value: 0}]},
        { desc: "       4) Altre partecipazioni", cod: "PA.C34", values: [{anno: 2019, value: 0}]},
        { desc: "       5) Azioni proprie", cod: "PA.C35", values: [{anno: 2019, value: 0}]},
        { desc: "           Valore nominale complessivo", cod: "PA.C35a", values: [{anno: 2019, value: 0}]},
        { desc: "           Differenza dal valore nominale", cod: "PA.C35b", values: [{anno: 2019, value: 0}]},
        { desc: "       6) Altri titoli", cod: "PA.C36", values: [{anno: 2019, value: 0}]},
        { desc: "   IV. Disponibilità liquide", cod: "PA.C4", values: [{anno: 2019, value: 0}]},
        { desc: "       1) Depositi bancari e postali", cod: "PA.C41", values: [{anno: 2019, value: 0}]},
        { desc: "       2) Assegni", cod: "PA.C42", values: [{anno: 2019, value: 0}]},
        { desc: "       3) Denaro e valori in cassa", cod: "PA.C43", values: [{anno: 2019, value: 0}]},
        { desc: "D) Ratei e risconti attivi", cod: "PA.D", values: [{anno: 2019, value: 0}]},
        { desc: "   Disaggio su prestiti", cod: "PA.D1", values: [{anno: 2019, value: 0}]},
        { desc: "   Vari", cod: "PA.D2", values: [{anno: 2019, value: 0}]},
        { desc: "STATO PATRIMONIALE PASSIVO", cod: "PP", values: [{anno: 2019, value: 0}]},
        { desc: "A) Patrimonio netto", cod: "PP.A", values: [{anno: 2019, value: 0}]},
        { desc: "   I. Capitale", cod: "PP.A1", values: [{anno: 2019, value: 0}]},
        { desc: "   II. Riserva da sovrapprezzo delle azioni", cod: "PP.A2", values: [{anno: 2019, value: 0}]},
        { desc: "   III. Riserva di rivalutazione", cod: "PP.A3", values: [{anno: 2019, value: 0}]},
        { desc: "   IV. Riserva legale", cod: "PP.A4", values: [{anno: 2019, value: 0}]},
        { desc: "   V. Riserve statutarie", cod: "PP.A6", values: [{anno: 2019, value: 0}]},
        { desc: "   VI. Riserva per azioni proprie in portafoglio", cod: "PP.A5", values: [{anno: 2019, value: 0}]},
        { desc: "   VII. Altre riserve, distintamente indicate:", cod: "PP.A7", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva straordinaria o facoltativa", cod: "PP.A7a", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva per acquisto azioni proprie", cod: "PP.A7n", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva da deroghe ex art. 2423 Cod.Civ.", cod: "PP.A7o", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva azioni o quote della società controllante", cod: "PP.A7p", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva non distribuibile da rivalutazione delle partecipazioni", cod: "PP.A7q", values: [{anno: 2019, value: 0}]},
        { desc: "       Versamenti in conto aumento di capitale", cod: "PP.A7r", values: [{anno: 2019, value: 0}]},
        { desc: "       Versamenti in conto futuro aumento di capitale", cod: "PP.A7s", values: [{anno: 2019, value: 0}]},
        { desc: "       - Versamenti in conto capitale", cod: "PP.A7b", values: [{anno: 2019, value: 0}]},
        { desc: "       Versamenti a copertura perdite", cod: "PP.A7t", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva da riduzione capitale sociale", cod: "PP.A7u", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva avanzo di fusione", cod: "PP.A7v", values: [{anno: 2019, value: 0}]},
        { desc: "       Riserva per utili su cambi", cod: "PP.A7w", values: [{anno: 2019, value: 0}]},
        { desc: "       Varie altre riserve", cod: "PP.A7j", values: [{anno: 2019, value: 0}]},
        { desc: "           varie altre riserve", cod: "PP.A7j1", values: [{anno: 2019, value: 0}]},
        { desc: "           - da arrotondamento automatico in Euro (2 decimali)", cod: "PP=A7j2", values: [{anno: 2019, value: 0}]},
        { desc: "       - Riserva di conversione da consolidamento estero", cod: "PP.A7l", values: [{anno: 2019, value: 0}]},
        { desc: "       - Riserva di consolidamento", cod: "PP.A7m", values: [{anno: 2019, value: 0}]},
        { desc: "   VIII. Utili (perdite) portati a nuovo", cod: "PP.A8", values: [{anno: 2019, value: 0}]},
        { desc: "   Utile (Perdita) Residua", cod: "PP.A9", values: [{anno: 2019, value: 0}]},
        { desc: "       Utile (perdita) dell'esercizio", cod: "PP=A9a", values: [{anno: 2019, value: 0}]},
        { desc: "       Copertura Parziale Perdita d'Esercizio", cod: "PP.A9b", values: [{anno: 2019, value: 0}]},
        { desc: "   Patrimonio di Terzi", cod: "PP.AA", values: [{anno: 2019, value: 0}]},
        { desc: "       Capitale e riserve di terzi", cod: "PP.AA1", values: [{anno: 2019, value: 0}]},
        { desc: "       Utile (perdita) dell'esercizio di pertinenza di terzi", cod: "PP=AA2", values: [{anno: 2019, value: 0}]},
        { desc: "B) Fondi per rischi e oneri", cod: "PP.B", values: [{anno: 2019, value: 0}]},
        { desc: "   1) Fondo per trattamento di quiescenza e obblighi simili", cod: "PP.B1", values: [{anno: 2019, value: 0}]},
        { desc: "   2) Fondo per imposte, anche differite", cod: "PP.B2", values: [{anno: 2019, value: 0}]},
        { desc: "   di consolidamento per rischi e oneri futuri", cod: "PP.B4", values: [{anno: 2019, value: 0}]},
        { desc: "   3) Altri fondi", cod: "PP.B3", values: [{anno: 2019, value: 0}]},
        { desc: "C) Trattamento fine rapporto di lavoro subordinato", cod: "PP.C", values: [{anno: 2019, value: 0}]},
        { desc: "D) Debiti", cod: "PP.D", values: [{anno: 2019, value: 0}]},
        { desc: "   1) Obbligazioni non convertibili", cod: "PP.D1", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D1a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D1b", values: [{anno: 2019, value: 0}]},
        { desc: "   2) Obbligazioni convertibili", cod: "PP.D2", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D2a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D2b", values: [{anno: 2019, value: 0}]},
        { desc: "   3) Debiti verso soci per finanziamenti", cod: "PP.DF", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.DFa", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.DFb", values: [{anno: 2019, value: 0}]},
        { desc: "   4) Debiti verso banche", cod: "PP.D3", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D3a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D3b", values: [{anno: 2019, value: 0}]},
        { desc: "   5) Debiti verso altri finanziatori", cod: "PP.D4", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D4a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D4b", values: [{anno: 2019, value: 0}]},
        { desc: "   6) Acconti", cod: "PP.D5", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D5a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D5b", values: [{anno: 2019, value: 0}]},
        { desc: "   7) Debiti verso fornitori", cod: "PP.D6", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D6a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D6b", values: [{anno: 2019, value: 0}]},
        { desc: "   8) Debiti rappresentati da titoli di credito", cod: "PP.D7", values: [{anno: 2019, value: 0}]},
        { desc: "       - entro 12 mesi", cod: "PP.D7a", values: [{anno: 2019, value: 0}]},
        { desc: "       - oltre 12 mesi", cod: "PP.D7b", values: [{anno: 2019, value: 0}]},
        { desc: "   9)Debiti verso imprese controllate", cod: "PP.D8", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.D8a", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.D8b", values: [{anno: 2019, value: 0}]},
        { desc: "   10)Debiti verso imprese collegate", cod: "PP.D9", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.D9a", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.D9b", values: [{anno: 2019, value: 0}]},
        { desc: "   11)Debiti verso controllanti", cod: "PP.DA", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.DAa", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.DAb", values: [{anno: 2019, value: 0}]},
        { desc: "   12)Debiti tributari", cod: "PP.DB", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.DBa", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.DBb", values: [{anno: 2019, value: 0}]},
        { desc: "   13)Debiti verso istituti di previdenza e sicurezza sociale", cod: "PP.DC", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.DCa", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.DCb", values: [{anno: 2019, value: 0}]},
        { desc: "   14) Altri debiti", cod: "PP.DD", values: [{anno: 2019, value: 0}]},
        { desc: "   - entro 12 mesi", cod: "PP.DDa", values: [{anno: 2019, value: 0}]},
        { desc: "   - oltre 12 mesi", cod: "PP.DDb", values: [{anno: 2019, value: 0}]},
        { desc: "E) Ratei e risconti ", cod: "PP.E", values: [{anno: 2019, value: 0}]},
        { desc: "   -aggio su prestiti", cod: "PP.E1", values: [{anno: 2019, value: 0}]},
        { desc: "   -vari", cod: "PP.E2", values: [{anno: 2019, value: 0}]},
        { desc: "CONTI D’ORDINE", cod: "PO", values: [{anno: 2019, value: 0}]},
        { desc: "Rischi assunti dall’impresa", cod: "PO.A", values: [{anno: 2019, value: 0}]},
        { desc: "	Fideiussioni", cod: "PO.A1", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate", cod: "PO.A1a", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese collegate", cod: "PO.A1b", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllanti", cod: "PO.A1c", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate da controllanti", cod: "PO.A1d", values: [{anno: 2019, value: 0}]},
        { desc: "	ad altre imprese", cod: "PO.A1e", values: [{anno: 2019, value: 0}]},
        { desc: "	Avalli", cod: "PO.A2", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate", cod: "PO.A2a", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese collegate", cod: "PO.A2b", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllanti", cod: "PO.A2c", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate da controllanti", cod: "PO.A2d", values: [{anno: 2019, value: 0}]},
        { desc: "	ad altre imprese", cod: "PO.A2e", values: [{anno: 2019, value: 0}]},
        { desc: "	Altre garanzie personali", cod: "PO.A3", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate", cod: "PO.A3a", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese collegate", cod: "PO.A3b", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllanti", cod: "PO.A3c", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate da controllanti", cod: "PO.A3d", values: [{anno: 2019, value: 0}]},
        { desc: "	ad altre imprese", cod: "PO.A3e", values: [{anno: 2019, value: 0}]},
        { desc: "	Garanzie Reali", cod: "PO.A4", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate", cod: "PO.A4a", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese collegate", cod: "PO.A4b", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllanti", cod: "PO.A4c", values: [{anno: 2019, value: 0}]},
        { desc: "	a imprese controllate da controllanti", cod: "PO.A4d", values: [{anno: 2019, value: 0}]},
        { desc: "	ad altre imprese", cod: "PO.A4e", values: [{anno: 2019, value: 0}]},
        { desc: "	Altri Rischi", cod: "PO.A5", values: [{anno: 2019, value: 0}]},
        { desc: "	crediti ceduti pro solvendo", cod: "PO.A5a", values: [{anno: 2019, value: 0}]},
        { desc: "	altri", cod: "PO.A5b", values: [{anno: 2019, value: 0}]},
        { desc: "Impegni Assunti dall’impresa", cod: "PO.B", values: [{anno: 2019, value: 0}]},
        { desc: "Beni di terzi presso l’impresa", cod: "PO.C", values: [{anno: 2019, value: 0}]},
        { desc: "	merci in conto lavorazione", cod: "PO.C1", values: [{anno: 2019, value: 0}]},
        { desc: "	beni presso l’impresa a titolo di deposito o comodato", cod: "PO.C2", values: [{anno: 2019, value: 0}]},
        { desc: "	beni presso l’impresa in pegno o cauzione", cod: "PO.C3", values: [{anno: 2019, value: 0}]},
        { desc: "	altro", cod: "PO.C4", values: [{anno: 2019, value: 0}]},
        { desc: "Altri conti d’ordine", cod: "PO.L", values: [{anno: 2019, value: 0}]},
        { desc: "CONTO ECONOMICO", cod: "E", values: [{anno: 2019, value: 0}]},
        { desc: "A) Valore della produzione", cod: "E.A", values: [{anno: 2019, value: 0}]},
        { desc: "	1) Ricavi delle vendite e delle prestazioni", cod: "E.A1", values: [{anno: 2019, value: 0}]},
        { desc: "	2)Variazione rimanenze prodotti in corso di lavor., semilavorati e finiti", cod: "E.A2", values: [{anno: 2019, value: 0}]},
        { desc: "	3) Ricavi delle vendite e delle prestazioni", cod: "E.A1", values: [{anno: 2019, value: 0}]},
        { desc: "	4) Incrementi di Immobilizzazioni per lavori interni", cod: "E.A4", values: [{anno: 2019, value: 0}]},
        { desc: "	5) Altri ricavi e proventi", cod: "E.A5", values: [{anno: 2019, value: 0}]},
        { desc: "	   - Vari", cod: "E.A51", values: [{anno: 2019, value: 0}]},
        { desc: "	   - Contributi in conto esercizio", cod: "E.A52", values: [{anno: 2019, value: 0}]},
        { desc: "B) Costi della produzione", cod: "E.B", values: [{anno: 2019, value: 0}]},
        { desc: "	6) Acquisti materie prime,sussidiarie, di consumo e di merci", cod: "E.B1", values: [{anno: 2019, value: 0}]},
        { desc: "MARGINE LORDO", cod: "ML", values: [{anno: 2019, value: 0}]},
        { desc: "	7) Spese per prestazioni di servizi", cod: "E.B2", values: [{anno: 2019, value: 0}]},
        { desc: "	8) Spese per godimento di beni di terzi", cod: "E.B3", values: [{anno: 2019, value: 0}]},
        { desc: "	9) Costi del personale", cod: "E.B4", values: [{anno: 2019, value: 0}]},
        { desc: "	 	a) Salari e stipendi", cod: "E.B41", values: [{anno: 2019, value: 0}]},
        { desc: "	 	b) Oneri sociali", cod: "E.B42", values: [{anno: 2019, value: 0}]},
        { desc: "	 	c) Trattamento Fine Rapporto", cod: "E.B43", values: [{anno: 2019, value: 0}]},
        { desc: "	 	d) Trattamento di quiescenza e simili", cod: "E.B44", values: [{anno: 2019, value: 0}]},
        { desc: "	 	e) Altri costi", cod: "E.B45", values: [{anno: 2019, value: 0}]},
        { desc: "EBITDA (MOL)", cod: "EBITDA", values: [{anno: 2019, value: 0}]},
        { desc: "	10) Ammortamenti e svalutazioni", cod: "E.B5", values: [{anno: 2019, value: 0}]},
        { desc: "	 	a) Ammortamento delle immobilizzazioni immateriali", cod: "E.B51", values: [{anno: 2019, value: 0}]},
        { desc: "	 	b) Ammortamento delle immobilizzazioni materiali", cod: "E.B52", values: [{anno: 2019, value: 0}]},
        { desc: "	 	c) Altre svalutazioni delle immobilizzazioni", cod: "E.B53", values: [{anno: 2019, value: 0}]},
        { desc: "	 	d) Svalutazione cred. del circol. e delle disponibilità liquide", cod: "E.B54", values: [{anno: 2019, value: 0}]},
        { desc: "	11) Variazioni rimanenze materie prime, sussid., di consume e merci", cod: "E.B6", values: [{anno: 2019, value: 0}]},
        { desc: "	12) Accantonamenti per rischi", cod: "E.B7", values: [{anno: 2019, value: 0}]},
        { desc: "	13) Altri accantonamenti", cod: "E.B8", values: [{anno: 2019, value: 0}]},
        { desc: "	14) Oneri diversi di gestione", cod: "E.B9", values: [{anno: 2019, value: 0}]},
        { desc: "RISULTATO OPERATIVO EBIT", cod: "E=B", values: [{anno: 2019, value: 0}]},
        { desc: "	C) Proventi e oneri finanziari", cod: "E.C", values: [{anno: 2019, value: 0}]},
        { desc: "	15) Proventi e partecipazioni", cod: "E.C1", values: [{anno: 2019, value: 0}]},
        { desc: "		- Imprese controllate", cod: "E.C11", values: [{anno: 2019, value: 0}]},
        { desc: "		- Imprese collegate", cod: "E.C12", values: [{anno: 2019, value: 0}]},
        { desc: "		- Altri", cod: "E.C13", values: [{anno: 2019, value: 0}]},
        { desc: "	16) Altri proventi finanziari", cod: "E.C2", values: [{anno: 2019, value: 0}]},
        { desc: "	  a) da crediti iscritti nelle immobilizzazioni", cod: "E.C21", values: [{anno: 2019, value: 0}]},
        { desc: "            - da imprese controllate", cod: "E.C211", values: [{anno: 2019, value: 0}]},
        { desc: "            - da imprese collegate", cod: "E.C212", values: [{anno: 2019, value: 0}]},
        { desc: "            - da controllanti", cod: "E.C213", values: [{anno: 2019, value: 0}]},
        { desc: "            - altri", cod: "E.C215", values: [{anno: 2019, value: 0}]},
        { desc: "        b) da titoli iscritti nelle immobilizzazioni", cod: "E.C22", values: [{anno: 2019, value: 0}]},
        { desc: "        c) da titoli inscritti nell'attivo circolante", cod: "E.C23", values: [{anno: 2019, value: 0}]},
        { desc: "        d) proventi finanziari diversi dai precedenti:", cod: "E.C24", values: [{anno: 2019, value: 0}]},
        { desc: "            - da imprese controllate", cod: "E.C241", values: [{anno: 2019, value: 0}]},
        { desc: "            - da imprese collegate", cod: "E.C245", values: [{anno: 2019, value: 0}]},
        { desc: "            - da imprese controllanti", cod: "E.C242", values: [{anno: 2019, value: 0}]},
        { desc: "            - altri proventi finanziari", cod: "E.C244", values: [{anno: 2019, value: 0}]},
        { desc: "    17) Interessi e altri oneri finanziari:", cod: "E.C3", values: [{anno: 2019, value: 0}]},
        { desc: "        - da imprese controllate", cod: "E.C31", values: [{anno: 2019, value: 0}]},
        { desc: "        - da imprese collegate", cod: "E.C32", values: [{anno: 2019, value: 0}]},
        { desc: "        - da imprese controllanti", cod: "E.C33", values: [{anno: 2019, value: 0}]},
        { desc: "        - altri", cod: "E.C35", values: [{anno: 2019, value: 0}]},
        { desc: "    17-bis) Utili e perdite su cambi", cod: "E.C4", values: [{anno: 2019, value: 0}]},
        { desc: "D) Rettifiche di valore di attività finanziarie", cod: "E.D", values: [{anno: 2019, value: 0}]},
        { desc: "    18) Rivalutazioni", cod: "E.D1", values: [{anno: 2019, value: 0}]},
        { desc: "        a) di partecipazioni", cod: "E.D11", values: [{anno: 2019, value: 0}]},
        { desc: "            con il metodo del patrimonio netto", cod: "E.D111", values: [{anno: 2019, value: 0}]},
        { desc: "            altre", cod: "E.D112", values: [{anno: 2019, value: 0}]},
        { desc: "        b) di immobilizzazioni finanziarie", cod: "E.D12", values: [{anno: 2019, value: 0}]},
        { desc: "        c) di titoli inscritti nell'attivo circolante", cod: "E.D13", values: [{anno: 2019, value: 0}]},
        { desc: "    19) Svalutazioni", cod: "E.D2", values: [{anno: 2019, value: 0}]},
        { desc: "        a) di partecipazioni", cod: "E.D21", values: [{anno: 2019, value: 0}]},
        { desc: "            con il metodo del patrimonio netto", cod: "E.D211", values: [{anno: 2019, value: 0}]},
        { desc: "            altre", cod: "E.D212", values: [{anno: 2019, value: 0}]},
        { desc: "        b) di immobilizzazioni finanziarie", cod: "E.D22", values: [{anno: 2019, value: 0}]},
        { desc: "        c) di titoli inscritti nell'attivo circolante", cod: "E.D23", values: [{anno: 2019, value: 0}]},
        { desc: "E) Proventi e oneri straordinari", cod: "E.E", values: [{anno: 2019, value: 0}]},
        { desc: "    20) Proventi straordinari", cod: "E.E1", values: [{anno: 2019, value: 0}]},
        { desc: "        - Plusvalenze non produzione", cod: "E.E11", values: [{anno: 2019, value: 0}]},
        { desc: "        - Varie", cod: "E.E12", values: [{anno: 2019, value: 0}]},
        { desc: "            - Varie", cod: "E.E121", values: [{anno: 2019, value: 0}]},
        { desc: "            - Proventi (Oneri) straordinari per redazione Bilancio in Euro (2 decimali)", cod: "E.E122", values: [{anno: 2019, value: 0}]},
        { desc: "    21) Oneri straordinari", cod: "E.E2", values: [{anno: 2019, value: 0}]},
        { desc: "        - Minusvalenze non produzione", cod: "E.E21", values: [{anno: 2019, value: 0}]},
        { desc: "        - Imposte su esercizi precedenti", cod: "E.E22", values: [{anno: 2019, value: 0}]},
        { desc: "        - Varie", cod: "E.E23", values: [{anno: 2019, value: 0}]},
        { desc: "Risultato prima delle imposte", cod: "E.F", values: [{anno: 2019, value: 0}]},
        { desc: "22) Imposte sul reddito dell'esercizio", cod: "E.F1", values: [{anno: 2019, value: 0}]},
        { desc: "    a) Imposte correnti", cod: "E.F11", values: [{anno: 2019, value: 0}]},
        { desc: "    b) Imposte differite", cod: "E.F12", values: [{anno: 2019, value: 0}]},
        { desc: "    c) Imposte anticipate", cod: "E.F13", values: [{anno: 2019, value: 0}]},
        { desc: "    d) Proventi (oneri) da adesione al regime di consolidato fiscale / trasparenza fiscale", cod: "E.F14", values: [{anno: 2019, value: 0}]},
        { desc: "23) Utile (Perdita) dell'esercizio", cod: "E.F2", values: [{anno: 2019, value: 0}]},
        { desc: "Utile (perdita) dell'esercizio di pertinenza di terzi", cod: "E.G", values: [{anno: 2019, value: 0}]},
        { desc: "Utile (perdita) dell'esercizio di pertinenza per il gruppo", cod: "E.H", values: [{anno: 2019, value: 0}]},
        { desc: "Riclassificazione SP secondo il criterio finanziario", cod: "", values: [{anno: 2019, value: 0}]},
        { desc: "Immobilizzazioni Immateriali", cod: "IMM.1", values: [{anno: 2019, value: 0}]},
        { desc: "Immobilizzazioni materiali", cod: "IMM.2", values: [{anno: 2019, value: 0}]},
        { desc: "Immobilizzazioni finanziarie", cod: "IMM.3", values: [{anno: 2019, value: 0}]},
        { desc: "TOTALE IMMOBILIZZAZIONI", cod: "IMM", values: [{anno: 2019, value: 0}]},
        { desc: "Attività consolidate", cod: "ATTCONS", values: [{anno: 2019, value: 0}]},
        { desc: "Rimanenze", cod: "RIMA", values: [{anno: 2019, value: 0}]},
        { desc: "Clienti", cod: "LD1", values: [{anno: 2019, value: 0}]},
        { desc: "Altri crediti entro 12 mesi", cod: "LD2", values: [{anno: 2019, value: 0}]},
        { desc: "Crediti oltre 12 mesi", cod: "CROLTRE12", values: [{anno: 2019, value: 0}]},
        { desc: "Attività finanziarie non immobilizzate", cod: "ATTFINNONIMM", values: [{anno: 2019, value: 0}]},
        { desc: "Liquidità", cod: "LI", values: [{anno: 2019, value: 0}]},
        { desc: "ratei e Risconti attivi", cod: "RATRISATT", values: [{anno: 2019, value: 0}]},
        { desc: "Attività Correnti", cod: "ATTCORR", values: [{anno: 2019, value: 0}]},
        { desc: "Liquidità + crediti + ratei", cod: "LIQCRERAT", values: [{anno: 2019, value: 0}]},
        { desc: "Attività correnti - liquidità", cod: "ATTCORRLIQ", values: [{anno: 2019, value: 0}]},
        { desc: "Totale impieghi (capitale investito)", cod: "CI", values: [{anno: 2019, value: 0}]},
        { desc: "Patrimonio Netto", cod: "PN", values: [{anno: 2019, value: 0}]},
        { desc: "Fondi", cod: "FON", values: [{anno: 2019, value: 0}]},
        { desc: "TFR", cod: "TFR", values: [{anno: 2019, value: 0}]},
        { desc: "debiti finanziari MLT", cod: "MLT", values: [{anno: 2019, value: 0}]},
        { desc: "Passività consolidate", cod: "PMLT", values: [{anno: 2019, value: 0}]},
        { desc: "Passività consolidate + CN", cod: "PMLT+PN", values: [{anno: 2019, value: 0}]},
        { desc: "debiti finanziari BT", cod: "DEBFINBT", values: [{anno: 2019, value: 0}]},
        { desc: "Fornitori", cod: "FORN", values: [{anno: 2019, value: 0}]},
        { desc: "debiti non finanziari oltre 12 mesi", cod: "DFB", values: [{anno: 2019, value: 0}]},
        { desc: "debiti non finanziari entro 12 mesi", cod: "DEBNONFINENTR12MES", values: [{anno: 2019, value: 0}]},
        { desc: "ratei e risconti", cod: "RATERIS", values: [{anno: 2019, value: 0}]},
        { desc: "Passività correnti", cod: "PR", values: [{anno: 2019, value: 0}]},
        { desc: "Capitale circolante netto", cod: "CAPCIRNET", values: [{anno: 2019, value: 0}]},
        { desc: "Totale fonti (Passività + Netto)", cod: "TOTFON", values: [{anno: 2019, value: 0}]},
        { desc: "variaz. Cred.+mag.", cod: "VARCREDMAG", values: [{anno: 2019, value: 0}]},
        { desc: "variaz.ricavi", cod: "VARRIC", values: [{anno: 2019, value: 0}]},
        { desc: "variaz.att.cotrr.", cod: "VARATTCOTRR", values: [{anno: 2019, value: 0}]}
      ],
      PA:0,
      PAA:1,
      PAA1:2,
      PAA2:3,
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
      PAB2:32,
      PAB21:33,
      PAB21A:34,
      PAB21B:35,
      PAB21C:36,
      PAB22:37,
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
      PAB32C1:68,
      PAB32C2:69,
      PAB32D:70,
      PAB32D1:71,
      PAB32D2:72,
      PAB33:73,
      PAB34:74,
      PAB34A:75,
      PAB34B:76,
      PAC:77,
      PAC1:78,
      PAC11:79,
      PAC12:80,
      PAC13:81,
      PAC14:82,
      PAC15:83,
      PAC2:84,
      PAC21:85,
      PAC21A:86,
      PAC21B:87,
      PAC22:88,
      PAC22A:89,
      PAC22B:90,
      PAC23:91,
      PAC23A:92,
      PAC23B:93,
      PAC24:94,
      PAC24A:95,
      PAC24B:96,
      PAC2B:97,
      PAC2BA:98,
      PAC2BB:99,
      PAC2T:100,
      PAC2TA:101,
      PAC2TB:102,
      PAC25:103,
      PAC25A:104,
      PAC25B:105,
      PAC3:106,
      PAC31:107,
      PAC32:108,
      PAC33:109,
      PAC34:110,
      PAC35:111,
      PAC35A:112,
      PAC35B:113,
      PAC36:114,
      PAC4:115,
      PAC41:116,
      PAC42:117,
      PAC43:118,
      PAD:119,
      PAD1:120,
      PAD2:121
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
        case 'PA':
          this.startPA(anno);
          break;
        case 'PA.A':
          this.startPAA(anno);
          break;
        case 'PA.A1':
          this.startPAA1(anno);
          break;
        case 'PA.A2':
          this.startPAA2(anno);
          break;
        case 'PA.B':
          this.startPAB(anno);
          break;
        case 'PA.B1':
          this.startPAB1(anno);
          break;
        case 'PA.B11':
          this.startPAB11(anno);
          break;
        case 'PA.B11a':
          this.startPAB11a(anno);
          break;
        case 'PA.B11b':
          this.startPAB11b(anno);
          break;
        case 'PA.B11c':
          this.startPAB11c(anno);
          break;
        case 'PA.B12':
          this.startPAB12(anno);
          break;
        case 'PA.B12a':
          this.startPAB12a(anno);
          break;
        case 'PA.B12b':
          this.startPAB12b(anno);
          break;
        case 'PA.B12c':
          this.startPAB12c(anno);
          break;
        case 'PA.B13':
          this.startPAB13(anno);
          break;
        case 'PA.B13a':
          this.startPAB13a(anno);
          break;
        case 'PA.B13b':
          this.startPAB13b(anno);
          break;
        case 'PA.B13c':
          this.startPAB13c(anno);
          break;
        case 'PA.B14':
          this.startPAB14(anno);
          break;
        case 'PA.B14a':
          this.startPAB14a(anno);
          break;
        case 'PA.B14b':
          this.startPAB14b(anno);
          break;
        case 'PA.B14c':
          this.startPAB14c(anno);
          break;
        case 'PA.B18':
          this.startPAB18(anno);
          break;
        case 'PA.B15':
          this.startPAB15(anno);
          break;
        case 'PA.B15a':
          this.startPAB15a(anno);
          break;
        case 'PA.B15b':
          this.startPAB15b(anno);
          break;
        case 'PA.B15c':
          this.startPAB15c(anno);
          break;
        case 'PA.B16':
          this.startPAB16(anno);
          break;
        case 'PA.B17':
          this.startPAB17(anno);
          break;
        case 'PA.B17a':
          this.startPAB17a(anno);
          break;
        case 'PA.B17b':
          this.startPAB17b(anno);
          break;
        case 'PA.B17c':
          this.startPAB17c(anno);
          break;
        case 'PA.B2':
          this.startPAB2(anno);
          break;
        case 'PA.B21':
          this.startPAB21(anno);
          break;
        case 'PA.B21a':
          this.startPAB21A(anno);
          break;
        case 'PA.B21b':
          this.startPAB21B(anno);
          break;
        case 'PA.B21c':
          this.startPAB21C(anno);
          break;
        case 'PA.B22':
          this.startPAB22(anno);
          break;
        case 'PA.B22a':
          this.startPAB22A(anno);
          break;
        case 'PA.B22b':
          this.startPAB22B(anno);
          break;
        case 'PA.B22c':
          this.startPAB22C(anno);
          break;
        case 'PA.B23':
          this.startPAB23(anno);
          break;
        case 'PA.B23a':
          this.startPAB23A(anno);
          break;
        case 'PA.B23b':
          this.startPAB23B(anno);
          break;
        case 'PA.B23c':
          this.startPAB23C(anno);
          break;
        case 'PA.B24':
          this.startPAB24(anno);
          break;
        case 'PA.B24a':
          this.startPAB24A(anno);
          break;
        case 'PA.B24b':
          this.startPAB24B(anno);
          break;
        case 'PA.B24c':
          this.startPAB24C(anno);
          break;
        case 'PA.B25':
          this.startPAB25(anno);
          break;
        case 'PA.B26':
          this.startPAB26(anno);
          break;
        case 'PA.B26a':
          this.startPAB26A(anno);
          break;
        case 'PA.B26b':
          this.startPAB26B(anno);
          break;
        case 'PA.B26c':
          this.startPAB26C(anno);
          break;
        case 'PA.B3':
          this.startPAB3(anno);
          break;
        case 'PA.B31':
          this.startPAB31(anno);
          break;
        case 'PA.B31a':
          this.startPAB31A(anno);
          break;
        case 'PA.B31b':
          this.startPAB31B(anno);
          break;
        case 'PA.B31c':
          this.startPAB31C(anno);
          break;
        case 'PA.B31d':
          this.startPAB31D(anno);
          break;
        case 'PA.B32':
          this.startPAB32(anno);
          break;
        case 'PA.B32a':
          this.startPAB32A(anno);
          break;
        case 'PA.B32a1':
          this.startPAB32A1(anno);
          break;
        case 'PA.B32a2':
          this.startPAB32A2(anno);
          break;
        case 'PA.B32b':
          this.startPAB32B(anno);
          break;
        case 'PA.B32b1':
          this.startPAB32B1(anno);
          break;
        case 'PA.B32b2':
          this.startPAB32B2(anno);
          break;
        case 'PA.B32c':
          this.startPAB32C(anno);
          break;
        case 'PA.B32c1':
          this.startPAB32C1(anno);
          break;
        case 'PA.B32c2':
          this.startPAB32C2(anno);
          break;
        case 'PA.B32d':
          this.startPAB32D(anno);
          break;
        case 'PA.B32d1':
          this.startPAB32D1(anno);
          break;
        case 'PA.B32d2':
          this.startPAB32D2(anno);
          break;
        case 'PA.B33':
          this.startPAB33(anno);
          break;
        case 'PA.B34':
          this.startPAB34(anno);
          break;
        case 'PA.B34a':
          this.startPAB34A(anno);
          break;
        case 'PA.B34b':
          this.startPAB34B(anno);
          break;
        case 'PA.C':
          this.startPAC(anno);
          break;
        case 'PA.C1':
          this.startPAC1(anno);
          break;
        case 'PA.C11':
          this.startPAC11(anno);
          break;
        case 'PA.C12':
          this.startPAC12(anno);
          break;
        case 'PA.C13':
          this.startPAC13(anno);
          break;
        case 'PA.C14':
          this.startPAC14(anno);
          break;
        case 'PA.C15':
          this.startPAC15(anno);
          break;
        case 'PA.C2':
          this.startPAC2(anno);
          break;
        case 'PA.C21':
          this.startPAC21(anno);
          break;
        case 'PA.C21a':
          this.startPAC21A(anno);
          break;
        case 'PA.C21b':
          this.startPAC21B(anno);
          break;
        case 'PA.C22':
          this.startPAC22(anno);
          break;
        case 'PA.C22a':
          this.startPAC22A(anno);
          break;
        case 'PA.C22b':
          this.startPAC22B(anno);
          break;
        case 'PA.C23':
          this.startPAC23(anno);
          break;
        case 'PA.C23a':
          this.startPAC23A(anno);
          break;
        case 'PA.C23b':
          this.startPAC23B(anno);
          break;
        case 'PA.C24':
          this.startPAC24(anno);
          break;
        case 'PA.C24a':
          this.startPAC24A(anno);
          break;
        case 'PA.C24b':
          this.startPAC24B(anno);
          break;
        case 'PA.C2B':
          this.startPAC2B(anno);
          break;
        case 'PA.C2Ba':
          this.startPAC2BA(anno);
          break;
        case 'PA.C2Bb':
          this.startPAC2BB(anno);
          break;
        case 'PA.C2T':
          this.startPACTB(anno);
          break;
        case 'PA.C2Ta':
          this.startPAC2TA(anno);
          break;
        case 'PA.C2Tb':
          this.startPAC2TB(anno);
          break;
        case 'PA.C25':
          this.startPAC25(anno);
          break;
        case 'PA.C25a':
          this.startPAC25A(anno);
          break;
        case 'PA.C25b':
          this.startPAC25B(anno);
          break;
        case 'PA.C3':
          this.startPAC3(anno);
          break;
        case 'PA.C31':
          this.startPAC31(anno);
          break;
        case 'PA.C32':
          this.startPAC32(anno);
          break;
        case 'PA.C33':
          this.startPAC33(anno);
          break;
        case 'PA.C34':
          this.startPAC34(anno);
          break;
        case 'PA.C35':
          this.startPAC35(anno);
          break;
        case 'PA.C35a':
          this.startPAC35A(anno);
          break;
        case 'PA.C35b':
          this.startPAC35B(anno);
          break;
        case 'PA.C36':
          this.startPAC36(anno);
          break;
        case 'PA.C5':
          this.startPAC4(anno);
          break;
        case 'PA.C41':
          this.startPAC41(anno);
          break;
        case 'PA.C42':
          this.startPAC42(anno);
          break;
        case 'PA.C43':
          this.startPAC43(anno);
          break;
        case 'PA.D':
          this.startPAD(anno);
          break;
        case 'PA.D1':
          this.startPAD1(anno);
          break;
        case 'PA.D2':
          this.startPAD2(anno);
          break;
      }
    },
    startPA(anno){
    },
    startPAA(anno){
      this.calculatePA(anno);
    },
    startPAA1(anno) {
      this.calculatePAA(anno);
    },
    startPAA2(anno) {
      this.calculatePAA(anno);
    },
    startPAB(anno) {
      this.calculatePA(anno);
    },
    startPAB1(anno) {
      this.calculatePAB(anno);
    },
    startPAB11(anno) {
      this.calculatePAB1(anno);
    },
    startPAB11a(anno) {
      this.calculatePAB11(anno);
    },
    startPAB11b(anno) {
      this.calculatePAB11(anno);
    },
    startPAB11c(anno) {
      this.calculatePAB11(anno);
    },
    startPAB12(anno) {
      this.calculatePAB1(anno);
    },
    startPAB12a(anno) {
      this.calculatePAB12(anno);
    },
    startPAB12b(anno) {
      this.calculatePAB12(anno);
    },
    startPAB12c(anno) {
      this.calculatePAB12(anno);
    },
    startPAB13(anno) {
      this.calculatePAB1(anno);
    },
    startPAB13a(anno) {
      this.calculatePAB13(anno);
    },
    startPAB13b(anno) {
      this.calculatePAB13(anno);
    },
    startPAB13c(anno) {
      this.calculatePAB13(anno);
    },
    startPAB14(anno) {
      this.calculatePAB1(anno);
    },
    startPAB14a(anno) {
      this.calculatePAB14(anno);
    },
    startPAB14b(anno) {
      this.calculatePAB14(anno);
    },
    startPAB14c(anno) {
      this.calculatePAB14(anno);
    },
    startPAB18(anno) {
    },
    startPAB15(anno) {
      this.calculatePAB1(anno);
    },
    startPAB15a(anno) {
      this.calculatePAB15(anno);
    },
    startPAB15b(anno) {
      this.calculatePAB15(anno);
    },
    startPAB15c(anno) {
      this.calculatePAB15(anno);
    },
    startPAB16(anno) {
      this.calculatePAB1(anno);
    },
    startPAB17(anno) {
      this.calculatePAB1(anno);
    },
    startPAB17a(anno) {
      this.calculatePAB17(anno);
    },
    startPAB17b(anno) {
      this.calculatePAB17(anno);
    },
    startPAB17c(anno) {
      this.calculatePAB17(anno);
    },
    startPAB2(anno){
      this.calculatePAB(anno);
    },
    startPAB21(anno){
      this.calculatePAB2(anno);
    },
    startPAB21A(anno){
      this.calculatePAB21(anno);
    },
    startPAB21B(anno){
      this.calculatePAB21(anno);
    },
    startPAB21C(anno){
      this.calculatePAB21(anno);
    },
    startPAB22(anno){
      this.calculatePAB2(anno);
    },
    startPAB22A(anno) {
      this.calculatePAB22(anno);
    },
    startPAB22B(anno) {
      this.calculatePAB22(anno);
    },
    startPAB22C(anno) {
      this.calculatePAB22(anno);
    },
    startPAB23(anno) {
      this.calculatePAB2(anno);
    },
    startPAB23A(anno) {
      this.calculatePAB23(anno);
    },
    startPAB23B(anno) {
      this.calculatePAB23(anno);
    },
    startPAB23C(anno) {
      this.calculatePAB23(anno);
    },
    startPAB24(anno) {
      this.calculatePAB2(anno);
    },
    startPAB24A(anno) {
      this.calculatePAB24(anno);
    },
    startPAB24B(anno) {
      this.calculatePAB24(anno);
    },
    startPAB24C(anno) {
      this.calculatePAB24(anno);
    },
    startPAB25(anno) {
      this.calculatePAB2(anno);
    },
    startPAB26(anno) {
      this.calculatePAB2(anno);
    },
    startPAB26A(anno) {
      this.calculatePAB26(anno);
    },
    startPAB26B(anno) {
      this.calculatePAB26(anno);
    },
    startPAB26C(anno) {
      this.calculatePAB26(anno);
    },
    startPAB3(anno) {
      this.calculatePAB(anno);
    },
    startPAB31(anno) {
      this.calculatePAB3(anno);
    },
    startPAB31A(anno) {
      this.calculatePAB31(anno);
    },
    startPAB31B(anno) {
      this.calculatePAB31(anno);
    },
    startPAB31C(anno) {
      this.calculatePAB31(anno);
    },
    startPAB31D(anno) {
      this.calculatePAB31(anno);
    },
    startPAB32(anno) {
      this.calculatePAB3(anno);
    },
    startPAB32A(anno) {
      this.calculatePAB32(anno);
    },
    startPAB32A1(anno) {
      this.calculatePAB32A(anno);
    },
    startPAB32A2(anno) {
      this.calculatePAB32A(anno);
    },
    startPAB32B(anno) {
      this.calculatePAB32(anno);
    },
    startPAB32B1(anno) {
      this.calculatePAB32B(anno);
    },
    startPAB32B2(anno) {
      this.calculatePAB32B(anno);
    },
    startPAB32C(anno) {
      this.calculatePAB32(anno);
    },
    startPAB32C1(anno){
      this.calculatePAB32C(anno);
    },
    startPAB32C2(anno){
      this.calculatePAB32C(anno);
    },
    startPAB32D(anno){
      this.calculatePAB32(anno);
    },
    startPAB32D1(anno){
      this.calculatePAB32D(anno);
    },
    startPAB32D2(anno){
      this.calculatePAB32D(anno);
    },
    startPAB33(anno){
      this.calculatePAB3(anno);
    },
    startPAB34(anno){
      this.calculatePAB3(anno);
    },
    startPAB34A(anno){
      this.calculatePA34(anno);
    },
    startPAB34B(anno){
      this.calculatePAB34(anno);
    },
    startPAC(anno){
      this.calculatePA(anno);
    },
    startPAC1(anno){
      this.calculatePAC(anno);
    },
    startPAC11(anno){
      this.calculatePAC1(anno);
    },
    startPAC12(anno){
      this.calculatePAC1(anno);
    },
    startPAC13(anno){
      this.calculatePAC1(anno);
    },
    startPAC14(anno){
      this.calculatePAC1(anno);
    },
    startPAC15(anno){
      this.calculatePAC1(anno);
    },
    startPAC2(anno){
      this.calculatePAC(anno);
    },
    startPAC21(anno){
      this.calculatePAC2(anno);
    },
    startPAC21A(anno){
      this.calculatePAC21(anno);
    },
    startPAC21B(anno){
      this.calculatePAC21(anno);
    },
    startPAC22(anno){
      this.calculatePAC2(anno);
    },
    startPAC22A(anno){
      this.calculatePAC22(anno);
    },
    startPAC22B(anno){
      this.calculatePAC22(anno);
    },
    startPAC23(anno){
      this.calculatePAC2(anno);
    },
    startPAC23A(anno){
      this.calculatePAC23(anno);
    },
    startPAC23B(anno){
      this.calculatePAC23(anno);
    },
    startPAC24(anno){
      this.calculatePAC2(anno);
    },
    startPAC24A(anno){
      this.calculatePAC24(anno);
    },
    startPAC24B(anno){
      this.calculatePAC24(anno);
    },
    startPAC2B(anno){
      this.calculatePAC2(anno);
    },
    startPAC2BA(anno){
      this.calculatePAC2B(anno);
    },
    startPAC2BB(anno){
      this.calculatePAC2B(anno);
    },
    startPAC2T(anno){
      this.calculatePAC2(anno);
    },
    startPAC2TA(anno){
      this.calculatePAC2T(anno);
    },
    startPAC2TB(anno){
      this.calculatePAC2T(anno);
    },
    startPAC25(anno){
      this.calculatePAC2(anno);
    },
    startPAC25A(anno){
      this.calculatePAC25(anno);
    },
    startPAC25B(anno){
      this.calculatePAC25(anno);
    },
    startPAC3(anno){
      this.startPAC3(anno);
    },
    startPAC31(anno){
      this.calculatePAC3(anno);
    },
    startPAC32(anno){
      this.calculatePAC3(anno);
    },
    startPAC33(anno){
      this.calculatePAC3(anno);
    },
    startPAC34(anno){
      this.calculatePAC3(anno);
    },
    startPAC35(anno){
      this.calculatePAC3(anno);
    },
    startPAC35A(anno){
      this.calculatePAC35(anno);
    },
    startPAC35B(anno){
      this.calculatePAC35(anno);
    },
    startPAC36(anno){
      this.calculatePAC3(anno);
    },
    startPAC4(anno){
      this.calculatePAC(anno);
    },
    startPAC41(anno){
      this.calculatePAC4(anno);
    },
    startPAC42(anno){
      this.calculatePAC4(anno);
    },
    startPAC43(anno){
      this.calculatePAC4(anno);
    },
    startPAD(anno){
      this.calculatePA(anno)
    },
    startPAD1(anno){
      this.calculatePAD(anno);
    },
    startPAD2(anno){
      this.calculatePAD2(anno);
    },
    calculatePA(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PA].values[index_anno].value = this.row[this.PAA].values[index_anno].value+this.row[this.PAB].values[index_anno].value+this.row[this.PAC].values[index_anno].value+this.row[this.PAD].values[index_anno].value;
    },
    calculatePAA(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAA].values[index_anno].value = this.row[this.PAA1].values[index_anno].value + this.row[this.PAA2].values[index_anno].value;
      this.startPAA(anno);
    },
    calculatePAB(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB].values[index_anno].value = this.row[this.PAB1].values[index_anno].value + this.row[this.PAB2].values[index_anno].value + this.row[this.PAB3].values[index_anno].value;
      this.startPAB(anno);
    },
    calculatePAB1(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB1].values[index_anno].value = this.row[this.PAB11].values[index_anno].value + this.row[this.PAB12].values[index_anno].value + this.row[this.PAB13].values[index_anno].value + this.row[this.PAB14].values[index_anno].value + this.row[this.PAB15].values[index_anno].value + this.row[this.PAB16].values[index_anno].value + this.row[this.PAB17].values[index_anno].value;
      this.startPAB1(anno);
    },
    calculatePAB11(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB11].values[index_anno].value = this.row[this.PAB11A].values[index_anno].value - this.row[this.PAB11B].values[index_anno].value - this.row[this.PAB11C].values[index_anno].value;
      this.startPAB11(anno);
    },
    calculatePAB12(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB12].values[index_anno].value = this.row[this.PAB12A].values[index_anno].value - this.row[this.PAB12B].values[index_anno].value - this.row[this.PAB12C].values[index_anno].value;
      this.startPAB12(anno);
    },
    calculatePAB13(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB13].values[index_anno].value = this.row[this.PAB13A].values[index_anno].value - this.row[this.PAB13B].values[index_anno].value - this.row[this.PAB13C].values[index_anno].value;
      this.startPAB13(anno);
    },
    calculatePAB14(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB14].values[index_anno].value = this.row[this.PAB14A].values[index_anno].value - this.row[this.PAB14B].values[index_anno].value - this.row[this.PAB14C].values[index_anno].value;
      this.startPAB14(anno);
    },
    calculatePAB15(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB15].values[index_anno].value = this.row[this.PAB15A].values[index_anno].value - this.row[this.PAB15B].values[index_anno].value - this.row[this.PAB15C].values[index_anno].value;
      this.startPAB15(anno);
    },
    calculatePAB17(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB17].values[index_anno].value = this.row[this.PAB17A].values[index_anno].value - this.row[this.PAB17B].values[index_anno].value - this.row[this.PAB17C].values[index_anno].value;
      this.startPAB17(anno);
    },
    calculatePAB2(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAB2].values[index_anno].value=this.row[this.PAB21].values[index_anno].value+this.row[this.PAB22].values[index_anno].value+this.row[this.PAB23].values[index_anno].value+this.row[this.PAB24].values[index_anno].value+this.row[this.PAB25].values[index_anno].value+this.row[this.PAB26].values[index_anno].value;
      this.startPAB2(anno);
    },
    calculatePAB21(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAB21].values[index_anno].value=this.row[this.PAB21A].values[index_anno].value+this.row[this.PAB21B].values[index_anno].value+this.row[this.PAB21C].values[index_anno].value;
      this.startPAB21(anno);
    },
    calculatePAB22(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAB22].values[index_anno].value=this.row[this.PAB22A].values[index_anno].value+this.row[this.PAB22B].values[index_anno].value+this.row[this.PAB22C].values[index_anno].value;
      this.startPAB22(anno);
    },
    calculatePAB23(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB23].values[index_anno].value = this.row[this.PAB23A].values[index_anno].value - this.row[this.PAB23B].values[index_anno].value - this.row[this.PAB23C].values[index_anno].value;
      this.startPAB23(anno); 
    },
    calculatePAB24(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB24].values[index_anno].value = this.row[this.PAB24A].values[index_anno].value - this.row[this.PAB24B].values[index_anno].value - this.row[this.PAB24C].values[index_anno].value;
      this.startPAB24(anno); 
    },
    calculatePAB26(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB26].values[index_anno].value = this.row[this.PAB26A].values[index_anno].value - this.row[this.PAB26B].values[index_anno].value - this.row[this.PAB26C].values[index_anno].value;
      this.startPAB26(anno); 
    },
    calculatePAB3(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB3].values[index_anno].value = this.row[this.PAB31].values[index_anno].value + this.row[this.PAB32].values[index_anno].value + this.row[this.PAB33].values[index_anno].value + this.row[this.PAB34].values[index_anno].value;
      this.startPAB3(anno);
    },
    calculatePAB31(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB31].values[index_anno].value = this.row[this.PAB31A].values[index_anno].value + this.row[this.PAB31B].values[index_anno].value + this.row[this.PAB31C].values[index_anno].value + this.row[this.PAB31D].values[index_anno].value;
      this.startPAB31(anno);
    },
    calculatePAB32(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB32].values[index_anno].value = this.row[this.PAB32A].values[index_anno].value + this.row[this.PAB32B].values[index_anno].value + this.row[this.PAB32C].values[index_anno].value + this.row[this.PAB32D].values[index_anno].value;
      this.startPAB32(anno);
    },
    calculatePAB32A(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB32A].values[index_anno].value = this.row[this.PAB32A1].values[index_anno].value + this.row[this.PAB32A2].values[index_anno].value;
      this.startPAB32A(anno);
    },
    calculatePAB32B(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB32B].values[index_anno].value = this.row[this.PAB32B1].values[index_anno].value + this.row[this.PAB32B2].values[index_anno].value;
      this.startPAB32B(anno);
    },
    calculatePAB32C(anno) {
      let index_anno = 2019 - parseInt(anno);
      this.row[this.PAB32C].values[index_anno].value = this.row[this.PAB32C1].values[index_anno].value + this.row[this.PAB32C2].values[index_anno].value;
      this.startPAB32C(anno);
    },
    calculatePAB32D(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAB32D].values[index_anno].value=this.row[this.PAB32D1].values[index_anno].value+this.row[this.PAB32D2].values[index_anno].value;
      this.startPAB32D(anno);
    },
    calculatePAB34(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAB34].values[index_anno].value=this.row[this.PAB34A].values[index_anno].value+this.row[this.PAB34B].values[index_anno].value;
      this.startPAB34(anno);
    },
    calculatePAC(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC].values[index_anno].value=this.row[this.PAC1].values[index_anno].value+this.row[this.PAC2].values[index_anno].value+this.row[this.PAC3].values[index_anno].value+this.row[this.PAC4].values[index_anno].value;
      this.startPAC(anno);
    },
    calculatePAC1(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC1].values[index_anno].value=this.row[this.PAC11].values[index_anno].value+this.row[this.PAC12].values[index_anno].value+this.row[this.PAC13].values[index_anno].value+this.row[this.PAC14].values[index_anno].value+this.row[this.PAC15].values[index_anno].value;
      this.startPAC1(anno);
    },
    calculatePAC2(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC2].values[index_anno].value=this.row[this.PAC21].values[index_anno].value+this.row[this.PAC22].values[index_anno].value+this.row[this.PAC23].values[index_anno].value+this.row[this.PAC24].values[index_anno].value+this.row[this.PAC2B].values[index_anno].value+this.row[this.PAC2T].values[index_anno].value+this.row[this.PAC25].values[index_anno].value;
      this.startPAC2(anno);
    },
    calculatePAC21(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC21].values[index_anno].value=this.row[this.PAC21A].values[index_anno].value+this.row[this.PAC21B].values[index_anno].value;
      this.startPAC21(anno);
    },
    calculatePAC22(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC22].values[index_anno].value=this.row[this.PAC22A].values[index_anno].value+this.row[this.PAC22B].values[index_anno].value;
      this.startPAC22(anno);
    },
    calculatePAC23(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC23].values[index_anno].value=this.row[this.PAC23A].values[index_anno].value+this.row[this.PAC23B].values[index_anno].value;
      this.startPAC23(anno);
    },
    calculatePAC24(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC24].values[index_anno].value=this.row[this.PAC24A].values[index_anno].value+this.row[this.PAC24B].values[index_anno].value;
      this.startPAC24(anno);
    },
    calculatePAC2B(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC2B].values[index_anno].value=this.row[this.PAC2BA].values[index_anno].value+this.row[this.PAC2BB].values[index_anno].value;
      this.startPAC2B(anno);
    },
    calculatePAC2T(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC2T].values[index_anno].value=this.row[this.PAC2TA].values[index_anno].value+this.row[this.PAC2TB].values[index_anno].value;
      this.startPAC2T(anno);
    },
    calculatePAC25(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC25].values[index_anno].value=this.row[this.PAC25A].values[index_anno].value+this.row[this.PAC25B].values[index_anno].value;
      this.startPAC25(anno);
    },
    calculatePAC3(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC3].values[index_anno].value=this.row[this.PAC31].values[index_anno].value+this.row[this.PAC32].values[index_anno].value+this.row[this.PAC33].values[index_anno].value+this.row[this.PAC34].values[index_anno].value+this.row[this.PAC35].values[index_anno].value+this.row[this.PAC36].values[index_anno].value;
      this.startPAC3(anno);
    },
    calculatePAC35(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC35].values[index_anno].value=this.row[this.PAC35A].values[index_anno].value+this.row[this.PAC35B].values[index_anno].value;
      this.startPAC35(anno);
    },
    calculatePAC4(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAC4].values[index_anno].value=this.row[this.PAC41].values[index_anno].value+this.row[this.PAC42].values[index_anno].value+this.row[this.PAC43].values[index_anno].value;
      this.startPAC4(anno);
    },
    calculatePAD(anno){
      let index_anno=2019-parseInt(anno);
      this.row[this.PAD].values[index_anno].value=this.row[this.PAD1].values[index_anno].value+this.row[this.PAD2].values[index_anno].value;
      this.startPAD(anno);
    }
  } 
}
</script>

<style lang="scss" scoped>
</style>

