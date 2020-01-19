<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
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
                                                <v-btn color="primary">Play!</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>

                                </v-toolbar>
                                <v-card>
                                    <v-toolbar>
                                        <v-tabs dark background-color="primary" grow slider-color="yellow">
                                            <v-tab>
                                                Input lyrics
                                            </v-tab>
                                            <v-tab>
                                                Record
                                            </v-tab>

                                            <v-tab-item>
                                                <v-card>
                                                    <v-textarea color="teal">
                                                        <!--TODO: BIND V-MODEL, fix css-->
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
                                                                        :attempts="3"
                                                                        :time="2"
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
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "StartPage",
        methods: {
            callback(msg) {
                console.debug('Event: ', msg)
            }
        },
    }
</script>

<style scoped>
    .elevation-24 {
        top: -250px
    }

    .audio-recorder {
        align-items: center;
    }
</style>