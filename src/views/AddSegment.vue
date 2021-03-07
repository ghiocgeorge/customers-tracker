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
          @click.prevent="newTab"
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
        id: 1,
        error: [],
        copyIndex: undefined,
        conditions: [
          {
            id: 0,
            value: []
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
    watch: {
      logicalOp() {
        this.error = [];
        if(this.logicalOp == null || this.logicalOp == "") {
          this.error.push("You have empty inputs!");
        }
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
        // Before we make a new tab, here we filter the mockData
        // Then we send this filter to display in the new tab
        // But if we have an empty field, we only give an error message

        // Legend for conditions array 
        // position 0: id
        // position 1:  
            // 0 - Mortgage Renewal Date [mortgageRenewalDate]
            // 1 - Client Created Date [clientCreatedDate]
            // 2 - Closing Date [closingDate]
            // 3 - First Payment Date [firstPaymentDate]
            // 4 - Client Value [value]
            // 5 - Application Status [applicationStatus]
            // 6 - Referrer [referrer]
        // position 2:
            // 0 - Is 
            // 1 - Is larger than
            // 2 - Is less than
            // 3 - Is between
        // position 3: first value
        // position 4: 
            // second value (this will exist only if is selected "Is between")

        // Legend for logicalOp 
        // position 0: ANY
        // position 1: ALL

        this.error = [];
        if(this.logicalOp == null || this.logicalOp == "") {
          this.error.push("You have empty inputs!");
        }        
        if (this.error.length == 0) {
          var addTab = {
            id: this.tabs.length,
            query: "daout papa " + (this.tabs.length + 1),
            isActive: true
          };
          this.tabs.push(addTab);
          this.setActive(addTab);
        }  
      },
      newCondition() {  
        this.conditions.push({
            id: this.id++,
            value: []
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
