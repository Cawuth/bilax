<template>
    <v-parallax :src="require('../assets/borsa-pc.jpg')" height="900">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-light">Registrati qui</h1>
        <v-card width="400" class="elevation-10 mb-5">
          <v-form class="ml-4 mr-4 mt-2 mb-4">
            <v-text-field label="Nome"></v-text-field>
            <v-text-field label="Cognome"></v-text-field>
            <v-text-field label="Partita IVA"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-text-field label="Password" type="password"></v-text-field>
            <v-text-field label="Conferma password" type="password"></v-text-field>
            <v-btn depressed block large color="success">Registrati</v-btn>
          </v-form>
        </v-card>
      </v-layout>
    </v-parallax>
</template>

<script>
  export default {
    name: 'SignUpForm',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    padding: 20px;
  }
  v-form {
    margin: 20px;
  }
</style>

