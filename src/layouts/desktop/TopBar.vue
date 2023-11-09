<script setup>
</script>

<template>
    <v-app-bar style="position: fixed;">
         <template v-slot:prepend>
             <v-app-bar-nav-icon />
         </template>

         <v-app-bar-title><RouterLink to="/" class="text-decoration-none">Arcane</RouterLink></v-app-bar-title>

         <nav>
             <RouterLink to="/" class="text-decoration-none">Home</RouterLink>
             <RouterLink to="/posts" class="text-decoration-none">/ Posts </RouterLink>
             <RouterLink to="/about" class="text-decoration-none">/ About</RouterLink>
         </nav>

        <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>
