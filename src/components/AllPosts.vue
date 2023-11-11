<template>
    <v-container>
        <v-row v-for="categorie in posts">
            <h2 class="text-h2">{{ categorie.title }}</h2>

            <v-col v-for="post in categorie.posts">

                <PostCard
                    :title="post.title"
                    :url="`/post/${ post.slug }`"
                    :date="post.date"
                    :description="post.description"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
 import { posts } from '@/zola-stores/all-posts.js'
 import PostCard from './PostCard.vue'
</script>
