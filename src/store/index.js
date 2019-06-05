import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'hello-world'
  },
  getters: {
    firstTitle (state) {
      return state.title.split('-')[0]
    }
  },
  mutations: {

  },
  actions: {

  }
})

export default store
