import Vue from 'vue'
import Router from 'vue-router'
import Questionnarie from './views/Questionnarie.vue'
import Question from './components/Question.vue'
import QuestionProps from './components/QuestionProps.vue'
import QuestionnarieProps from './views/QuestionnarieProps.vue'
import QuestionnariePropsEvents from './views/QuestionnariePropsEvents.vue'
import QuestionPropsEvents from './components/QuestionPropsEvents.vue'

Vue.use(Router)
Vue.component('question', Question)
Vue.component('question-props', QuestionProps)
Vue.component('question-props-events', QuestionPropsEvents)

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
    },
    {
      path: '/questionnariepropsevents',
      name: 'questionnariePropsEvents',
      component: QuestionnariePropsEvents
    }
  ]
})
