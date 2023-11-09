<template>
    <v-row>
        <v-col cols="6" v-for="post in posts" :key="post.id">
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
