<template>
  <body>
  <Header></Header>
  <div class="feed" id="feed">
    <Post v-for="post in posts" :post=post />
  </div>
  <div class="reset-button">
    <button class="reset-button" v-on:click="resetLikes">Reset likes</button>
  </div>
  <Footer></Footer>
  </body>
</template>
<script>
import Header from './Header.vue'
import Footer from "./Footer.vue"
export default {
  name: "Index.vue",
  computed: {
    posts () {
      return this.$store.state.posts;
    }
  },
  data: function () {
    return {
      authResult: auth.authenticated()
    }
  },
  components: {
    ThumbUpOutline,
    AccountCircleOutline,
    Header,
    Footer,
    Post
  },
  methods: {
    resetLikes() {
      this.$store.commit("nullLikes")
    }
  },
  mounted() {
    this.$store.dispatch("fetchPosts")
  }
}
import '../assets/index.css'
import ThumbUpOutline from "vue-material-design-icons/ThumbUpOutline.vue";
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
import Post from "@/components/Post.vue";
import auth from '../service/auth'


</script>

<style>
  @media screen and (max-width: 600px ) {

  
  }

</style>