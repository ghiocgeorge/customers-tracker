<template>
  <v-container fluid>
    <v-row id="menu">
      <button @click="action">
        <dropBTN class="mb-3">Manage contacts</dropBTN>
        <v-icon left large id="dropIcon"> mdi-menu-down </v-icon>
      </button>

      <button @click="action">
        <dropBTN class="mb-3"> Add contacts </dropBTN>
        <v-icon left large id="dropIcon"> mdi-menu-down </v-icon>
      </button>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    methods: {
      action () {
        alert('You clicked a button without action!')
      },
    },
  }
</script>

<style>
  #menu {
    padding: 10px;
    border-bottom: 3px solid #cccccc;
  }

  dropBTN {
    padding-left: 20px;
    padding-top: 10px;
    font-size: 22px;
    font-family: 'Lato';
    color: black
  }

  #dropIcon{
    padding-bottom:2px; 
    color: black; 
    padding-right: 5px
  }
</style>
