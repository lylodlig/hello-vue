<template>
  <div>
    <input :value="phone" @change="$emit('change',$event.target.value)">
    <div>{{phone}}</div>
  </div>
</template>
<script>
  export default {
    props: ['phone'],
    model: {
      prop: "phone",//默认value
      event: "change",//默认input
    },
    data() {
      return {
        msg: "1"
      }
    }
  }
</script>
