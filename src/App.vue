<template>
    <v-app id="bg">
        <div>
            <v-toolbar app id="header">
                <v-toolbar-title class="hidden-xs-only">
                    MUSIC SEARCH APP
                </v-toolbar-title>
                <v-spacer/>
                <span>Total score: {{playerScore}}:{{computerScore}} (You - Computer)</span>
                <v-btn icon v-on:click="help">
                    <v-icon color="white">
                        mdi-information
                    </v-icon>
                </v-btn>
            </v-toolbar>
        </div>
        <Main/>
        <div>
            <v-footer class="pa-3" id="footer">
                <span>&copy; 4 group </span>
                <v-spacer/>
                <v-btn v-on:click="resetData" dark color="#222255">Reset</v-btn>
            </v-footer>
        </div>
    </v-app>
</template>

<script>

    import {mapGetters} from "vuex";
    import Main from "./views/Main";

    export default {
        name: "App",
        data() {
            return {
                //
            };
        },

        methods: {
            resetData: {
                //todo: implement method
            },
            help: {
                //todo: this one too
            }
        },

        components: {
            Main
        },
        computed: {
            ...mapGetters(["computerScore", "playerScore"])
        }
    };
</script>

<style>
    #header {
        background-color: #222255;
        color: whitesmoke;
        font-family: "Roboto", sans-serif;
    }

    #footer {
        background-color: #222255;
        color: whitesmoke;
        font-family: "Roboto", sans-serif;
    }

    #bg {
        background: #3A1C71;
        background: -webkit-linear-gradient(to bottom, #FFAF7B, #D76D77, #3A1C71);
        background: linear-gradient(to bottom, #FFAF7B, #D76D77, #3A1C71);
    }
</style>