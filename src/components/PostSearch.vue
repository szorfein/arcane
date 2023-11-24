<template>
    <v-text-field
        hide-details
        density="compact"
        label="Search for..."
        prepend-icon="mdi-magnify"
        v-model="searchTerm"
        variant="solo-filled"
        single-line
        type="text"
        @input="$emit('search', searchTerm)"
    ></v-text-field>
</template>

<script setup>
 import { ref } from 'vue'
 const searchTerm = ref('')
</script>
