import Vue from 'vue'
import Router from 'vue-router'
import EventHandling from './views/EventHandling.vue'
import ModelBinding from './views/ModelBinding.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'eventHandling',
      component: EventHandling
    },
    {
      path: '/modelbinding',
      name: 'modelBinding',
      component: ModelBinding
    }
  ]
})
