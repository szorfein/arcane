<template>
    <div v-for="categorie in posts">
        <h2 class="text-h2">{{ categorie.title }}</h2>

        <div v-for="post in categorie.posts">
            <h5 class="text-h5">{{ post.title }}</h5>
            <RouterLink :to="`/post/${ post.slug }`">{{ post.title }}</RouterLink>
        </div>
    </div>
</template>

<script setup>
 import { posts } from '@/zola-stores/all-posts.js'
</script>
