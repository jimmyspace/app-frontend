<template>
  <ul class="list">
    <li class="list-item">
      <router-link to="/List/1">who you are?</router-link>
    </li>
    <li class="list-item">
      <router-link to="/List/2">who you are?</router-link>
    </li>
    <li class="list-item">
      <router-link to="/List/3">who you are?</router-link>
    </li>
    <li class="list-item">
      <router-link to="/List/4">who you are?</router-link>
    </li>
    <li class="list-item">
      <router-link to="/List/5">who you are?</router-link>
    </li>
    <li class="list-item">
      <router-link to="/List/6">who you are?</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '这个是分发内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  margin: 0 auto;
  width: 500px;
  background: #f1f3fa;
  overflow: hidden;
}
.list .list-item{
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
