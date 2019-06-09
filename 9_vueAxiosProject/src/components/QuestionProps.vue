<template>
  <div class="sampleDiv">
    <span>Question</span>
    <br />
    <span>{{questionContent}} </span>
    <br /><br />
    <select v-if="isMulti" v-model="selectedValue">
      <option :value="{ number: 5 }">Great</option>
      <option :value="{ number: 4 }">Good</option>
      <option :value="{ number: 3 }">Normal</option>
      <option :value="{ number: 2 }">Not Bad</option>
      <option :value="{ number: 1 }">Sorry :(</option>
    </select>
    <textarea v-else type="textArea" v-model="answer" rows="5" cols="30"></textarea>
  </div>
</template>

<script>
  export default {
    name: "questionprops",
    data() {
      return {
        selectedValue: {},
        answer: ""
      };
    },
    props: {
      questionContent: {
        type: String,
        default: "",
        required: true
      },
      isMulti: {
        type: Boolean,
        default: true,
        required: false
      }
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
    margin-top: 30px !important;
  }
</style>
