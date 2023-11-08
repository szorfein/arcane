<script setup>
</script>

<template>
    <v-bottom-navigation mode="shift" style="position: fixed;">
        <v-btn to="/">
            <v-icon>mdi-home-city</v-icon>
            <span>Home</span>
        </v-btn>

        <v-btn to="/posts">
            <v-icon>mdi-post</v-icon>
            <span>Posts</span>
        </v-btn>

        <v-btn to="/about">
            <v-icon>mdi-account</v-icon>
            <span>About</span>
        </v-btn>
    </v-bottom-navigation>
</template>
