<script setup>
 import { computed } from 'vue';
// import { useRoute } from 'vue-router';
 import { posts } from '@/zola-stores/posts_linux.js'
 import ToolBar from './ToolBar.vue'

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
        <ToolBar :tag="post.tags" />
        <v-container>
            <div class="text-h2 mb-8 pt-4 font-weight-regular">
                {{ post_title }}
            </div>
            <div class="mt-6 mb-8 text-subtitle-1">
                {{ post.date }}
            </div>
            <div class="markdown text-body-1" v-html="post_content"></div>
        </v-container>
    </div>
    <div v-else>No post found {{ title }}</div>
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
 .markdown ul>li {
     display: grid;
     grid-template-areas: "prepend content append";
     grid-template-columns: max-content 1fr auto;
     min-height: 30px;
     align-items: center;
     padding: 4px 16px;
     text-decoration: none;
     word-break: normal;
     word-wrap: break-word;
     text-overflow: ellipsis;
     hyphens: auto;
     text-transform: none;
 }
</style>
