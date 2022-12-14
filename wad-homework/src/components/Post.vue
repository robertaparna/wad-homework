<template>
  <div class="post" v-on:click="openPostPage">
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
      <p>
        {{ post.body }}
      </p>
    </div>
    <div class="post-footer">
      <button v-on:click="addLike(post)">
        <ThumbUpOutline/>
      </button>
      <p>
        {{ post.likes }}
      </p>
    </div>

  </div>
</template>

<script>

export default {
  name: "Post",
  props: {
    post: {
      id: Number,
      date: String,
      picture: String,
      body: String,
      likes: Number,
    }
  },
  components: {
    ThumbUpOutline,
    AccountCircleOutline
  },
  methods: {
    addLike (post) {
      this.$store.commit('likePost', post)
    },
    openPostPage() {
      this.$router.push(`/post-page/${this.post.id}`)
    }
  }
}
import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'

</script>

<style scoped>

</style>