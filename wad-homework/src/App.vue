<script setup>
import Index from './components/Index.vue'
import Header from "@/components/Header.vue";
</script>

<template>
  <main>
    <Header></Header>
    <router-view/>
  </main>
</template>
<script>
export default {

} </script>
