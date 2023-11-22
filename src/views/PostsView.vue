<template>
    <v-toolbar color="surface">
        <v-responsive max-width="344" class="mx-left pl-4">
            <PostSearch @search="(term) => searchTerm = term" />
        </v-responsive>
    </v-toolbar>
    <v-container>
        <h1 class="text-h4">Posts</h1>
        <div class="ma-6"></div>

        <v-row>
            <v-col
                cols="12"
                xs="12"
                sm="6"
                md="4"
                v-for="(post, index) in getFilteredBlogs()"
                :key="index"
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
    </v-container>
</template>

<script setup>
 import { ref } from 'vue'
 import { posts } from '@/zola-stores/posts_linux.js'
 import PostSearch from '@/components/PostSearch.vue'
 import PostCard from '@/components/card/post.vue'

 const searchTerm = ref('')
 const getFilteredBlogs = () => {
     return posts.filter(post => post.title.toLowerCase()
                                     .includes(searchTerm.value.toLowerCase())
     );
 };
</script>
