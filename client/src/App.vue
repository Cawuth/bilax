<template>
  <v-app>
    <Toolbar></Toolbar>
    <Navbar></Navbar>
    <v-content app>
      <v-container fluid app class="pa-0 full_height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  .full_height {
    height: 100%;
  }
</style>

