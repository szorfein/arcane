<template>
    <v-footer class="dbg">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="6" md="4" class="pr-8">
                    <h6 class="text-h6 mb-6">About me</h6>
                    <p>
                        Strong experience about GNU/Linux, hardened system, devOps, full stack dev. Share few tricks here.
                    </p>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pr-8">
                    <h6 class="text-h6 mb-6">Last desktop theme</h6>
                    <v-card
                        class="mx-auto"
                        image="@/assets/astronaut.png"
                        title="Astronaut"
                        width="fit"
                        height="200"
                        rounded="lg"
                    ></v-card>
                </v-col>
                <v-col cols="6" md="2">
                    <h6 class="text-h6 mb-6">Regulations</h6>
                    Privacy Policy
                </v-col>
                <v-col cols="6" md="2">
                    <h6 class="text-h6 mb-6">Talk on</h6>
                    <v-card>
                        <v-list :items="socials"></v-list>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="ma-6">
                <v-divider></v-divider>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" sm="6" lg="6">
                    <div v-for="route in routes" class="d-inline-flex mr-6">
                        <RouterLink :to="`${ route.to }`" class="text-decoration-none text-bold text-white"><strong>{{ route.title }}</strong></RouterLink>
                    </div>
                </v-col>
                <v-col cols="12" sm="6">
                    <p class="text-right">
                        <strong class="text-h5">Arcane</strong><br />
                        {{ new Date().getFullYear() }}
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
 const routes = [
     { title: 'home', to: '/' },
     { title: 'posts', to: '/posts' },
     { title: 'about', to: '/about' }
 ]
 const socials = [
     { title: 'Mastodon',
       props: { prependIcon: 'mdi-mastodon',
                href: 'https://mastodon.social/@szorfein',
                target: '_blank'
       },
     },
     { title: 'Github',
       props: { prependIcon: 'mdi-github',
                href: 'https://github.com/szorfein',
                target: '_blank'
       },
     },

 ]
</script>

<style scoped>
 .dbg {
     background-color: rgb(var(--v-theme-background));
 }
 .v-list {
     background: rgba(var(--v-theme-background));
 }
</style>
