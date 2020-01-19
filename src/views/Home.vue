<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PossibleTrack></PossibleTrack>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PossibleTrack from '@/components/PossibleTrack.vue'

export default {
  name: 'home',
  components: {
    PossibleTrack
  }
}
</script>
