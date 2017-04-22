// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 要记得use一下哦

export default new Vuex.Store({
  state: {
    count: 1,
    findMusicStatus:3//发现音乐tab切换状态
  },
  mutations: {
    Count (state, platform) {
      state.count = platform
    },
    findMusicStatus(state){
      state.findMusicStatus=1;
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