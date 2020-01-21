<template>
    <div>
        <start-page v-if="stage === 'start'"/>
        <possible-track v-if="stage === 'verdict'"/>
        <result v-if="stage === 'result'"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import StartPage from "./InputData";
    import PossibleTrack from "./UserVerdict";
    import Result from "./GameResult";

    export default {
        name: "GameProcess",
        computed: {
            ...mapGetters(["stage"])
        },
        components: {
            PossibleTrack,
            StartPage,
            Result
        },
    }
</script>

<style scoped>

</style>