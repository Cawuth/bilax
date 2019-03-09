<template>
    <v-parallax :src="require('../assets/calc-money.jpg')" height="900" dark>
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-light">Accedi qui</h1>
        <v-card width="400" class="elevation-10 mb-5">
          <v-form class="ml-4 mr-4 mt-2 mb-4">
            <v-text-field v-model="user" label="Email"></v-text-field>
            <v-text-field v-model="pwd" label="Password" type="password"></v-text-field>
            <v-btn depressed block large color="primary" v-on:click.prevent="send">Accedi</v-btn>
          </v-form>
        </v-card>
      </v-layout>
    </v-parallax>
</template>

<script>
export default {
  name: 'SignUpForm',
  data () {
    return {
      user:"",
      pwd:""
    }
    
  },
  methods: {
    send() {
        this.$http.post("http://localhost:3000/login", {
        user:this.user,
        password:this.pwd
      }).then(function(data) {
        console.log(data)
      });
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
