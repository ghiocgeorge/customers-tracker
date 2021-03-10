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
      <v-col cols="auto">
        <v-tooltip color="red" left v-if="error.length > 0">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="red"
              v-bind="attrs"
              v-on="on"
            >
              mdi-alert-circle-outline
            </v-icon>
          </template>
          <span>{{error[0]}}</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row v-if="error.length > 0" id="errorRow"></v-row>
    <TheCondition 
      v-for="(condition, index) in conditions" 
      :data="condition"  
      :key="condition.id"
      :index="index"
      v-on:delete-me="delCondition(index)"
      v-on:add="cpyIndex(index)"
      v-on:send="addCondition"
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
          @click="newTab"
        >
          Create Segment
        </button>
      </v-col>
    </v-row>
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
      error: [],
      copyIndex: undefined,
      conditions: [{id: 0,}],
      logicalOp: undefined,
      rules: {
        required: value => !!value || 'Required.',
      },
      tableData: mockData,
      tabs: tabsData,
    } 
  },
  watch: {
    logicalOp() {
      this.error = [];
      if(this.logicalOp == null || this.logicalOp == "") {
        this.error.push("You have empty inputs!");
      }
    }
  },
  methods: {
    newTab() {  
      this.error = [];
      if(this.logicalOp == null || this.logicalOp == "") {
        this.error.push("You have empty inputs!");
        alert("You have empty inputs!");
      }
      const found = this.conditions.find(x => x.value == undefined);
      if(found) {
        alert("You have empty conditions!");
      }
      if(this.conditions.length == 0) {
        alert("You have didn't select any condition. Please select one!")
      }
      if (this.error.length == 0 && found == undefined && this.conditions.length > 0) {
        var addTab = {
          id: this.tabs.length,
          name: "Segment " + (this.tabs.length + 1),
          operator: this.logicalOp,
          conditions: this.conditions.map(x=>x.value)
        };
        this.tabs.push(addTab);
        this.$router.push({ path: `/segment/${addTab.id + 1}` });
      }  
    },
    newCondition() {  
      this.conditions.push({
          id: this.conditions.length,
        });
    },
    delCondition(index) {  
      this.conditions.splice(index,1);
    },
    cpyIndex(index) {  
      this.copyIndex = index;
    },
    addCondition(valu) {  
      this.conditions[this.copyIndex].value = valu.map((x) => x);
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
  
  #errorRow {
    margin-top: 10px;
    padding-left: 20px;
    border-top: 1px solid red;
  }
  
  #errorText {
    padding-top: 0px;
    margin-top: 0px;
    color: red;
    padding-left: 20px;
  }
</style>
