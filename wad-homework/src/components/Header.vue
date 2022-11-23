<template>
    <header>
    <div class="header">
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
    </div>
</header>
  </template>
  
  <script>
  import '../assets/generic.css'
  export default {
    name:'Header'

  };
  </script>
  