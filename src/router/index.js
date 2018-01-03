import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/Details'
import Index from '@/components/Index'
import List from '@/components/List'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/List',
    name: 'List',
    component: List
  }, {
    path: '/List/:details',
    name: 'Details',
    component: Details
  }, {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
