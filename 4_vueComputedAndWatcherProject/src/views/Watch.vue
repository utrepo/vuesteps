<template>
  <div class="sampleDiv">
    <span>Individual</span>
    <br /><br />
    <span>Full name: {{fullname}}</span>
  </div>
</template>

<script>
  export default {
    name: "watch",
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
    },
    mounted() {
      this.name = "Friend's name";
    },
    watch: {
      name: function() {
        this.surname = "Friend's surname";
      }
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
