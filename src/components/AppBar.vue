<template>
    <component :is="item_component" />
</template>

<script setup>
 import { computed } from 'vue'
 import { useDisplay } from 'vuetify'
 import TopBarMobile from '../layouts/mobile/TopBar.vue'
 import TopBarTablet from '../layouts/tablet/TopBar.vue'
 import TopBarDesktop from '../layouts/desktop/TopBar.vue'

 const { name } = useDisplay()

 const item_component = computed(() => {
     switch (name.value) {
         case 'xs': return TopBarMobile
         case 'sm': return TopBarTablet
         case 'md': return TopBarTablet
         case 'lg' || 'xl' || 'xxl': return TopBarDesktop
     }
     // default
     return TopBarDesktop
 })
</script>
