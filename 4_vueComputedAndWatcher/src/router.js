import Vue from 'vue'
import Router from 'vue-router'
import Computed from './views/Computed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'computed',
      component: Computed
    }
  ]
})
