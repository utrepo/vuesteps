<template>
  <div class="sampleDiv">
    <span>Individual</span>
    <br /><br />
    <span>Full name: {{fullname}}</span>
    <br /><br />
    <span>{{fullname}} has:</span>
    <span v-if="nameCount===1">One name</span>
    <span v-else-if="nameCount===2">Two names</span>
    <span v-else>More than two names</span>
  </div>
</template>

<script>
  export default {
    name: "conditionalRendering",
    data() {
      return {
        name: "Your name",
        surname: "Your surname",
        nameCount: 0
      };
    },
    computed: {
      fullname: function() {
        return this.name + " " + this.surname;
      }
    },
    mounted() {
      this.name = "Friend's name";
      var nameArr = this.name.split(" ");
      this.nameCount = nameArr.length;
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
