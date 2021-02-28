<template>
  <v-container fluid id="containerAll">
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search for a contact"
      hide-details
    ></v-text-field>
    
    <Pagination
      v-if="tableData"
      v-model="pagination"
      :totalRecords="tableData.length"
      :perPageOptions="perPageOptions"
    />

    //This table it's working only with search bar
    <v-data-table
      :headers="config"
      :items="tableData"
      :search="search"
      :items-per-page = "perPageOptions"
      :pagination="pagination"
    ></v-data-table>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      
    //This table it's working only with pagination
    <Table
      v-if="tableData"
      :theData="computedTableData"
      :config="config"
      :perPage="perPageOptions"
      :search="search"
    />
  </v-container>
</template>

<script>
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import mockData from '../store/mock-data.js'
const perPageOptions = [6]

export default {
  components: {
    Table,
    Pagination
  },
  data: function () {
    return {
      perPageOptions,
      page: 1,
      perPage: perPageOptions[0],
      tableData: mockData,
      pagination: { page: 1, perPage: perPageOptions[0] },
      search: '',
      config: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          text: 'Source'
        },
        {
          value: 'familyName',
          text: 'First Name'
        },
        {
          value: 'givenName',
          text: 'Last Name'
        },
        {
          value: 'applicationStatus',
          text: 'App Status'
        },
        {
          text: 'Profile Status'
        },
        {
          value: 'value',
          text: 'Value'
        },
        {
          value: 'mortgageRenewalDate',
          text: 'Renewal Date',
          sortable: false,
        },
        {
          value: 'referrer.familyName',
          text: 'Referrer'
        },
        {
          text: 'OPT-IN'
        }
      ]
    }
  },
  computed: {
    computedTableData () {
      if (!this.tableData) return []
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage
        return this.tableData.slice(firstIndex, lastIndex)
      }
    }
  }
}
</script>

<style>
  #containerAll{
    max-width: auto;
    padding-block: 0px;
    padding-inline: 0px;
  }
</style>