<template>
    <v-toolbar
        class="bg-surface"
    >
        <v-btn icon @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script setup>
 import { useRouter } from 'vue-router'
 const router = useRouter();
</script>
