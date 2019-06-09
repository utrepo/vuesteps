import Vue from 'vue'
import Router from 'vue-router'
import ConditionalRenderingVIF from './views/ConditionalRenderingVIF.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'conditionalrenderingvif',
      component: ConditionalRenderingVIF
    }
  ]
})
