<template>
  <div class="sampleDiv">
    <span>Rendered data value: {{message}}</span>
    <br /><br />
    <button v-on:click="clickMethodChange">Change rendered value</button>
    <br /><br />
    <button v-on:click="clickMethodReset">Reset rendered value</button>
  </div>
</template>

<script>
  export default {
    name: "hooks",
    data() {
      return {
        message: "Hello Vue"
      };
    },
    methods: {
      clickMethodChange: function() {
        this.message = "See you Vue";
      },
      clickMethodReset: function() {
        this.message = "Hello Vue";
      }
    },
    mounted() {
      this.message = "Hooked at mounted";
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
