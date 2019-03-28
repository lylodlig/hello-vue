<template>
  <div>
    <div>{{ms}}</div>
    <div>{{computedMsg}}</div>
    <div>{{computedMsg2}}</div>
    <button v-on:click="changeMsg" style="width: 100px;height: 50px">修改属性</button>
    <div v-bind:class="{a:isActive,b:hasError}">jhkjsd</div>
  </div>

</template>
<script>
  export default {
    ms:"1",
    data() {
      return {
        msg: "Hello",
        msg2: "Hello",
        isActive: false,
        hasError: true
      };
    },
    //监听器
    watch: {
      ms: function () {
        alert("监听到msg发生变化")
      }
    },
    //计算属性
    computed: {
      //默认实现的get方法
      computedMsg: function () {
        return this.msg + " World"
      },
      computedMsg2: {
        get: function () {
          return this.msg + " World"
        },
        set: function (value) {
          this.msg = "set:" + value
        }
      }
    },
    methods: {
      changeMsg: function () {
        // this.computedMsg2 = "修改后的"
        this.ms = "修改后的"
      }
    }
  };
</script>
<style>
  .a {
    font-size: 20px;

  }

  .b {
    color: aqua;
  }
</style>

