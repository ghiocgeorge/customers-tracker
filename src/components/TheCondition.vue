<template>
  <v-container id="containerHeader" fluid>
    <v-row id="conditionRow" fluid>
      <!-- // Column 1 -->
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-select
          v-model="selected[1]"
          :items="optionType"
          :rules="[rules.required]"
          label="Choose a condition"
          hide-details
          @change="clear([4,3,2])"
        ></v-select>
      </v-col>

      <!-- // Column 2 -->
      <v-col
        class="d-flex"
        cols="12"
        sm="2"
      >
        <v-select
          v-if="oneOption.includes(selected[1])"
          v-model="selected[2]"
          :rules="[rules.required]"
          :items="optionCondition"
          label="Choose a condition"
          hide-details
          @change="clear([4])"
        ></v-select>
        <v-select
          v-if="multipleOption.includes(selected[1])"
          v-model="selected[2]"
          :rules="[rules.required]"
          :items="[{value: '0', text: 'is'}]"
          label="Choose a condition"
          hide-details
          @change="clear([4])"
        ></v-select>
      </v-col>

      <!-- // Column 3 -->
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <!-- // The first date picker -->
        <v-menu
          v-if="dateType.includes(selected[1])"
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="selected[3]"
              label="Picker a date"
              prepend-icon="mdi-calendar"
              readonly
              :rules="[rules.required]"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="selected[3]"
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>

        <!-- //The first value input -->
        <v-text-field
          v-if="selected[1] == 4"
          :rules="[rules.required]"
          value=""
          label="Type a value"
          prefix="$"
          v-model="selected[3]"
        ></v-text-field>

        <!-- //The app status input -->
        <v-select
          v-if="selected[1] == 5"
          :rules="[rules.min]"
          v-model="selected[3]"
          :items="optionStatus"
          label="Choose statuses"
          multiple
        >
          <template v-slot:selection="{ index }">
            <span
              v-if="index === 0"
              class="grey--text caption"
            >
              {{ selected[3].length }} selected
            </span>
          </template>
        </v-select>

        <!-- //The referrer input -->
        <v-select
          v-if="selected[1] == 6"
          :rules="[rules.min]"
          v-model="selected[3]"
          :items="optionReferrer"
          label="Choose referrers"
          multiple
        >
          <template v-slot:selection="{ index }">
            <span
              v-if="index === 0"
              class="grey--text caption"
            >
              {{ selected[3].length }} selected
            </span>
          </template>
        </v-select>
      </v-col>

      <!-- // Column 4 -->
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <!-- // The second date picker -->
        <v-menu
          v-if="
            dateType.includes(selected[1]) && 
            selected[2] == 3"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="selected[4]"
              :rules="[rules.required]"
              label="Picker a date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="selected[4]"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
        
        <!-- //The second value input -->
        <v-text-field
          v-if="selected[1] == 4 && selected[2] == 3"
          label="Type a value"
          :rules="[rules.required]"
          value=""
          prefix="$"
          v-model="selected[4]"
        ></v-text-field>
      </v-col>

      <!-- // Column 5 -->
      <v-col
        class="d-flex"
        cols="12"
        sm="1"
      >        
        <button @click="$emit('delete-me')">
          <v-btn
          icon
          x-small
          >
            <v-icon>mdi-close-thick</v-icon>
          </v-btn>
        </button>
      </v-col>
      <span v-if="error.length > 0" id="errorText">Errors: {{ error }}</span>
    </v-row>

    <!-- <v-row>
      <span>Selected: {{ selected }}</span>
    </v-row> -->

    <v-row>
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<script>
import mockData from '../store/mock-data.js'

  export default {
		props:['index', 'data'],
    data() {
      return {
        error: [],
        menu1: false,
        menu2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 1 || 'Required.',
        },
        oneOption: ['0','1','2','3','4'],
        dateType: ['0','1','2','3'],
        multipleOption: ['5','6'],
        optionStatus: [
          {
            value: '0',
            text: 'Pending'
          },
          {
            value: '1',
            text: 'Under Review'
          },
          {
            value: '2',
            text: 'Completed'
          }
        ],
        selected: [this.index],
        tableData: mockData,
        optionType: [
          {
            value: '0',
            text: 'Mortgage Renewal Date'
          },
          {
            value: '1',
            text: 'Client Created Date'
          },
          {
            value: '2',
            text: 'Closing Date'
          },
          {
            value: '3',
            text: 'First Payment Date'
          },{
            value: '4',
            text: 'Client Value'
          },
          {
            value: '5',
            text: 'Application Status'
          },
          {
            value: '6',
            text: 'Referrer'
          }
        ],
        optionCondition: [
          {
            value: '0',
            text: 'Is'
          },
          {
            value: '1',
            text: 'Is larger than'
          },
          {
            value: '2',
            text: 'Is less than'
          },
          {
            value: '3',
            text: 'Is between'
          }
        ]
      } 
    },
    computed: {
      optionReferrer() {
        return this.tableData.map(el => {
          return {
            value : el.referrer.id,
            text: el.referrer.givenName + " " + el.referrer.familyName
          }
        });
      }
    },
    watch: {
      selected() {
        // Before I send the data to "AddSegment" parent component
        // All fields are required
        // If date format: YYYY-MM-DD
        // If start date < end date
        // If value input is type: number
       
        this.error = [];
        if (this.selected[1] != null &&
          this.selected[2] != null && 
          (this.selected[3] != null && this.selected[3] != "")) {
            // Type: date
            if (this.dateType.includes(this.selected[1])) {
              if (!(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.
                test(this.selected[3]))) {
                  this.error.push("Please enter a date that " + 
                    "respects the YYYY-MM-DD pattern!");
              }
              if (this.selected[2] == 3) {
                if(this.selected[4] != null &&
                  this.selected[4] != "") {
                  if (!(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.
                    test(this.selected[3]))) {
                      this.error.push("Please enter a date that respects" + 
                        "the YYYY-MM-DD pattern!");
                  } else {
                    if (this.selected[3] >= this.selected[4]) {
                      this.error.push(
                        "The Start date must be < than the end date");
                    }
                  }
                } else {
                  this.error.push("You have empty inputs!");
                }
              }
            }
            
            // Type: value
            if (this.selected[1] == 4) {
              if (!(/^-?[0-9][0-9,.]*$/.test(this.selected[3]))) {
                this.error.push("For value, you must type only digits and " + 
                  "for decimal, you can use ',' or '.'!");
              }
              if (this.selected[2] == 3) {
                if (this.selected[4] != null &&
                  this.selected[4] != "") {
                  if(!(/^-?[0-9][0-9,.]*$/.test(this.selected[4]))) {
                    this.error.push("For value, you must type only digits and " + 
                      "for decimal, you can use ',' or '.'!");
                  }
                } else {
                  this.error.push("You have empty inputs!");
                }
              }
            }
        } else {
          this.error.push("You have empty inputs!");
        }
        if (this.error.length == 0) {
          this.$emit("add");
          this.$emit("send", this.selected);
        }
      }
    },
    methods: {
      clear(foo) {
        for (var fo in foo) {
          this.selected.splice(foo[fo],1);
        }
      }
    }
  }
</script>

<style scoped>
  #containerHeader {
    padding: 0px;
    margin: 0px;
  }

  #conditionRow {
    padding-block: 0px;
    margin-top: 0px;
  }

  #errorText {
    padding-top: 0px;
    margin-top: 0px;
    color: red;
    padding-left: 20px;
  }
</style>
