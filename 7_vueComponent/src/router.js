import Vue from 'vue'
import Router from 'vue-router'
import Questionnarie from './views/Questionnarie.vue'
import Question from './components/Question.vue'
import QuestionProps from './components/QuestionProps.vue'
import QuestionnarieProps from './views/QuestionnarieProps.vue'

Vue.use(Router)
Vue.component('question', Question)
Vue.component('question-props', QuestionProps)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questionnarie',
      component: Questionnarie
    },
    {
      path: '/questionnarieprops',
      name: 'questionnarieProps',
      component: QuestionnarieProps
    }
  ]
})
