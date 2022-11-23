<script setup>
import Index from './components/Index.vue'
</script>

<template>
  <main>
    <div id = "app">
      <router-view></router-view>
    </div>
    <Index />
  </main>
</template>
<script>export default {
  data(){
    return{}
  }
} </script>
