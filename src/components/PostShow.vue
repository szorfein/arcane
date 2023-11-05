<script setup>
 import { computed } from 'vue';
// import { useRoute } from 'vue-router';
 import { posts } from '@/zola/posts_linux.js'

 const props = defineProps({
     title: String
})

     //const route = useRoute();

     const post = computed(() => {
     //return posts.find(p => p.slug === route.params.title);
     return posts.find(p => p.slug === props.title);
 })

 const post_title = computed(() => {
     /*
     console.log("props")
     console.log(props.title)
     console.log("posts")
     console.log(posts)
     console.log("route")
     console.log(useRoute().params);
     console.log("find")
     console.log(posts.find(p => p.slug === route.params.title));
     console.log("post ...")
     console.log(post)
     */
     return post && post.value.title
 })
 const post_content = computed(() => {
     return post && post.value.content
 })
</script>

<template>
    <div v-if="post">
        <h1>{{ post_title }}</h1>
        <div v-html="post_content"></div>
    </div>
    <div v-else>No post found {{ title }}</div>
</template>
