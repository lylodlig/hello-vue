<template>
  <div>
    <h1>{{count}}</h1>
    <router-view/>
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapState} from "vuex";

  export default {
    computed: {
      ...mapState(['count'])
    },
    created() {

      // console.log(this.$store.state.moduleA.a)
      console.log(this.$store.getters['moduleA/getss'])
      // console.log(this.$store.getters.getss)
      // this.$store.dispatch('increments')
      this.$store.dispatch('moduleA/actionAA')
    },


    methods: {}
  }
</script>
