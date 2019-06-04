<template>
  <div>
    <h1>我是首页--个人中心页面</h1>
    <router-link :to="{path:'/card',query:{ data:'今天'}}">卖座卡页面</router-link>
    <br/>
    <router-link to="/money">余额页面</router-link>
  </div>
</template>
