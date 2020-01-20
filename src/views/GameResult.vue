<template>
    <div class="about">
        <PossibleTrack/>
    </div>
</template>


<script>
    import PossibleTrack from '@/components/PossibleTrack.vue'

    export default {
        name: 'gameResult',
        components: {
            PossibleTrack: PossibleTrack
        }
    }
</script>
