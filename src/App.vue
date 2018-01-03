<template>
  <div id="app">
    <header>讯测———测试</header>
    <section>
      <div @click="login()">--{{loginState?'未登录':loginName}}--</div>
    </section>
    <router-link to="/">Index</router-link>
    <router-link to="/List">List</router-link>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    loginState () {
      return this.$store.state.loginState
    },
    loginName () {
      return this.$store.state.loginName
    }
  },
  methods: {
    login () {
      this.$store.dispatch('change_login_state')
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
