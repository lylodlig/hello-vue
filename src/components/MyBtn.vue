<template>
  <div>
    <button style="font-size: 30px" v-on:click="$emit('onbtnclick',{name:'张三',age:'5'})">
      <slot></slot>
    </button>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  </div>

</template>
<script>
  export default {
      props: ['value'],
    data() {
      return {}
    },
    methods: {
      test: function () {
        console.log("子组件的方法")
        var result=this.$parent.parentTest()
        console.log(result)
        return "子组件返回值"
      }
    }
  }
</script>

