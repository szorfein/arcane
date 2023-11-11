<template>
    <v-card
        :title="title"
        :to="url"
        link>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
        <v-card-text>{{ description }}</v-card-text>
    </v-card>
</template>

<script setup>
 const { title, url, date, description } = defineProps([
     'title', 'url', 'date', 'description'
 ])
</script>
