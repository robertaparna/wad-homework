<template>
  <body>
  <form action="index.html" method="post">
    <div class="flex-container">
      <h2>Sign up to PostIt</h2>
      <div class="grid">
        <p> <label for = "Email">Email</label></p>
        <p> <input type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" required> </p>
        <p> <label for = "Password">Password</label></p>
        <p> <input type="password" placeholder="Enter Password" pattern= "^([A-Z])(?=.*[_])(?=.*[0-9])(?=.*[$@#&!]).{8,15}$" required> </p>
      </div>
      <button class="signUp" type="submit">Sign Up</button>

      <div class="textfield">
        <span id="psw"><a href="">Click here if you already have an account</a></span>
      </div>
    </div>
  </form>
  </body>

</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>

</style>