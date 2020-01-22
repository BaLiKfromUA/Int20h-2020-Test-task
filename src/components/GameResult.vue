<template>
    <v-app>
        <v-content>
            <v-container fluid class="flex-shrink-1">
                <v-layout align-center justify-start>
                    <v-card>
                        <v-toolbar color="#222255">
                            <v-toolbar-title>
                                {{ winner }} has won!
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-img v-if="playerWon" src="src/assets/playerWinner.png"/>
                        <v-img v-if="!playerWon" src="src/assets/computerWinner.png"/>
                        <v-card-actions>
                            <v-btn large v-on:click="playAgain">Play again</v-btn>
                            <v-btn large v-on:click="allResults">All results</v-btn>
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
                //todo: show all results
            }
        }
    }
</script>

<style scoped>

</style>