<template>
  <v-container id="containerHeader" fluid>
    <v-row class="justify-content: start;">
      <v-col cols="auto" class="mr-auto">
        <v-row>
          <span id="firstRow">Contacts match</span> 
          <v-select
              v-model="logicalOp"
              :rules="[rules.required]"
              :items="[
                {value: '0', text: 'any'},
                {value: '1', text: 'all'}
              ]"
              label="Choose a condition"
              dense
              solo
              hide-details
              type="text"
            ></v-select>
          <span id="firstRow">of the following: </span>
        </v-row>
      </v-col>
    </v-row>

    <!-- <component
    v-for="(component, index) in components"
    :key="index"
    :is="component"
    :index="index"
    v-on:delete-me="delCondition()">
    </component> -->

    <TheCondition v-for="(row, index) in children" :data="row" 
            v-on:delete-me="delCondition(index)" :key="row.id"
            :index="index"
            ></TheCondition>

    <v-row id="addConditionRow">
      <v-col cols="auto" class="mr-auto">
        <v-row>
          <button 
            id="addConditionBtn" 
            @click.prevent="newCondition"
          >
            + Add another condition
          </button>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" class="mr-auto">
      </v-col>

      <v-col cols="auto">
        <button 
          id="addSegmentBtn" 
          v-ripple 
          class="elevation-2 py-2 px-4" 
          @click.prevent="newTab"
        >
          Create Segment
        </button>
      </v-col>
    </v-row>
    
    <!-- <v-row> 
      <span>Logical Operation: {{ logicalOp }}</span>
    </v-row> -->
  </v-container>
</template>

<script>
import tabsData from '../store/tabsData.js'
import mockData from '../store/mock-data.js'
import TheCondition from '../components/TheCondition.vue'

  export default {
        components: {
          TheCondition
        },
    data() {
      return {
        id: 1,
        children: [
          {
            id: 0,
            value: "TheCondition"
          }
        ],
        logicalOp: undefined,
        rules: {
          required: value => !!value || 'Required.',
        },
        tableData: mockData,
        tabs: tabsData,
        activeTab: {},
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
      },
      newCondition() {  
        this.children.push({
            id: this.id++,
            value: "TheCondition2"
          });
      },
      delCondition(index) {  
        // alert("You want to delete the condition with id: " + index);
        this.children.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  #addConditionBtn {
    padding-top: 10px;
    font-size: 16px;
    color: #21cc99;  
  }

  #addSegmentBtn {
    background-color:#21cc99;
    border-radius: 4px;
    font-size:10px;
    color: white;  
  }

  #firstRow {
    padding: 10px;
  }
  
  #addConditionRow {
    padding-top: 20px;
  }
</style>
