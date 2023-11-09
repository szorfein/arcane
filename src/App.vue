<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <AppBar />
      <v-main>
        <RouterView />
        <Footer />
      </v-main>
    </v-layout>
  </v-app>
</template>
