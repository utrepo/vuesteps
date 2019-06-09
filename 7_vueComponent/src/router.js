import Vue from 'vue'
import Router from 'vue-router'
import Questionnarie from './views/Questionnarie.vue'
import Question from './components/Question.vue'

Vue.use(Router)
Vue.component('question', Question)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questionnarie',
      component: Questionnarie
    }
  ]
})
