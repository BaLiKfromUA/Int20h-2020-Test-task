<template>
  <div class="home">
<!--        <StartPage/>-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--     <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <PossibleTrack/>
  </div>
</template>

<script>
// @ is an alias to /src
// import StartPage from '@/components/StartPage.vue'
import PossibleTrack from '@/components/PossibleTrack.vue'

export default {
  name: 'home',
  components: {
    // StartPage: StartPage,
    PossibleTrack
  }
}
</script>
