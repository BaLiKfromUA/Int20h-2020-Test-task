<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container
                        fluid
                        fill-height
                >
                    <v-layout
                            align-center
                            justify-center
                    >
                        <v-flex
                                xs12
                                sm8
                                md4
                        >
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="primary"
                                        dark
                                        flat
                                >
                                    <v-toolbar-title>Start page</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-toolbar>
                                        <v-tabs
                                                dark
                                                background-color="primary"
                                                grow
                                        >
                                            <v-tab>
                                                Input lirycs
                                            </v-tab>

                                            <v-tab>
                                                Record sound
                                            </v-tab>

                                            <v-tab-item>

                                                <v-textarea
                                                        color="teal"
                                                ><!--TODO: BIND V-MODEL, fix css-->
                                                    <template v-slot:label>
                                                        <div>
                                                            Lirycs
                                                        </div>
                                                    </template>
                                                </v-textarea>

                                            </v-tab-item>

                                            <v-tab-item>
                                                <audio-recorder
                                                        upload-url="some url"
                                                        :attempts="3"
                                                        :time="2"
                                                        :before-recording="callback"
                                                        :after-recording="callback"
                                                        :before-upload="callback"
                                                        :successful-upload="callback"
                                                        :failed-upload="callback"/>
                                            </v-tab-item>

                                        </v-tabs>
                                    </v-toolbar>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary">Play!</v-btn>
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

</style>