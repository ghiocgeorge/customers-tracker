<template>
  <v-container id="containerTab" fluid>
    <TabScroll/>
    
    <v-row id="routerAlive"> 
      <router-view/>
      <!-- <v-row > 
        <div v-for="tab in tabs" :key="tab.id">
          <div v-if="tab.isActive == true">
            {{ tab.query }}
          </div>
        </div> 
      </v-row> -->
    </v-row>
  </v-container>
</template>

<script>
  import TabScroll from './TabScroll';

  export default {
    components: {
      TabScroll,  
    },
  };
</script>

<style scoped>
  #containerTab{
    max-width: auto;
    padding-block: 18px;
    padding-inline: 20px;
  }

  #routerAlive {
    max-width: auto;
    margin-top: 5px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid lightgrey;
  }
</style>
