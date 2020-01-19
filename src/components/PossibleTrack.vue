<template>
  <v-card max-width="350" class="mx-auto">
    <v-card-title>Artist</v-card-title>
    <v-card-subtitle>Track name</v-card-subtitle>
    <v-card-text>
      <iframe
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=250&height=250&color=ff0000&layout=&size=medium&type=tracks&id=3135556&app_id=1"
        width="250"
        height="250"
        class="ml-5"
      ></iframe>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="green">Correct</v-btn>
      <v-btn text color="red">Incorrect</v-btn>
    </v-card-actions>
  </v-card>
</template>