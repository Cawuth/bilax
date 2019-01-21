<template>
  <v-navigation-drawer
    app
    :mini-variant="mini"
    v-model="drawer"
    clipped
  >
    <v-list class="pa-0">
      <v-list-tile >
        <v-list-tile-action>
          <v-btn @click.stop="mini = !mini" icon>
            <transition name="fade">
              <v-icon v-if="mini">chevron_right</v-icon>
              <v-icon v-else>chevron_left</v-icon>
            </transition>
          </v-btn>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Nascondi</v-list-tile-title>
        </v-list-tile-content>  
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="goToRoute(item.route)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', route: '/' },
          { title: 'I miei bilanci', icon: 'view_headline', route: '/mybilaxs'},
          { title: 'Bilancio corrente', icon: 'euro_symbol', route: '/bilax'},
          { title: 'Analisi finanziaria', icon: 'insert_chart', route: '/analisis'},
          { title: 'Settings', icon: 'settings', route: '/about' }
        ],
        mini: true,
        right: null
      }
    },
    methods: {
      goToRoute(route) {
        this.$router.push(route);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
  }
</style>
