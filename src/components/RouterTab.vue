<template>
  <v-container id="containerTab" fluid>
    <TabScroll/>
    <RouterAlive/>
  </v-container>
</template>

<script>
import TabScroll from './TabScroll';
import RouterAlive from './RouterAlive';

export default {
  components: {
    TabScroll, 
    RouterAlive
  },
};
</script>

<style scoped>
  #containerTab{
    max-width: auto;
    padding-block: 18px;
    padding-inline: 20px;
  }
</style>
