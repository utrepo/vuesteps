import Vue from 'vue'
import Router from 'vue-router'
import Questionnarie from './views/Questionnarie.vue'
import Question from './components/Question.vue'
import QuestionProps from './components/QuestionProps.vue'
import QuestionnarieProps from './views/QuestionnarieProps.vue'
import QuestionnariePropsEvents from './views/QuestionnariePropsEvents.vue'
import QuestionPropsEvents from './components/QuestionPropsEvents.vue'
import QuestionSlots from './components/QuestionSlots.vue'
import QuestionnarieSlots from './views/QuestionnarieSlots.vue'
import QuestionMixin from './components/QuestionMixin.vue'
import QuestionnarieMixin from './views/QuestionnarieMixin.vue'

Vue.use(Router)
Vue.component('question', Question)
Vue.component('question-props', QuestionProps)
Vue.component('question-props-events', QuestionPropsEvents)
Vue.component('question-slots', QuestionSlots)
Vue.component('question-mixin', QuestionMixin)

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
    },
    {
      path: '/questionnarieslots',
      name: 'questionnarieSlots',
      component: QuestionnarieSlots
    },
    {
      path: '/questionnariemixin',
      name: 'questionnarieMixin',
      component: QuestionnarieMixin
    }
  ]
})
