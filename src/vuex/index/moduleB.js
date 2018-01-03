const moduleB = {
  state: {
    style: 'font-size:20px;color:red',
    type: 'pc'
  },
  mutations: {
    changeStyle (state) {
      console.log(moduleB)
      state.style = state.type === 'pc' ? 'font-size:20px;color:red' : 'font-size:12px;color:block'
    },
    changeType (state) {
      state.type = state.type === 'pc' ? 'mobile' : 'pc'
    }
  },
  actions: {
    changeType ({ commit, state, rootState }) {
      console.log(rootState)
      commit('changeType')
    },
    changeStyle ({ commit, state, rootState }) {
      console.log(rootState)
      commit('changeStyle')
    }
  }
}
