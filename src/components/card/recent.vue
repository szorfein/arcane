<template>
    <v-card :to="url" variant="flat" rounded="lg">
        <template v-slot:item>
            <v-row align="center" justify="center">
                <v-btn :to="`/tag/${ tags }`"
                       variant="outlined"
                       class="text-primary mt-4"
                       rounded="lg"
                >
                    {{ tags }}
                </v-btn>
            </v-row>
            <v-row align="center" justify="center">
                <h5 class="text-h4 mt-6 mb-3">{{ title }}</h5>
            </v-row>
        </template>
        <template v-slot:subtitle></template>
        <template v-slot:text>
            <v-row align="center" justify="center">
                <div class="mt-6 mb-4">
                    {{ description }}
                </div>
            </v-row>
        </template>
    </v-card>
</template>

<script setup>
 const { title, url, tags, description } = defineProps([
     'title', 'url', 'tags', 'description'
 ])
</script>
