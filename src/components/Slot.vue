<template>
  <div>
    <div>{{name2}}</div>
    <div>{{name}}</div>
    <slot v-bind:user="user">{{user.name}}</slot>
  </div>
</template>
<script>
  export default {
    props: ['name'],
    data() {
      return {
        user: {name: "张索尼", name2: "历史的"}
      }
    },
    computed: {
      name2: function () {
        return "计算属性:" + name
      }
    },
    watch:{
      name:function (newV,oldV) {
        console.log(newV,oldV)
      }
    },
  }
</script>
