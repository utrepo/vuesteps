<template>
  <div class="sampleDiv">
    <question-props-events v-model="result1" questionContent="What about examples?"></question-props-events>
    <br /><br />
    <question-props-events v-model="result2" questionContent="What about teachers?"></question-props-events>
    <br /><br />
    <question-props-events v-model="result3" questionContent="What about presentations?"></question-props-events>
    <br /><br />
    <question-props-events v-model="result4" questionContent="What about Vue?"></question-props-events>
    <br /><br />
    <question-props-events @commentEntered="thanks" questionContent="Do you have any comment?" :isMulti="false"></question-props-events>
    <br /><br />
    <span>Average Result: {{averageResult}}</span>
    <br /><br />
    <span>Your comment: {{thanksValue}}</span>
  </div>
</template>

<script>
  export default {
    name: "questionnarieProps",
    data() {
      return {
        result1: 0,
        result2: 0,
        result3: 0,
        result4: 0,
        thanksValue: ""
      };
    },
    computed: {
      averageResult: function() {
        return (this.result1 + this.result2 + this.result3 + this.result4) / 4;
      }
    },
    methods: {
      thanks: function(val) {
        if (val && val.trim() !== "") {
          this.thanksValue = "Thank you for your comment";
        } else {
          this.thanksValue = "";
        }
      }
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
