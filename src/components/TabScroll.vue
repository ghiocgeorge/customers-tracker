<template>
  <v-row>
    <v-tabs color="black">
      <v-tabs-slider color="black"></v-tabs-slider>

      <v-tab :class="`rounded-tr-xl`" class="py-3" id="textTab" active to="/">
        All Contacts
      </v-tab>

      <v-tab v-for="tab in tabs" :key="tab.id" @click.stop.prevent="setActive(tab)"
        :class="'rounded-t-xl'" class="py-3" id="newTab" active>
        Segment {{ tab.id + 1 }}
      </v-tab>

      <v-tab role="presentation" to="/addsegment" :class="`rounded-t-xl`" class="py-3" id="newTab">
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
        tabs: tabsData,
        activeTab: {}
      } 
    },
    methods: {
      setActive(tab) {
        var self = this;
        tab.isActive = true;
        this.activeTab = tab;
        this.tabs.forEach(function (tab) {
          if (tab.id !== self.activeTab.id) { 
            tab.isActive = false;
          }
        });
        const tid = tab.id + 1;
        this.$router.push({ path: `/segment/${tid}` });
      },
      newTab() {        
        var addTab = {
          id: this.tabs.length,
          query: "Segment " + (this.tabs.length + 1),
          isActive: true
        };
        this.tabs.push(addTab);
        this.setActive(addTab);
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

  #textTab {
    text-transform: capitalize;
    margin-right: 1px;
    padding-inline: 90px;
    font-size: 18px;
    font-family: 'Lato';
    background-color:rgb(228, 228, 228);
  }

  #newTab {
    text-transform: capitalize;
    margin: 1px;
    padding-inline: 20px;
    font-size: 18px;
    font-family: 'Lato';
    background-color:rgb(228, 228, 228);
  }

  #addTab {
    text-transform: capitalize;
    margin: 1px;
    background-color:rgb(204, 204, 204);
  }

  #routerAlive {
    max-width: auto;
    margin-top: 16px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid lightgrey;
  }
</style>
