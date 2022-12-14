<template>

<body>
<form @submit="onSubmit" method="post">
  <div class="flex-container">
      <h2>Sign up to PostIt</h2>
      <div class="grid">
          <p> <label for = "Email">Email</label></p>
          <p> <input type="email" placeholder="Enter Email" v-model="user.email" required></p>
          <p> <label for = "Password">Password</label></p>
          <p> <input type="password" placeholder="Enter Password" v-model="user.password" required> </p>
      </div>
          <router-link to="/"
      custom
      v-slot="{ navigate }">
      <button class="signUp" @submit="submitSignUp" @click="navigate" >Sign Up</button>
    </router-link>

</div>
</form>
</body>
</template>

<script>
import '../assets/signUp.css'


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
    submitSignUp(event) {
      event.preventDefault()
      const user = {
        email: this.user.email,
        password: this.user.password
      }

      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }).then((response) => {
        console.log(response.json())
      })
    },
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.errorMessage=''
      } else {
        this.errorMessage="Email invalid!"
      }
    },
    validatePassword(password) {
      if (/(^(?=(.[A-Z]))(?=.*[_])(?=(.*[a-z]){2,})(?=.*[0-9])(?=.*[-])).{8,15}$/.test(password)) {
        this.errorMessage=''
      }
      else{
        this.errorMessage="Entered password is invalid!"+'\n'+
        "The password should be of a specific length (at least 8 chars and less than 15 chars)."+'\n'+
        "Includes at least one uppercase alphabet character." +'\n'+
        "Includes at least two lowercase alphabet characters." +'\n'+
        "Includes at least one numeric value." +'\n'+
        "It should start with an uppercase alphabet." +'\n'+
        "It should include the character “_” " 
      }
    }
  },
  watch: {
    email(value){
      this.email = value;
      this.validateEmail(value);
      this.password = value2;
      this.validatePassword(value2)
    }
  },
}

</script>