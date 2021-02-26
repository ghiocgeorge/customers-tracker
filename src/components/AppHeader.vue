<template>
  <v-container id="containerHeader" fluid>
    <v-row>
      <v-col cols="auto" class="mr-auto">
        <v-icon left id="backIcon" @click="action"> mdi-arrow-left </v-icon>
        <a id="name">Name</a>
      </v-col>

      <v-col cols="auto" class="mt-3">
        <button id="delBtn" v-ripple class="elevation-2 py-2 px-4" @click="action">
          Delete List
        </button>
      </v-col>
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

<style scoped>
  #containerHeader {
    padding-inline: 0px;
  }

  #backIcon{
    padding-bottom:12px; 
    color:#21ce99; 
    padding-right: 5px
  }

  #name {
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
</style>
