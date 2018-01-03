import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'
import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

const state = {
  loginState: 'false',
  loginName: 'jimmy-space',
  indexTitle: {
    title: 'jimmy-space',
    secondTitle: 'test for vuex'
  },
  indexList: [{
    title: 'title',
    content: 'content'
  }, {
    title: 'title',
    content: 'content'
  }, {
    title: 'title',
    content: 'content'
  }],
  list: [],
  style: 'font-size:20px;color:red',
  type: 'pc'
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state,
  mutations,
  actions,
  getters
})
