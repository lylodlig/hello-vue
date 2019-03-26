<template>
  <Props :obj="obj" :name="'司空见惯'" v-on:click.native="click"></Props>
</template>
<script>
  import Props from "./Props"

  export default {
    data() {
      return {
        obj: {name: "111"}
      }
    },
    components: {
      Props
    },
    methods: {
      click: function () {
        console.log(this.obj)
        console.log("Event Click")
      }
    },
    created() {
      this.$store.commit('increment')
      console.log("--------" + this.$store.state.count)
    }
  }
</script>
