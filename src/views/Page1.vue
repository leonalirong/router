<template>
  <div>
    <h1>Page1</h1>
    {{name}}
    <p>我当前page1 组件自己的计算属性{{ firstName}}</p>
    <p>仓库中的title：{{ title}}</p>
    <button @click="fn1">修改 page2 的 name 为王五</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      name: '张三'
    }
  },
  computed: {
    ...mapState(['title']),
    firstName () {
      return this.name.split('')
    }
  },
  methods: {
    fn1 () {
      // bus.$emit('a', { target: 'Page2', payload: '王五' })
    }
  },
  created () {
    console.log(this.$store.state.title)
  }
}
</script>
