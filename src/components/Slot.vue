<template>
  <div>
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
    }
  }
</script>
