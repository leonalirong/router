<template>
  <div>
    <h1>登录页面</h1>
    <button @click="handleLogin">点我登录成功</button>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  methods:{
    handleLogin(){
      setTimeout(()=>{
        let userInfo={
          name:'张三',
          password:'123'
        }
        window.localStorage.setItem('userInfo',JSON.stringify(userInfo));
        //this.$router.replace('/home')
        let redirect=this.$route.query.redirect || '/center'
        this.$router.replace(redirect)
      },2000)
    }
  }
}
</script>