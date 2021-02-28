<template>
  <v-container fluid id="containerAll">
    
    <h1>This is a Filter Contacts page with id {{ id }}</h1>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search for a contact"
      hide-details
    ></v-text-field>
    
    <v-data-table
      :headers="config"
      :items="tableData"
      :items-per-page="5"
      :search="search"
      :hide-default-footer="true"
    >
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-data-footer 
          :pagination="pagination" 
          :options="options"
          @update:options="updateOptions"
          items-per-page-text="Contacts per page:"/>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import mockData from '../store/mock-data.js'

export default {
  props: ['id'],
  components: {
  },
  data: function () {
    return {
      page: 1,
      tableData: mockData,
      pagination: { },
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