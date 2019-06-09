<template>
  <div class="sampleDiv">
    <span>Question</span>
    <br /><br />
    <span>What about the examples ? </span>
    <br /><br />
    <select v-model="selectedValue">
      <option :value="{ number: 5 }">Great</option>
      <option :value="{ number: 4 }">Good</option>
      <option :value="{ number: 3 }">Normal</option>
      <option :value="{ number: 2 }">Not Bad</option>
      <option :value="{ number: 1 }">Sorry :(</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "question",
    data() {
      return {
        selectedValue: {}
      };
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
