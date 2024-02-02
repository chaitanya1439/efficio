<template>
    <h1 style="margin-left: 50px;margin-bottom: 40px;">Log In your account</h1>
    <div class="second">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
    </div>
    <div class="one">
        <input type="checkbox" id="me">
        <label for="me">Remember me</label>
        <h5>Forget Password</h5>
    </div>
    <div class="third">
        <button v-on:click="login">LOG IN</button>
    </div>
    <p>
    <NuxtLink to="/signup" style="margin-left: 150px;">SIGN UP</NuxtLink>
    </p>
</template>
<script>
import axios from 'axios';
export default{
    name:'login',
    data()
    {
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3001/usr?email=${this.email}&password=${this.password}`
            )

            if(result.status == 200 && result.data.length>0) 
            {
                localStorage.setItem("usr-info", JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
            console.warn(result)
        }
    },
    mounted()
    {
        let usr= localStorage.getItem('usr-info');
        if(usr)
        {
            this.$router.push({name:'home'})
        }
    }
    
};
</script>
<style>
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