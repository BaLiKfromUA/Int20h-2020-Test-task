<template>
    <v-app id="bg">
        <v-content>
            <v-container fluid class="flex-shrink-1">
                <v-layout align-start justify-center>
                    <v-card color="#222255">
                        <v-toolbar dark color="#222255">
                            <v-layout justify-center>
                                <v-toolbar-title>
                                    {{ winner }} has won!
                                </v-toolbar-title>
                            </v-layout>
                        </v-toolbar>
                        <v-img v-if="playerWon" :src="require('../assets/playerWinner.png')"/>
                        <v-img v-if="!playerWon" :src="require('../assets/computerWinner.png')"/>
                        <v-card-actions>
                            <v-btn dark color="#222255" large v-on:click="playAgain">Play again</v-btn>
                            <v-spacer/>
                            <v-btn dark color="#222255" large v-on:click="allResults">All results</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Result",

        computed: {
            ...mapGetters(["playerWon"]),

            winner: function () {
                return this.playerWon ? "Player" : "Computer";
            }
        },
        methods: {
            playAgain() {
                this.$store.commit("startNewGame");
            },

            allResults() {
                this.$store.commit("showVariants");
            }
        }
    }
</script>

<style scoped>

</style>