<template>
    <v-toolbar color="surface">
        <v-responsive max-width="344">
            <v-text-field
                hide-details
                clearable
                density="compact"
                label="Search for..."
                prepend-icon="mdi-magnify"
                v-model="searchTerm"
                single-line
                type="text"
            ></v-text-field>
        </v-responsive>
    </v-toolbar>
    <v-row>
        <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            v-for="(post, index) in getFilteredBlogs()"
            :key="index"
        >
            <PostCard
                :title="post.title"
                :url="`/post/${ post.slug }`"
                :date="post.date"
                :tags="post.tags"
                :description="post.description"
            />
        </v-col>
    </v-row>
</template>

<script setup>
 import { ref } from 'vue'
 import { posts } from '@/zola-stores/posts_linux.js'
 const searchTerm = ref('')
 import PostCard from './card/post.vue'

 const getFilteredBlogs = () => {
     return posts.filter(post => post.title.toLowerCase()
                                     .includes(searchTerm.value.toLowerCase())
     );
 };
</script>
