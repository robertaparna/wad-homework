<template>
  <div class="form">
      <h3>Add a Post</h3>
      <label class="Label" for="body">Body</label>
      <input class="Input" name="body" type="text" id="body" required v-model="post.body"/>
      <button @click="addPost" class="add-post">Add Post</button>
      </div>
</template>

<script>
import '../assets/addPost.css'
export default {
  name: "AddPost",
  data() {
    return{
      post: {
        body: "",
      },
    };
  },
  methods:{
    addPost(){
      var data = {
        body: this.post.body,
      };
      fetch("http://localhost:5173/#/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px ) {}
</style>