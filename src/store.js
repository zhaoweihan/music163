// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 要记得use一下哦

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    Count (state, platform) {
      state.count = platform
    }
  },
  actions: {
    setCount ({commit}, platform) {
      commit('Count', platform)
    }
  },
  getters: {
    getCount: (state) => state.count
  }
})