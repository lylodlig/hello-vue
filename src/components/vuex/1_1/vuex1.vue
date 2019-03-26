<template>
<div>
<h1>{{count}}</h1>
</div>
</template>
<script>
export default {
  data() {
    return {
      obj: {name: "111"}
    }
  },
  methods: {
  },
  computed: {
    count() {
      return this.$store.count
    }
  }
}
</script>
