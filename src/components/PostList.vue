<template>
    <div v-for="post in posts" :key="post.id">
        {{ post.id }} - {{ post.title }}
        <RouterLink :to="`/post/${ post.slug }`">{{ post.title }}</RouterLink>
    </div>
</template>

<script setup>
 import { posts } from '@/zola/posts.js'
</script>
