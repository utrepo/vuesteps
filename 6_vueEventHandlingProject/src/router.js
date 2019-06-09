import Vue from 'vue'
import Router from 'vue-router'
import EventHandling from './views/EventHandling.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'eventHandling',
      component: EventHandling
    }
  ]
})
