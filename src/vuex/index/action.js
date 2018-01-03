const action = {
  updateList ({ commit, state }, list) {
    console.log('1s前')
    setTimeout(() => {
      commit('UPDATE_LIST')
    }, 1000)
  },
  change_login_state ({ commit, state }) {
    console.log('1s前')
    setTimeout(() => {
      commit('CHANGE_LOGIN_STATE')
    }, 2000)
  }
}

export default action
