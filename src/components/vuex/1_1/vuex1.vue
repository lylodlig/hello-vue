<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{countAlias}}</h1>
    <h1>{{doneTodos}}</h1>
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapState} from "vuex";

  export default {
    computed: {
      a: function f() {
        return 2222
      },
      ...mapState(['countAlias', "count"]),
      ...mapGetters(['doneTodos'])
    },
    created() {
      //通过属性访问getter
      let doneTodos = this.$store.getters.doneTodos
      console.log(doneTodos)
      // this.$store.getters.getTodoById(1)
      // this.$store.commit({
      //   type: 'increment',
      //   amount: 10
      // })
      this.$store.dispatch('incrementAsync', {
        amount: 10,
        success(s) {
          console.log(s)
        }
      })

      // this.$store.dispatch("actionsA").then(() => {
      //     console.log("--------")
      // });
      this.actionsA().then(
        (value) => {
          setTimeout(() => {
            console.log("Resolved的回调1s后:"+value)
          }, 1000)
          // reject()
          return value
        },
        () => console.log("Rejected的回调")
      ).then(
        (value) => console.log("第二个Resolved的回调:"+value),
        () => console.log("第二个Rejected的回调")
      )
      // actionsA().then(() => {
      //
      // })
      var f = v => v
      //等价于
      var f = function (v) {
        return v
      }

      var f = () => 5
      //等价于
      var f = function () {
        return 5
      }

      var sum = (sum1, sum2) => {
        return sum1 + sum2
      }
      // function insert(value) {
      //   return {into:function (array) {
      //       return {after:function (afterValue) {
      //           array.splice(array.indexOf(afterValue)+1,0,value)
      //           return array
      //         }}
      //     }}
      // }
      let insert = (value) => ({
        into: (array) => ({
          after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value)
            return array
          }
        })
      })
      insert(2).into([1, 3]).after(1)  //[1,2,3]
    },


    methods: {
      ...mapActions([
        'actionsA'
      ])
    }
  }
</script>
