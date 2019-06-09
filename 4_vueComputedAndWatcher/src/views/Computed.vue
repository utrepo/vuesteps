<template>
  <div class="sampleDiv">
    <span>Individual</span>
    <br /><br />
    <span>Full name: {{fullname}}</span>
  </div>
</template>

<script>
  export default {
    name: "computed",
    data() {
      return {
        name: "Your name",
        surname: "Your surname"
      };
    },
    computed: {
      fullname: function() {
        return this.name + " " + this.surname;
      }
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
