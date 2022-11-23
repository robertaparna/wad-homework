<template>
  <body>
  <header>
    <div class="action">
      <div class="header">
        <a href="index.html">Home</a>
        <a href="addPost.html">Add post</a>
      </div>
      <span class="material-symbols-outlined" onclick="dropdownMenu();"><AccountCircleOutline /></span>
      <div class="dropdown-menu">
        <ul>
          <li><a href="#">John Doe</a></li>
          <li><a href="#">john.doe@gmail.com</a></li>
          <li><a href="login.html">Logout</a></li>
        </ul>
      </div>
    </div>
  </header>

  <div class="feed" id="feed">
    <Post v-for="post in posts" :post=post />
  </div>
  <div class="reset-button">
    <button class="reset-button" v-on:click="resetLikes">Reset likes</button>
  </div>

  <div class="footer">
    <p>Copyright © Group AQ.</p>
    <p>2022</p>
  </div>
  </body>
</template>

<script>
export default {
  name: "Index.vue",
  computed: {
    posts () {
      return this.$store.state.posts;
    }
  },
  components: {
    Post,
    AccountCircleOutline
  },
  methods: {
    goToAddPost () {
      this.$router.push("/add-post")
    },
    resetLikes() {
      this.$store.commit("nullLikes")
    }
  },
  mounted() {
    this.$store.dispatch("fetchPosts")
  }
}
import '../assets/index.css'
import Post from "@/components/Post.vue";
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
import 'JavaScript.js'


</script>