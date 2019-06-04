<template>
  <div>
    <h1>Detail</h1>
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.name}}</p>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$route);
  }
}
</script>