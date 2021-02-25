<template>
  <v-app id="app">
    <v-container id="container" fluid>
        <v-row>
          <v-col cols="auto" class="mr-auto">
            <v-icon left id="back" @click="action"> mdi-arrow-left </v-icon>
            <name>Name</name>
          </v-col>

          <v-col cols="auto" class="mt-3">
            <button id="delBtn" v-ripple class="elevation-2 py-2 px-4" @click="action">
              Delete List
            </button>
          </v-col>
        </v-row>
      <v-card id="card" class="elevation-8">
        <Menu/>
        <HelloWorld/>
      </v-card>

      </v-container>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Menu from './components/Menu';

export default {
  name: 'App',

  components: {
    Menu, HelloWorld, 
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
#back{
  padding-bottom:12px; 
  color:#21ce99; 
  padding-right: 5px
}

name {
  font-size: 32px;
  color: black
}

#delBtn {
  padding-top: 25px;
  background-color:#dc3545;
  border-radius: 4px;
  font-size:10px;
  color: white;  
}

#card {
  margin-top: 5px;
}

#container {
  max-width: auto;
  padding-block: 50px;
  padding-inline: 50px;
}

/*
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
*/
</style>