<template>
    <v-card max-width="350" class="mx-auto">
        <v-card-title>{{artistName}}</v-card-title>
        <v-card-subtitle>{{trackName}}</v-card-subtitle>
        <v-card-text>
            <iframe
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                    :src=link
                    width="250"
                    height="250"
                    class="ml-5"/>
        </v-card-text>
        <v-card-actions v-if="!showTryAgain">
            <v-btn text color="green" v-on:click="correct">Correct</v-btn>
            <v-btn text color="red" v-on:click="incorrect">Incorrect</v-btn>
        </v-card-actions>
        <v-card-actions v-if="showTryAgain">
            Would you like me to try again?
            <v-btn text color="green" v-on:click="tryAgainYes">Yes</v-btn>
            <v-btn text color="red" v-on:click="tryAgainNo">No</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "PossibleTrack",
        data: () => ({
            // TODO: either send counter value to the home page or edit the correct() method to edit the one there
            artistName: "Artist",
            trackName: "Track name",
            link: "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=250&height=250&color=ff0000&layout=&size=medium&type=tracks&id=3135556&app_id=1",
            counter: 0,
            showTryAgain: false
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
                // TODO: return to the home page
            }
        },
        mounted() {
            let track = this.$store.getters.getTopTrack;

            if (track !== null) {
                this.artistName = track["artist"];
                this.trackName = track["title"];
            }
        }
    }
</script>