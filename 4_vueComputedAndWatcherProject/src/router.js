import Vue from 'vue'
import Router from 'vue-router'
import Computed from './views/Computed.vue'
import Watch from './views/Watch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'computed',
      component: Computed
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    }
  ]
})
