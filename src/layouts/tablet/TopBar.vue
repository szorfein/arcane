<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent>
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

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/">
          </v-list-item>
          <v-list-item prepend-icon="mdi-post" title="Posts" value="posts" to="/posts">
          </v-list-item>
          <v-list-item prepend-icon="mdi-account" title="About" value="about" to="/about">
          </v-list-item>
        </v-list>
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
