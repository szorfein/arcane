<template>
    <v-row>
        <v-col
            xs="12"
            sm="6"
            lg="4"
            v-for="post in posts"
            :key="post.date"
        >
            <PostCard
                :title="post.title"
                :url="`/post/${ post.slug }`"
                :date="post.date"
                :description="post.description"
            />
        </v-col>
    </v-row>
</template>

<script setup>
 import { posts } from '@/zola/posts_linux.js'
 import PostCard from './PostCard.vue'
</script>
