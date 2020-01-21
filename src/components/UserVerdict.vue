<template>
    <div>
        <v-app>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm6 md6 lg4 xl4>
                            <v-card max-width="350" min-width="350" class="mx-auto">
                                <v-card-title>{{artistName}}</v-card-title>
                                <v-card-subtitle>{{trackName}}</v-card-subtitle>
                                <v-card-text>
                                    <v-container>
                                        <v-layout align-center justify-center>
                                            <v-flex xs12 sm12 md12 lg12 xl12>
                                                <iframe
                                                        v-if="hasLink"
                                                        scrolling="no"
                                                        frameborder="0"
                                                        allowtransparency="true"
                                                        :src=link
                                                        width="250"
                                                        height="250"
                                                        class="ml-5"/>
                                                <span v-if="!hasLink">This track is not on Deezer!</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions v-if="!showTryAgain">
                                    <v-btn text color="green" v-on:click="correct">Correct</v-btn>
                                    <v-spacer/>
                                    <v-btn text color="red" v-on:click="incorrect">Incorrect</v-btn>
                                </v-card-actions>
                                <v-card-actions v-if="showTryAgain">
                                    Would you like me to try again?
                                    <v-btn text color="green" v-on:click="tryAgainYes">Yes</v-btn>
                                    <v-btn text color="red" v-on:click="tryAgainNo">No</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import MusicAPI from "../util/api"

    export default {
        name: "PossibleTrack",
        data: () => ({
            artistName: "Artist",
            trackName: "Track name",
            trackId: "85963521",
            link: "",
            counter: 0,
            showTryAgain: false,
            hasLink: false,
            api: new MusicAPI({
                baseURL: `https://cors-anywhere.herokuapp.com/https://api.audd.io/findLyrics/`,
                token: "36351251f0a904a517a8e22555117a41"
            })
        }),
        methods: {
            correct() {
                this.counter++
            },

            incorrect() {
                this.showTryAgain = true
            },

            tryAgainYes() {
                // TODO: resend the request to API
            },

            tryAgainNo() {
                this.$store.commit("startNewGame")
            }
        },
        async mounted() {
            let track = this.$store.getters.getTopTrack

            if (track !== null) {
                this.artistName = track["artist"]
                this.trackName = track["title"]

                const response = await this.api.getTrackURL({artist: this.artistName, title: this.trackName})

                this.hasLink = !(response === false)
                this.link = response
            } else {
                this.hasLink = true
            }
        }
    }
</script>