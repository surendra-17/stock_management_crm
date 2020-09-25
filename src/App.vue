<template>
  <v-app id="app">
    <Navbar/>
    <v-main class="mx-4">
       <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
  export default {
    components:{Navbar},
    props: {
      source: String,
    },
    data: () => ({
    }),
  }
</script>