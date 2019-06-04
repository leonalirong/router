<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" placeholder="用户名" v-mo="username" />
    <input type="password" placeholder="密码" v-mo="password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    handleLogin (){
      setTimeout(()=>{
        this.$router.replace({
          name:'page1'
        })
      },1000)
    }
  }
}
</script>