<template>
  <h1 style="margin-left: 70px;margin-bottom: 40px;">Create an account</h1>
  <div class="first">
    <input type="text" v-model="first_name" placeholder="First Name">
    <input type="text" v-model="last_name" placeholder="Last Name">
  </div>
  <div class="second">
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
  </div>
  <div class="one">
    <input type="checkbox" id="me">
    <label for="me">I Accept</label>
    <h5>Term & Conditions</h5>
  </div>
  <div class="third">
    <button v-on:click="signUp">SIGN UP</button>
  </div>
  <p>
    <NuxtLink to="/login" style="margin-left: 150px;">Log In</NuxtLink>
  </p>
</template>
<script>
import axios from 'axios';
export default {
    name: 'signup',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3001/usr", {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password
            });


            console.warn(result);
            if(result.status == 201) 
            {
                localStorage.setItem("usr-info", JSON.stringify(result.data))
                this.$router.push({name:'index'})
            }
        }
    },
    mounted()
    {
        let usr= localStorage.getItem('usr-info');
        if(usr)
        {
            this.$router.push({name:'index'})
        }
    }
}
</script>
<style>
body {
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background: linear-gradient(#f4dbfb, #d8dbfe);
}

.first input {
  width: 150px;
  height: 40px;
  padding-left: 20px;
  display: inline-flex;
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid skyblue;
}

.second input {
  width: 340px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.one {
  display: inline;
  margin-left: 20px;
}

.one h5 {
  margin-left: 250px;
  margin-top: -14px;
  margin-bottom: 40px;
}

.third button {
  width: 350px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  background: blue;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
</style>
  