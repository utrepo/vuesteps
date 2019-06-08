<template>
  <div class="sampleDiv">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "DataRendering",
    data() {
      return {
        message: "Hello Vue"
      };
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
