<template>
    <v-app id="bg">
        <v-container fluid>
            <v-layout align-start justify-center>
                <v-flex xs12 sm8 md6 lg6 xl4>
                    <v-card class="mx-auto">
                        <v-toolbar dark color="#222255">
                            <v-toolbar-title>
                                Results
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-simple-table dark>
                            <template v-slot:default>
                                <thead id="table-header">
                                <tr>
                                    <th class="text-left">Artist</th>
                                    <th class="text-left">Track</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in tracks" :key="item['artist']" id="table-rows">
                                    <td>{{ item["artist"]}}</td>
                                    <td>{{ item["track"] }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                    <v-toolbar dark color="#222255" v-on:click="playAgain">
                        <v-layout justify-center>
                            <v-toolbar-title>
                                Play again
                            </v-toolbar-title>
                        </v-layout>
                    </v-toolbar>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "VariantsTable",
        methods: {
            playAgain() {
                this.$store.commit("startNewGame");
            },
        },
        computed: {
            ...mapGetters(["tracks"]),
        }
    }
</script>

<style scoped>
    #table-header {
        background-color: #1D2951;
    }
    #table-rows {
        background-color: #1F223C;
    }
</style>