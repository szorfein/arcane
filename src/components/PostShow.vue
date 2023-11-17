<script setup>
 import { computed } from 'vue';
// import { useRoute } from 'vue-router';
 import { posts } from '@/zola-stores/posts_linux.js'

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
    <v-container>
        <div v-if="post">
            <h1 class="text-h2">{{ post_title }}</h1>
            <div class="ma-6"></div>
            <p class="font-weight-light">{{ post.date }}</p>
            <div class="ma-6"></div>
            <div v-html="post_content"></div>
        </div>
        <div v-else>No post found {{ title }}</div>
    </v-container>
</template>

<style scoped>
 pre {
     padding: 1rem;
     overflow: auto;
 }
 pre[data-linenos] {
     padding: 1rem 0;
 }
 pre table td {
     padding: 0;
 }
 pre table td:nth-of-type(1) {
     text-align: center;
     user-select: none;
 }
 pre mark {
     display: block;
     background-color: rgba(254, 252, 232, 0.9);
 }
 pre table {
     width: 100%;
     border-collapse: collapse;
 }
</style>

<style>
 pre[class^='language'] {
     background: rgb(var(--v-theme-surface));
     border-style: solid;
     border-width: 0;
     border-color: rgba(var(--v-border-color), var(--v-border-opacity));
     color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
     padding: 16px 16px 16px 16px;
     padding-inline-end: 48px !important;
     overflow: hidden;
     white-space: pre-wrap;
     word-break: normal;
     word-spacing: normal;
     word-wrap: normal;
     line-height: 1.5;
     border-radius: 4px;
 }
</style>
