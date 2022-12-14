<template>
  <body>
  <Header></Header>
  <div class="feed" id="feed" v-if="authResult">
    <Post v-for="post in posts" :post=post />
  </div>
  <div class="feed" v-if="!authResult">
    <p>Must be logged in to see posts</p>
  </div>
  <div class="reset-button">
    <button class="reset-button" v-on:click="resetLikes">Reset likes</button>
    <button class="reset-button" v-on:click="deletePosts">Delete all posts</button>
    <button class="reset-button" v-on:click="logout">Log out</button>
  </div>
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
      console.log(this.authResult)
      this.$store.commit("nullLikes")
    },
    deletePosts() {
      fetch("http://localhost:3000/api/posts/", {
        method: "DELETE"
      })
      this.$store.dispatch("fetchPosts")
    },
    logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
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