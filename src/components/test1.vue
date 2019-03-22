<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{msg.split(" ")[1]}}</h1>
    <span v-once>这个将不会改变: {{ msg }}</span>
    <br>
    <input v-model="msg">

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>
<script>
  export default {
    name: "test1",
    data() {
      return {
        msg: "测试 数据",
        ok: false
      };
    }
  };
</script>
