<template>
    <v-card :to="url" variant="flat" rounded="lg">
        <template v-slot:item>
            {{ date }}
            <v-btn :to="`/tag/${ tags }`" variant="text">{{ tags }}</v-btn>
            <h5 class="text-h4 mt-4 mb-3">{{ title }}</h5>
        </template>
        <template v-slot:subtitle>
        </template>
        <template v-slot:text>
            {{ description }}
        </template>
        <template v-slot:actions>
            <v-btn :to="url">Read</v-btn>
        </template>
    </v-card>
</template>

<script setup>
 const { title, url, date, tags, description } = defineProps([
     'title', 'url', 'date', 'tags', 'description'
 ])
</script>
