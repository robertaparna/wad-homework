<template>
  <body>
  <div class="form">
    <h3>Add a Post</h3>
    <label class="Label" for="body">Body</label>
    <input class="Input" name="body" type="text" id="body" required v-model="post.body"/>
    <button @click="addPost" class="add-post" v-if="authResult">Add Post</button>
  </div>
  </body>
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
      authResult: auth.authenticated()
    };
  },
  methods:{
    addPost(){
      let data = {
        date: new Date().toDateString(),
        body: this.post.body,
      };
      fetch("http://localhost:3000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
import auth from '../service/auth'

</script>

<style scoped>
@media screen and (max-width: 600px ) {}
</style>