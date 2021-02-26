<template>
  <v-app id="app">
    <v-container id="container" fluid>
        <AppHeader/>
      <v-card id="card" class="elevation-8">
        <Menu/>
        <RouterTab/>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
import Menu from './components/Menu';
import RouterTab from './components/RouterTab';

export default {
  name: 'App',

  components: {
    AppHeader, Menu, RouterTab,  
  },

  methods: {
    action () {
      alert('You clicked a button without action!')
    },
  },
};
</script>

<style>
#app {
  background: #f6f6f6;
}

#card {
  margin-top: 5px;
}

#container {
  max-width: auto;
  padding-block: 50px;
  padding-inline: 50px;
}


  .container {
    border: 1px solid green;
  }
  .card {
    border: 1px solid yellow;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  } 

</style>