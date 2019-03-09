<template>
  <v-toolbar app clipped-left>
    <v-toolbar-title class="headline text-uppercase">
      <span>Bellentani</span>
      <span class="font-weight-light">BILAX</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click="goToRoute('/signup')" color="success" flat right>Registrati</v-btn>
      <v-btn @click="goToRoute('/login')" color="info" flat right>Accedi</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {

    }
  },
  methods: {
    goToRoute (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
