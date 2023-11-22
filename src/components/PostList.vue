<template>
    <v-row>
        <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            v-for="post in posts"
            :key="post.date"
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
 import { posts } from '@/zola-stores/posts_linux.js'
 import PostCard from './card/post.vue'
</script>
