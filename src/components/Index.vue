<template>
  <div class="index">
    <div>--{{loginState?'未登录':loginName}}--</div>
    <h2 class="index-title">{{title}}</h2>
    <h5 class="index-title">{{secondTitle}}</h5>
    <section class="index-content">
      <ul class="conent-list">
        <li class="list-item" v-for="(item,index) in indexList" :key="index">
          <div class="item-title">{{item.title}}</div>
          <div class="item-content">{{item.content}}</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      title: this.$store.state.indexTitle.title,
      secondTitle: this.$store.state.indexTitle.secondTitle,
      indexList: this.$store.state.indexList
    }
  },
  computed: {
    ...mapState({
      loginState: 'loginState',
      loginName: 'loginName'
    })
  },
  mounted () {
    this.$store.dispatch('updateList')
    this.$store.dispatch('changeType')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index {
  margin: 0 auto;
  width: 500px;
  height: 300px;
  background: #f1f3fa;
  overflow: hidden;
  .index-title{
    font-size: 30px;
  }
  .index-content{
    margin: 50px 0 0;
    padding: 10px;
    text-align: left;
  }
}
</style>
