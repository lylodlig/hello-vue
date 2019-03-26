<template>
  <div>
    <div v-on:click="clic"><h1>{{name}}</h1></div>
    <h1>{{list}}</h1>
    <h1>{{isVisiable}}</h1>
    <h1>{{typeMode}}</h1>
    <h1>{{changeAtr}}</h1>
    <Btn v-on:onbtnclick="change">修改属性</Btn>
  </div>
</template>
<script>
  import Btn from "./MyBtn"

  export default {
    // inheritAttrs:false,
    name: "Props",
    // props:["name","age"],
    props: {
      obj:Object,
      name: String,
      list: {
        type: Array,
        default: () => []
      },
      isVisiable: {
        type: Boolean,
        default: false
      },
      changeAtr: {
        type: Function,
        default: () => {
        }
      },
      typeMode: {
        validator(value) {
          console.log("validator")
          return ['success', 'warning', 'danger'].includes(value)
        }
      }
    },
    data() {
      return {}
    },
    components: {
      Btn
    },
    methods: {
      change: function () {
        this.obj="sfd"
        //直接修改父组件传递的值会报错
        // this.name="fsdf"
        //通过回调来修改
        this.changeAtr("修改后名字")
      },
      clic: function () {
        console.log("click")
      },
    },
    created() {
      console.log(this.$attrs)
    }
  }
</script>
