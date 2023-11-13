<script setup>
 const items = [
     { title: 'Home', props: { to: '/', color: 'primary', prependIcon: 'mdi-home' }},
     { title: 'Posts', props: { to: '/posts', color: 'primary', prependIcon: 'mdi-post' }},
     { title: 'About', props: { to: '/about', color: 'primary', prependIcon: 'mdi-account' }},
 ]
</script>

<template>
    <v-navigation-drawer width="244">
        <h4 class="text-h4 ma-5">Arcane</h4>
        <nav>
            <v-list :items="items" nav></v-list>
        </nav>
    </v-navigation-drawer>
</template>
