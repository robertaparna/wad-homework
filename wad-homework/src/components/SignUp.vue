<template>

<body>
<form @submit="onSubmit" method="post">
  <div class="flex-container">
      <h2>Sign up to PostIt</h2>
      <div class="grid">
          <p> <label for = "Email">Email</label></p>
          <p> <input type="email" placeholder="Enter Email" v-model="user.email" required @blur="validateEmail()"></p>
          <p> <label for = "Password">Password</label></p>
          <p> <input type="password" placeholder="Enter Password" v-model="user.password" required @change="validatePassword"> </p>
      </div>
      <p v-if="errorMessage.length > 0">
        {{errorMessage}}
      </p>
      <button class="signUp" v-on:click="submitSignUp" >Sign Up</button>

</div>
</form>
</body>
</template>

<script>
import '../assets/signUp.css'

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
    submitSignUp(e) {
      e.preventDefault()
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      console.log(user)
      if(this.validateEmail() && this.validatePassword()) {
        fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify(user)
        }).then((response) => response.json()).then(json => {
          console.log(json.alreadyRegistered)
          if (json.alreadyRegistered) {
            this.errorMessage = "This email is already registered"
          } else {
            router.push('/')
          }
          console.log(json)
        })
      } else {
        this.errorMessage = "Please enter valid credentials"
      }


    },
    validateEmail() {
      console.log('validate email')
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
        console.log('email valid')
        this.errorMessage = '';
        return true
      } else {
        console.log('email invalid');
        this.errorMessage = 'Please enter a valid email address';
        return false
      }
    },
    validatePassword() {
      console.log('validate password')
      if (/(^(?=(.[A-Z]))(?=.*[_])(?=(.*[a-z]){2,})(?=.*[0-9])(?=.*[-])).{8,15}$/.test(this.user.password)) {
        console.log('password valid')
        this.errorMessage=''
        return true
        this.errorMessage="Entered password is invalid!"+'\n'+
            "The password should be of a specific length (at least 8 chars and less than 15 chars)."+'\n'+
            "Includes at least one uppercase alphabet character." +'\n'+
            "Includes at least two lowercase alphabet characters." +'\n'+
            "Includes at least one numeric value." +'\n'+
            "It should start with an uppercase alphabet." +'\n'+
            "It should include the character “_” "
      }
      else{
        this.errorMessage='Please enter a valid password'
        console.log('password invalid')
        return true
      }
    }
  },
}

</script>