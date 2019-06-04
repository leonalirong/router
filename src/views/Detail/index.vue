<template>
  <div>
    <h1>我是详情页</h1>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  beforRouteEnter(to ,from,next){
    console.log('进入当前组件')
    next()
  },
  beforeRouteUpdate(to ,from,next){
    console.log('当前组件更新')
    next()
  },
  beforeRouteLeave(to ,from,next){
    console.log('离开当前组件')
    next()
  }
}
</script>