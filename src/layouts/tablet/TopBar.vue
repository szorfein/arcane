<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false">
    </v-navigation-drawer>
</template>

<script setup>
 import { ref  } from 'vue'
 const drawer = ref(true)
 const rail = ref(true)
</script>

<script>
 export default {
     data () {
         return {
             drawer: true,
             rail: true,
         }
     }
 }
</script>
