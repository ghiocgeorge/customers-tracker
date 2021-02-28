<template>
    <v-data-table
        :headers="config"
        :items="theData"
        :search="search"
        :items-per-page = "perPage"
        hide-default-footer
    ></v-data-table>
</template>

<script>
export default {
    props: ['theData', 'config', 'perPage'],
    data: function () {
        return {
            search: '',
        }
    }
}
</script>