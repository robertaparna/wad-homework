<script setup>
import Index from './components/Index.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </main>
</template>
<script>
export default {

} </script>


