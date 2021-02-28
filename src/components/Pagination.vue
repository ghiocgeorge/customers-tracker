<template>
    <v-row fluid>
        <v-col cols="auto" class="mr-auto" id="recordsCol">
            <a id="records"> Showing {{ rec }} of {{ records }} records </a>
        </v-col>

        <v-col cols="auto" class="mt-3">
            <v-pagination
                v-model="page"
                :length="pages"
                total-visible="10"
                @previous="changePage()"
                @next="changePage()"
                @input="changePage()"
                color="#21cc99"
            ></v-pagination>
        </v-col>
    </v-row>
</template>

<script>

export default {
    props: ['totalRecords', 'perPageOptions'],
    data: function () {
        
        if(this.totalRecords < this.perPageOptions[0]) {
            this.rec = this.totalRecords
        } else {
            this.rec = this.perPageOptions[0]
        }

        return {
            page: 1,
            perPage: this.perPageOptions[0],
            records: this.totalRecords,
            rec : this.rec,
        }
    },
    computed: {
        pages () {
            const remainder = this.totalRecords % this.perPage
            if (remainder > 0) {
                return Math.floor(this.totalRecords / this.perPage) + 1
            } else {
                return this.totalRecords / this.perPage
            }
        }
    },
    methods: {
        changePage () {
            if(this.page == this.pages && this.totalRecords % this.perPage != 0) {
                this.rec = this.totalRecords % this.perPage;
            } else {
                this.rec = this.perPage
            }
            this.$emit('input', { page: this.page, perPage: this.perPage , rec: this.rec})
        }
    }
}
</script>

<style scoped>
    #recordsCol {
        margin-top: 22px;
    }

    #records {
        margin-bottom: 0px;
        padding-bottom: 0px;
        font-size: 15px;
        font-family: 'Lato';
        color: rgb(48, 48, 48)
    }
</style>