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
                        <v-card v-if="playerWon" dark color="#222255">
                            <v-card-title>
                                What was the correct answer?
                            </v-card-title>
                            <v-card-actions v-if="showCorrectAnswerFields">
                                <v-text-field label="Artist name" v-model="correctArtistName"/>
                                <v-spacer/>
                                <v-text-field label="Song name" v-model="correctSongName"/>
                            </v-card-actions>
                            <v-card-text v-if="!showCorrectAnswerFields" class="headline">
                                {{ correctArtistName }} - {{ correctSongName }}
                            </v-card-text>
                            <v-layout v-if="showCorrectAnswerFields" justify-center id="submitButton">
                                <v-btn color="#222255" dark v-on:click="submitCorrectAnswer">Submit</v-btn>
                            </v-layout>
                        </v-card>
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

        data: () => ({
            showCorrectAnswerFields: true,
            correctArtistName: '',
            correctSongName: ''
        }),

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
            },

            submitCorrectAnswer() {
                this.showCorrectAnswerFields = false
            }
        }
    }
</script>

<style scoped>
    #submitButton {
        padding-bottom: 10px;
    }
</style>