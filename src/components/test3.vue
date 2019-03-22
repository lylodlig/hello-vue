<template>
  <div>
    <li v-for="item in items">
      {{item.name}}
    </li>
    <hr/>
    <li v-for="(item,index) in items">
      {{index}}---{{item.name}}
    </li>
    <hr/>
    <div>遍历对象，得到key和value</div>
    <ul v-for="(v,k) in obj">{{v}}----{{k}}</ul>
    <hr/>
    <MyBtn v-on:onbtnclick="push">测试PUSH</MyBtn>
    <MyBtn v-on:onbtnclick="pop">测试POP</MyBtn>
    <MyBtn v-on:onbtnclick="shift">测试Shift</MyBtn>
    <MyBtn v-on:onbtnclick="unshift">测试UnShift</MyBtn>
    <MyBtn v-on:onbtnclick="splice">测试splice</MyBtn>
    <MyBtn v-on:onbtnclick="sort">测试sort</MyBtn>
    <MyBtn ref="child" v-on:onbtnclick="reverse" v-model="msg">测试reverse</MyBtn>
    <button @click="bt">调用子组件方法</button>
  </div>
</template>
<script>
  import MyBtn from './MyBtn'

  export default {
    data() {
      return {
        msg: "sg",
        items: [{name: "张三"}, {name: "li二"}],
        obj: {name: "姓名", sex: "性别", age: "年龄"}
      }
    },
    components: {
      MyBtn
    },
    methods: {
      push: function () {
        this.items.push({name: "账务"})
      },
      pop: function () {
        this.items.pop()
      },
      shift: function () {
        this.items.shift()
      },
      unshift: function () {
        this.items.unshift({name: "Unshift"})
      },
      //第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除
      //后想要在原位置替换的值（可选）
      splice: function () {
        this.items.splice(0, this.items.length)
      },
      sort: function () {
        this.items.sort()
      },
      reverse: function (value) {
        console.log(value.name + "-----" + value.age)
        this.items.reverse()
      },
      bt: function () {
        var result = this.$refs.child.test()
        console.log(result)
      },
      parentTest: function () {
        console.log("调用父组件方法")
        return "返回值"
      }
    }
  }
</script>
