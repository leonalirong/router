<template>
  <div>
    <h1>我是app</h1>
    <!-- <a href="#/page1">page1</a> -->
    <router-link replace
     :to="{
       path:'/home/page1',
       query:{
         name:'张三',
         age:18
       },
       params:{
         id:10
       }
      }" active-class="abc"
     > page1 
    </router-link>
    <hr/>
    <!-- <a href="#/page2">page2</a> -->
    <router-link replace :to="{name:'page2'}" active-class="abc"> page2 </router-link>

    <router-link replace :to="{name:'login'}" active-class="abc">登录</router-link>
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
  .router-link-active{
    color:green
  }
</style>
