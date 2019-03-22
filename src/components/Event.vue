<template>
    <Props :name="'司空见惯'" v-on:click.native="click"></Props>
</template>
<script>
  import Props from "./Props"
  export default {
    components:{
      Props
    },
    methods: {
      click:function () {
        console.log("Event Click")
      }
    }
  }
</script>
