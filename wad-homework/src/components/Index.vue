<template>
  <body>
  <header>
    <div class="action">
      <div class="header">
        <a href="index.html">Home</a>
        <a href="addPost.html">Add post</a>
      </div>
      <span class="material-symbols-outlined" onclick="dropdownMenu();">account_circle</span>
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
    ThumbUpOutline,
    AccountCircleOutline
  }
}
import '../assets/index.css'
import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'

</script>