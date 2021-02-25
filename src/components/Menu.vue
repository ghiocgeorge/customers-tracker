<template>
  <v-container fluid>
    <v-row id="menu">
      <button @click="action">
        <dropBTN class="mb-3">Manage contacts</dropBTN>
        <v-icon left medium id="dropIcon"> mdi-menu-down </v-icon>
      </button>

      <button @click="action">
        <dropBTN class="mb-3"> Add contacts </dropBTN>
        <v-icon left medium id="dropIcon"> mdi-menu-down </v-icon>
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
    padding: 12px;
    padding-bottom: 5px;
    border-bottom: 3px solid #cccccc;
  }

  dropBTN {
    padding-left: 20px;
    padding-top: 50px;
    font-size: 16px;
    font-family: 'Lato';
    color: black
  }

  #dropIcon{
    padding-bottom: 5px; 
    color: black; 
    padding-right: 5px
  }
</style>
