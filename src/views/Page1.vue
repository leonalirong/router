<template>
  <div>
    <h1>page1 -商品列表</h1>
    <ul>
      <li 
       v-for="good in goods"
       :key="good.id"
      >
      <router-link 
        :to="{
        name:'detail',
        params:{id:good.id,name:good.name}}"
        >{{good.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      goods:[
        {id:1,name:'apple'},
        {id:2,name:'banana'},
        {id:3,name:'orange'},
      ]
    }
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>
