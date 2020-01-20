<template>
    <div class="home">
        <v-content>
            <game></game>
        </v-content>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GameProcess from "../components/GameProcess";

    export default {
        name: 'home',
        components: {
            "game": GameProcess
        }
    }
</script>
