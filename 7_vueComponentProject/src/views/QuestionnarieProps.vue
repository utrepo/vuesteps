<template>
  <div class="sampleDiv">
    <question-props questionContent="What about examples?"></question-props>
    <br /><br />
    <question-props questionContent="What about teachers?"></question-props>
    <br /><br />
    <question-props questionContent="What about presentations?"></question-props>
    <br /><br />
    <question-props questionContent="What about Vue?"></question-props>
    <br /><br />
    <question-props questionContent="Do you have any comment?" :isMulti="false"></question-props>
  </div>
</template>

<script>
  export default {
    name: "questionnarieProps"
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
