<template>
    <v-footer class="dbg">
        <v-container fluid>
            <v-row>
                <v-col>
                    <h6 class="text-h6 mb-6">About me</h6>
                    <p>
                        Strong experience about GNU/Linux, hardened system, devOps, full stack dev. Share some experience here.
                    </p>
                </v-col>
                <v-col>
                    <h6 class="text-h6 mb-6">Last ...</h6>
                </v-col>
                <v-col>
                    <h6 class="text-h6 mb-6">Lastest tweets</h6>
                </v-col>
            </v-row>
            <v-row class="ma-6">
                <v-divider></v-divider>
            </v-row>
            <v-row no-gutters>
                <v-col xs="12" sm="6" lg="6">
                    <div v-for="route in routes" class="d-inline-flex mr-6">
                        <RouterLink :to="`${ route.to }`" class="text-decoration-none text-bold text-white"><strong>{{ route.title }}</strong></RouterLink>
                    </div>
                </v-col>
                <v-col xs="12" sm="6">
                    <p class="text-right">
                        <strong>Arcane</strong><br />
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
</script>

<style scoped>
 .dbg {
     background-color: rgb(var(--v-theme-background));
 }
</style>
