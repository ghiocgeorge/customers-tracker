<template>
  <v-row id="routerAlive"> 
    <router-view/>
  </v-row>
</template>

<style scoped>
  #routerAlive {
    max-width: auto;
    margin-top: 15px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid lightgrey;
  }
</style>