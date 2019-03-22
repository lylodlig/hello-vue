<template>
  <div>
    <div v-on:click.self="parentClick">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>

      <!-- 当选中时，`picked` 为字符串 "a" -->
      <input type="radio" v-model="picked" value="a">

      <!-- `toggle` 为 true 或 false -->
      <input type="checkbox" v-model="toggle">
      <label>{{ toggle }}</label>

      <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
      <select v-model="selected">
        <option value="abc">ABC</option>
      </select>

      <input placeholder="请输入" v-model.lazy="msg"/>
    </div>
  </div>
</template>
<script>
  import MyBtn from "./MyBtn"

  export default {
    data() {
      return {
        a: "s",
        picked: false,
        toggle: true,
        selected: false,
        msg:""
      }
    },
    components: {
      MyBtn
    },
    methods: {
      add: function () {
      },
      parentClick: function () {
        console.log("parentClick")
      },
      say: function (value) {
        console.log("say:" + value)
      }
    },
  }
</script>
