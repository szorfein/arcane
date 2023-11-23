<template>
    <div v-if="tag">
        {{ tag }}
        <div v-for="(post, index) in getposts">
            {{ post.title }}
        </div>
    </div>
    <div v-else>No tag exist</div>
</template>

<script setup>
 import { computed } from 'vue'
 import { posts } from '@/zola-stores/posts_linux.js'

 const { tag } = defineProps(['tag'])

 const getposts = computed(() => {
     return posts.filter(p => p.tags.includes(tag));
 })
</script>
