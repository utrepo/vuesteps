import Vue from 'vue'
import Router from 'vue-router'
import ConditionalRenderingVIF from './views/ConditionalRenderingVIF.vue'
import BasicLoop from './views/BasicLoop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'conditionalrenderingvif',
      component: ConditionalRenderingVIF
    },
    {
      path: '/basicloop',
      name: 'basicloop',
      component: BasicLoop
    }
  ]
})
