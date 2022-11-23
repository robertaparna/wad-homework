<template>
    <header>
      <div>
        <div class="header">
          <div class="action">
            <div >
              <router-link to="/">Home</router-link>
              <RouterLink to="/add-post">Add post</RouterLink>
              <RouterLink to="/sign-up">Sign Up</RouterLink>
              <RouterLink to="/sign-up2">Sign Up 2</RouterLink>
            </div>
          </div>
        </div>
        <span>
            <AccountCircleOutline/>
        </span>

      </div>
  </header>
</template>
  
  <script>
  import AccountCircleOutline from "vue-material-design-icons/AccountCircleOutline.vue";


  export default {
    name:'Header',
    components: {
      AccountCircleOutline
    },
  };
  </script>

<style scoped>
  span {
    margin: 20px;
  }
  @media screen and (max-width: 600px ) {
    .header a{
      color: black;
      text-align: center;
      padding: 10px;
      text-decoration: none;
      font-size: 16px;
      font-family: 'Gill Sans MT', serif;
      font-weight: 200;
      letter-spacing: 1px;
      transition: background-color 500ms ease-out 100ms

    }

  }
</style>


