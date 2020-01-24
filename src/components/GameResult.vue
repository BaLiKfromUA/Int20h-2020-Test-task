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
                        <v-card dark color="#222255">
                            <v-card-title>
                                What was the correct answer?
                            </v-card-title>
                            <v-card-actions v-if="showCorrectAnswerFields">
                                <v-text-field label="Artist name" v-model="artist"/>
                                <v-spacer/>
                                <v-text-field label="Song name" v-model="track"/>
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
                            <v-btn dark color="#222255" large v-on:click="allResults">All variants</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>

        <!--ERROR POP UP MESSAGE-->
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-card>
                    <v-card-title class="headline">Input error!</v-card-title>
                    <v-card-text>
                        {{errorMessage}}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-app>
</template>

<script>
    import {mapGetters} from "vuex";
    import {preprocessInputText} from "../util/preprocessing";

    export default {
        name: "Result",

        data: () => ({
            artist: "",
            track: "",
            dialog: false,
            errorMessage: "",
        }),

        computed: {
            ...mapGetters(["playerWon", "correctArtistName", "correctSongName", "showCorrectAnswerFields"]),

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
                let artist = preprocessInputText(this.artist);
                let track = preprocessInputText(this.track);

                if (artist === '' || track === '') {
                    this.errorMessage = "test message"; // todo: fix message
                    this.dialog = true
                } else {
                    this.$store.commit("setCorrectAnswer", {artist: artist, track: track});
                }
            }
        }
    }
</script>

<style scoped>
    #submitButton {
        padding-bottom: 10px;
    }
</style>