<template>
  <div class="sampleDiv">
    <span>Rendered data value: {{message}}</span>
    <br /><br />
    <button v-on:click="clickMethodChange">Change rendered value</button>
    <br /><br />
    <button v-on:click="clickMethodReset">Reset rendered value</button>
    <br /><br />
    <input value="Without Binding"></input>
    <br /><br />
    <input v-bind:value="withBinding"></input>
    <br /><br />
    <input v-bind:value="withBinding" v-on:keyup.enter="enterEvent"></input>
  </div>
</template>

<script>
  export default {
    name: "attributes",
    data() {
      return {
        message: "Hello Vue",
        withBinding: "With Binding"
      };
    },
    methods: {
      clickMethodChange: function() {
        this.message = "See you Vue";
      },
      clickMethodReset: function() {
        this.message = "Hello Vue";
      },
      enterEvent: function() {
        this.message = "You pressed enter";
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
