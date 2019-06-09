export default {
  data () {
    return {
      selectedValue: {},
      answer: ''
    }
  },
  props: {
    questionContent: {
      type: String,
      default: '',
      required: true
    },
    isMulti: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
