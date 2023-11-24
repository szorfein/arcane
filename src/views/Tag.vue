<template>
    <v-container>
        <div v-if="tag">
            <h2 class="text-h2 mb-8">{{ tag }}</h2>
            <v-row>
                <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    v-for="(post, index) in getposts"
                    :key="index">

                    <PostCard
                        :title="post.title"
                        :url="`/post/${ post.slug }`"
                        :date="post.date"
                        :description="post.description"
                    />
                </v-col>
            </v-row>
        </div>
        <div v-else>No tag exist</div>
    </v-container>
</template>

<script setup>
 import { computed } from 'vue'
 import { posts } from '@/zola-stores/posts_linux.js'
 import PostCard from '@/components/card/post.vue'

 const { tag } = defineProps(['tag'])

 const getposts = computed(() => {
     return posts.filter(p => p.tags.includes(tag));
 })
</script>
