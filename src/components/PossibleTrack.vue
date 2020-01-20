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
            artistName: "Artist",
            trackName: "Track name",
            trackId: "85963521",
            link: "",
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

                const global_object = this;// КОСТЫЛЬ:(


                $.getJSON('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"' + this.artistName + '" track:"' + this.trackName + '"', function (data) {
                    console.log(data)

                    global_object.trackId = data["data"][0]["id"];
                    global_object.link = "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=250&height=250&color=ff0000&layout=&size=medium&type=tracks&id=" + global_object.trackId + "&app_id=1"
                });
            }


        }
    }
</script>