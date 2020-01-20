<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
