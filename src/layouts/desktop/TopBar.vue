<script setup>
 const items = [
     { title: 'Home', props: { to: '/', color: 'primary', prependIcon: 'mdi-home' }},
     { title: 'Posts', props: { to: '/posts', color: 'primary', prependIcon: 'mdi-post' }},
     { title: 'About', props: { to: '/about', color: 'primary', prependIcon: 'mdi-account' }},
 ]
</script>

<template>
    <v-navigation-drawer width="224" class="h-100 dbg" style="position: fixed;">
        <h4 class="text-h4 ma-8">Arcane</h4>

        <v-divider></v-divider>

        <nav>
            <v-list :items="items" nav></v-list>
        </nav>
    </v-navigation-drawer>
</template>

<style>
 .dbg {
     background-color: rgb(var(--v-theme-background));
 }
</style>
