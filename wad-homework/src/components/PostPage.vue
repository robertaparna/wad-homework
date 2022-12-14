<template>
  <div class="feed" v-if="">
    <div class="post">
      <div id="form">
        <div class="post-header">
        <span>
          <AccountCircleOutline/>
        </span>
          <p>
            {{ post.date }}
          </p>
        </div>
        <div class="post-img" v-if="post.picture">
          <img :src="post.picture">
        </div>
        <div class="post-content">
          <input v-model="post.body">
        </div>
        <div class="post-footer">
          <button v-on:click="addLike(post)">
            <ThumbUpOutline/>
          </button>
          <p>
            {{ post.likes }}
          </p>
          <div>
            <button @click="updatePost" class="updatePost">Update Post</button>
            <button @click="deletePost" class="deletePost">Delete Post</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/index.css'
export default {
  name: "PostPage",
  data() {
    return {
      post: {
        id: "",
        date: String,
        body: "",
        likes: Number,
      },
    };
  },
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },
  components: {
    ThumbUpOutline,
    AccountCircleOutline
  },

  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
    // position in the URL. The captured values are populated in the req.params object, with the name 
    // of the route parameter specified in the path as their respective keys
    this.fetchAPost(this.$route.params.id);
  },
};

import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'

</script>
