<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <AppBar />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>
