<template>
    <div>
        <start-page v-if="stage === 'start'"></start-page>
        <possible-track v-if="stage === 'verdict'"></possible-track>
        <result v-if="stage === 'result'"></result>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import StartPage from "./Start";
    import PossibleTrack from "./Verdict";
    import Result from "./Result";

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