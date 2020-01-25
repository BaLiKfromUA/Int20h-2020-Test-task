<template>
    <v-app id="bg">
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md6 lg4 xl4>
                        <v-card max-width="500px" class="mx-auto">
                            <v-toolbar color="#222255" dark flat class="flex-shrink-1">
                                <v-container fluid>
                                    <v-layout align-center justify-center>
                                        <v-flex xs6/>
                                        <v-flex xs3>
                                            <v-toolbar-title>Search</v-toolbar-title>
                                        </v-flex>
                                        <v-flex xs1/>
                                        <v-flex xs3>
                                            <!--                                            <v-btn color="#222255" v-on:click="sendData">Play!</v-btn>-->
                                        </v-flex>
                                    </v-layout>

                                </v-container>
                            </v-toolbar>
                            <v-card>
                                <v-tabs dark background-color="#222255" grow slider-color="yellow"
                                        v-model="selectedTab">
                                    <v-tab key='input'>
                                        Input lyrics
                                    </v-tab>
                                    <!--                                        <v-tab key='sound'>-->
                                    <!--                                            Record-->
                                    <!--                                        </v-tab>-->
                                    <v-tab-item>
                                        <v-card>
                                            <v-textarea color="teal"
                                                        v-model="inputText"
                                                        counter="counter"
                                                        @keypress="liveCharCountDown">
                                                <template v-slot:label>
                                                    <div>
                                                        Lyrics
                                                    </div>
                                                </template>
                                            </v-textarea>
                                            <v-card-text v-if="tooLong">
                                                Too many characters!
                                            </v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                    <!--                                        <v-tab-item>-->
                                    <!--                                            <v-container>-->
                                    <!--                                                <v-layout align-center justify-center>-->
                                    <!--                                                    <v-flex xs10 sm10 md10 class="flex-shrink-1">-->
                                    <!--                                                        <v-card id="audio-recorder" flat class="mx-auto">-->
                                    <!--                                                            <audio-recorder-->
                                    <!--                                                                    upload-url="some url"-->
                                    <!--                                                                    :attempts="1"-->
                                    <!--                                                                    :time="1"-->
                                    <!--                                                                    :before-recording="callback"-->
                                    <!--                                                                    :after-recording="callback"-->
                                    <!--                                                                    :before-upload="callback"-->
                                    <!--                                                                    :successful-upload="callback"-->
                                    <!--                                                                    :failed-upload="callback"/>-->
                                    <!--                                                        </v-card>-->
                                    <!--                                                    </v-flex>-->
                                    <!--                                                </v-layout>-->
                                    <!--                                            </v-container>-->
                                    <!--                                        </v-tab-item>-->
                                </v-tabs>
                                <v-toolbar dark color="#222255" v-on:click="sendData">
                                    <v-layout align-center justify-center>
                                        <v-toolbar-title>
                                            Play
                                        </v-toolbar-title>
                                    </v-layout>
                                </v-toolbar>
                            </v-card>
                        </v-card>
                    </v-flex>
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
    import AudDAPI from "../util/audd_api"
    import {getVariants, preprocessInputText} from "../util/preprocessing"

    export default {
        name: "StartPage",
        data: () => ({
            inputText: '',
            counter: 0,
            tooLong: false,

            selectedTab: 0,

            dialog: false,
            errorMessage: "",

            api: new AudDAPI({
                baseURL: `https://cors-anywhere.herokuapp.com/https://api.audd.io/findLyrics/`,
                token: "a3f41af15f1a04e63a33174fe5265252"
            })
        }),

        methods: {

            liveCharCountDown($event) {
                if (this.inputText.length >= 100) {
                    $event.preventDefault()
                }
            },

            callback(msg) {
                console.debug('Event: ', msg)
            },
            async sendData() {
                if (this.selectedTab === 0) {
                    await this.sendText()
                } else {
                    this.sendAudio()
                }
            },
            async sendText() {
                const inputText = preprocessInputText(this.inputText);

                if (inputText === '') {
                    this.errorMessage = "A part of lyrics needs to be written!";
                    this.dialog = true
                } else {
                    const response = await this.api.getSongByText({text: inputText});

                    if (response === undefined || response.data.status === "error") {
                        this.errorMessage = "Response error. Check console log!";
                        this.dialog = true
                    } else {
                        let track_array = getVariants(response);
                        this.$store.commit("showPredictionResult", track_array)
                    }
                }
            },
            sendAudio() {
                // todo: validate and send
            },
        },
        mounted() {
            this.selectedTab = 0
        },
    }
</script>

<style scoped>
    /*#audio-recorder {*/
    /*    align-items: center;*/
    /*}*/
    #playButton {
        color: white
    }
</style>
