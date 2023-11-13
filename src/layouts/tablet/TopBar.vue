<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        style="position: fixed;">
        <v-list-item prepend-avatar="@/assets/logo-site.png" title="Arcane" nav @click="rail = !rail">
            <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav :items="items">
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
 import { ref  } from 'vue'
 const drawer = ref(true)
 const rail = ref(true)
 const items = [
     { title: 'Home', props: { to: '/', color: 'primary', prependIcon: 'mdi-home' }},
     { title: 'Posts', props: { to: '/posts', color: 'primary', prependIcon: 'mdi-post' }},
     { title: 'About', props: { to: '/about', color: 'primary', prependIcon: 'mdi-account' }},
 ]
</script>
