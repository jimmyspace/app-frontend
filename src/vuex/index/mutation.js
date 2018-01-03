const mutations = {
  CHANGE_LOGIN_STATE (state) {
    state.loginState = !state.loginState
    console.log('2s后')
  },
  SET_LOGIN_NAME (state, loginName) {
    state.loginName = loginName
  },
  UPDATE_LIST (state, list) {
    state.list = list
    console.log('1s后')
  }
}

export default mutations
