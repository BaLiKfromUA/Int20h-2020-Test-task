<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-start justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card class="elevation-24">
                                <v-toolbar color="primary" dark flat>
                                    <v-container>
                                        <v-layout align-center justify-end>
                                            <v-flex xs12 sm8 md5/>
                                            <v-flex xs12 sm8 md5>
                                                <v-toolbar-title>Start page</v-toolbar-title>
                                            </v-flex>
                                            <v-flex xs12 sm8 md2>
                                                <v-btn color="primary" v-on:click="sendData">Play!</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-toolbar>
                                <v-card>
                                    <v-toolbar>
                                        <v-tabs dark background-color="primary" grow slider-color="yellow"
                                                v-model="selectedTab">
                                            <v-tab key='input'>
                                                Input lyrics
                                            </v-tab>
                                            <v-tab key='sound'>
                                                Record
                                            </v-tab>

                                            <v-tab-item>
                                                <v-card>
                                                    <v-textarea color="teal"
                                                                v-model="inputText"
                                                                counter="counter">
                                                        <template v-slot:label>
                                                            <div>
                                                                Lirycs
                                                            </div>
                                                        </template>
                                                    </v-textarea>
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item>
                                                <v-container>
                                                    <v-layout align-center justify-center>
                                                        <v-flex xs12 sm8 md10>
                                                            <v-card class="audio-recorder" flat>
                                                                <audio-recorder
                                                                        upload-url="some url"
                                                                        :attempts="1"
                                                                        :time="1"
                                                                        :before-recording="callback"
                                                                        :after-recording="callback"
                                                                        :before-upload="callback"
                                                                        :successful-upload="callback"
                                                                        :failed-upload="callback"/>
                                                            </v-card>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-tab-item>

                                        </v-tabs>
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
    </div>

</template>

<script>
    export default {
        name: "StartPage",
        data: () => ({
            inputText: '',
            counter: 0,
            selectedTab: 0,
            dialog: false,
            errorMessage: "",
        }),
        methods: {
            callback(msg) {
                console.debug('Event: ', msg)
            },
            sendData() {
                if (this.selectedTab === 0) {
                    this.sendText();
                } else {
                    this.sendAudio();
                }

            },
            sendAudio() {
                // todo: validate and send
            },
            sendText() {
                if (this.inputText === '') {
                    this.errorMessage = "test message"; // todo: fix message
                    this.dialog = true;
                } else {
                    const global_object = this;// КОСТЫЛЬ:(

                    var params = {
                        'q': this.inputText,
                        'api_token': '36351251f0a904a517a8e22555117a41'
                    };

                    $.getJSON('https://api.audd.io/findLyrics/?jsonp=?', params, function (data) {

                        if (data === null || data.status === "error") {
                            global_object.errorMessage = "test message"; // todo: fix message
                            global_object.dialog = true;
                        } else {
                            let track_array = data.result;
                            global_object.$store.commit("setTracks", track_array);
                            global_object.$store.commit("setStage", "verdict");
                        }
                    });
                }
            }
        },
        mounted() {
            this.selectedTab = 0;
        },
    }
</script>

<style scoped>
    .audio-recorder {
        align-items: center;
    }
</style>