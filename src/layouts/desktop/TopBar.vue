<script setup>
</script>

<template>
    <v-app-bar style="position: fixed;">
         <template v-slot:prepend>
             <v-app-bar-nav-icon />
         </template>

         <v-app-bar-title><RouterLink to="/">Arcane</RouterLink></v-app-bar-title>

         <nav>
             <RouterLink to="/">Home</RouterLink>
             <RouterLink to="/posts">/ Posts </RouterLink>
             <RouterLink to="/about">/ About</RouterLink>
         </nav>

        <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>
