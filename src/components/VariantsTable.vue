<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Artist</th>
                    <th class="text-left">Track</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in tracks" :key="item['artist']">
                    <td>{{ item["artist"]}}</td>
                    <td>{{ item["track"] }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-btn dark color="#222255" large v-on:click="playAgain">Play again</v-btn>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "VariantsTable",
        methods: {
            playAgain() {
                this.$store.commit("startNewGame");
            },
        },
        computed: {
            ...mapGetters(["tracks"]),
        }
    }
</script>

<style scoped>

</style>