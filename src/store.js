import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuClicked: false
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuClicked = !state.isMenuClicked
    }
  },
  actions: {
    toggleMenu: ({ commit }) => commit('toggleMenu')
  },
  getters: {
    isMenuClicked: state => state.isMenuClicked
  }
})
