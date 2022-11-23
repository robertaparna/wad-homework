<template>
  <body>
  <header>
    <div class="action">
      <div class="header">
        <router-link to="/Index">Home</router-link>
        <a href="addPost.html">Add post</a>
      </div>
      <span class="material-symbols-outlined" onclick="dropdownMenu();">account_circle</span>
      <div class="dropdown-menu">
        <ul>
          <li><a href="#">John Doe</a></li>
          <li><a href="#">john.doe@gmail.com</a></li>
          <li><router-link to="/Login">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </header>

  <div class="feed" id="feed">
  </div>

  <div class="footer">
    <p>Copyright © Group AQ.</p>
    <p>2022</p>
  </div>
  </body>
</template>
<script>
export default {
  data (){
    return{}
  }
}
</script>
<router-view></router-view>

<style scoped>

</style>