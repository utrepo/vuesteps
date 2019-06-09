import Vue from 'vue'
import Router from 'vue-router'
import Attributes from './views/Attributes.vue'
import Modifiers from './views/Modifiers.vue'
import Shorthands from './views/Shorthands.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'attributes',
      component: Attributes
    },
    {
      path: '/modifiers',
      name: 'modifiers',
      component: Modifiers
    },
    {
      path: '/shorthands',
      name: 'shorthands',
      component: Shorthands
    }
  ]
})
