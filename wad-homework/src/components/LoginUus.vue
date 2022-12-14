<template>
  <body>
    <form method="post">
      <div class="flex-container">
        <h2>Login to PostIt</h2>
        <div class="grid">
          <p> <label for = "Email">Email</label></p>
          <p> <input type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" required v-model="user.email"> </p>
          <p> <label for = "Password">Password</label></p>
          <p> <input name="password" type="password" placeholder="Enter Password" pattern= "^([A-Z])(?=.*[_])(?=.*[0-9])(?=.*[$@#&!]).{8,15}$" required v-model="user.password"> </p>
        </div>
        <p>
          {{errorMessage}}
        </p>
        <div class="buttons">
          <button class="login" v-on:click="goToSignUp">Sign Up</button>
          <p>or</p>
          <button class="login" v-on:click="submitLogIn" >Login</button>
      </div>
    </div>
  </form>
  </body>

</template>

<script>

import '../assets/login.css'
import router from "@/router";

export default {
  data() {
    return {
      user: {
        email: '',
        password:'',
      },
      errorMessage: ''
    }
  },
  methods: {
    goToSignUp() {
      router.push('/sign-up')
    },
    submitLogIn(event) {
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      event.preventDefault()
      fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(user)
      }).then((response) => response.json()).then(json => {
        console.log(json)
        if(json.error) {
          this.errorMessage = json.error;
        } else {
          router.push('/')
        }

      })

    },
  },
}
</script>
