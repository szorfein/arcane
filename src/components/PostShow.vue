<script setup>
 import { computed } from 'vue';
 import { useRoute } from 'vue-router';
 import { posts } from '@/zola/posts.js'

 const route = useRoute();

 const post = computed(() => {
     return posts.find(p => p.slug === route.params.title);
 })

 const title = computed(() => {
     console.log("posts")
     console.log(posts)
     console.log("route")
     console.log(useRoute().params);
     console.log("find")
     console.log(posts.find(p => p.slug === route.params.title));
     console.log("post ...")
     console.log(post)
     return post && post.value.title
 })
</script>

<template>
    <h1>{{ post }}</h1>
    <div v-if="post">
        <h1>{{ title }}</h1>
    </div>
</template>
