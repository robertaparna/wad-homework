<template>
  <body>
    <Header></Header>
  <div class="feed" id="feed">
    {{ name }}
    <div class="post" v-for="post in posts">
      <div class="post-header">
        <span>
          <AccountCircleOutline/>
        </span>
        <p>
          {{ post.date }}
        </p>
      </div>
      <div class="post-img">
        <img :src="post.picture">
      </div>
      <div class="post-content">
        <p>
          {{ post.body }}
        </p>
      </div>
      <div>
        <ThumbUpOutline/>
      </div>
    </div>
  </div>
  <Footer></Footer>
  </body>
</template>
<script>
import Header from './Header.vue'
import Footer from "./Footer.vue"
export default {
  name: "myHeader",
  components: {
    'Header':Header,
    'Footer':Footer
  }
}
import '../assets/index.css'
import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'

</script>

<style scoped>

</style>