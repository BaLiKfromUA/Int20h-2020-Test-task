<template>
    <v-app id="bg">
        <div>
            <v-toolbar app id="header">
                <v-toolbar-title class="hidden-xs-only">
                    MUSIC SEARCH APP
                </v-toolbar-title>
                <v-spacer/>
                <span>Total score: {{playerScore}}:{{computerScore}} (You - Computer)</span>
                <v-btn icon @click="dialog = true">
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

        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Music Akinator</v-card-title>
                    <v-card-text>
                        Remember that applicaiton which was popular back in the days?
                        You know, you think of a person or a fictional character and a genie tries to guess it by asking the yes-no questions.
                        This app is something like that one except you actually give it some hints :^)
                        <br/>
                        <br/>
                        The idea of this application is that you write the lyrics of a song or upload its part and the application tries to figure out what song it is from. The app is also built in the form of a game - if the application does guess what song you think of - it wins. If not - you may let it try again (but not more than 3 attempts)
                        and if the app exhausts all attempts and still doesn't make a correct guess - you win. You may also use "All results" button to see what songs the app thought it could be (the variants are listed by descending priority and the one with highest priority is chosen).
                        <br/>
                        <br/>
                        It also really comes to handy if there's a song you only remember a part of but you have no idea what the song is.
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
    import Main from "./views/Main";

    export default {
        name: "App",
        data: () => ({
            dialog: false,
        }),

        methods: {
            resetData() {
                this.$store.commit("resetApp");
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