<template>
  <v-row>
    <v-tabs
      color="black"
      show-arrows
      hide-slider
      active-class = "grey lighten-2"
    >
      <v-tab
        :class="`rounded-tr-xl`"
        class="py-3"
        id="firstTab"
        to="/"
      >
        All Contacts
      </v-tab>
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        :class="'rounded-t-xl'"
        class="py-3"
        id="newTab"
        @click="$router.push({ path: `/segment/${tab.id + 1}` })"
        active
      >
        {{ tab.name }}
      </v-tab>
      <v-tab
        :class="`rounded-t-xl`"
        class="py-3"
        id="newTab"
        to="/addsegment"
      >
        <v-icon medium> mdi-plus-thick </v-icon>
      </v-tab>
    </v-tabs>
  </v-row>
</template>

<script>
import tabsData from '../store/tabsData.js'

export default {
  data() {
    return {
      tabs: tabsData
    } 
  }
}
</script>

<style scoped>
  #containerTab{
    max-width: auto;
    padding-block: 18px;
    padding-inline: 20px;
  }

  #firstTab {
    text-transform: capitalize;
    margin-right: 1px;
    padding-inline: 90px;
    font-size: 18px;
    font-family: 'Lato';
    background-color:#f6f6f6;
  }

  #newTab {
    text-transform: capitalize;
    margin: 1px;
    padding-inline: 20px;
    font-size: 18px;
    font-family: 'Lato';
    background-color:#f6f6f6;
  }

  #routerAlive {
    max-width: auto;
    margin-top: 16px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid lightgrey;
  }
</style>
