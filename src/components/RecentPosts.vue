<template>
    <h2 class="text-h4 mb-8">Most recent</h2>
    <v-row v-for="categorie in posts">
        <v-col v-for="post in categorie.posts"
               :key="post.date"
               cols="12"
               xs="12"
               sm="6"
               md="4"
        >
            <PostCard
                :title="post.title"
                :url="`/post/${ post.slug }`"
                :tags="post.tags"
                :description="post.description"
            />
        </v-col>
    </v-row>
</template>

<script setup>
 import { posts } from '@/zola-stores/all-posts.js'
 import PostCard from './card/recent.vue'
</script>
