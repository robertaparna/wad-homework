<template>
    <div class="login">
        <header>
    <div class="action">
        <div class="header">
            <a href="index.html">Home</a>
        </div>
        <span class="material-symbols-outlined" onclick="dropdownMenu();">account_circle</span>
        <div class="dropdown-menu">
            <ul>
                <li><a href="#">John Doe</a></li>
                <li><a href="#">john.doe@gmail.com</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
</header>
<body>
<form action="index.html" method="post">
    <div class="flex-container">
        <h2>Welcome to PostIt</h2>
        <p id="create"><a href="#">Create an account</a></p>
        <p>or</p>
        <p>Please log in</p>
        <div class="textfield">
    <input type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" required>
</div>
<div class="textfield">
    <input type="password" placeholder="Enter Password" name="psw" required>
</div> 
    <button class="login" type="submit">Log in</button>
    <div class="textfield">
    <span id="psw"><a href="#">Forgot password?</a></span>
    </div>
</div>
</form>
</body>
    </div>
</template>
<script>
export default {
  name: "Login.vue"
}
</script>
<router-view></router-view>
<style scoped>
