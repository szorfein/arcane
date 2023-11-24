<template>
    <v-toolbar color="surface">
        <v-btn icon @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>
            <v-btn :to="`/tag/${ tag }`" variant="text">
                {{ tag }}
            </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script setup>
 import { useRouter } from 'vue-router'
 const props = defineProps({
     tag: String,
 })
</script>
