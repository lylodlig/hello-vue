<template>
  <div>
    <button @click="destroyClock = !destroyClock">
      {{ destroyClock ? "加载时钟" : "销毁时钟" }}
    </button>
    <Clock v-if="!destroyClock"/>
    <!--<Functional :name="name" />-->
    <TempVar
      :var1="`hello ${name}`"
      :var2="destroyClock ? 'hello vue' : 'hello world'"
    >
      <!--var1,var2 就是两个临时变量-->
      <template v-slot="{ var1, var2 }">
        {{ var1 }}
        {{ var2 }}
        <h1 >{{ var2 }}</h1>
      </template>
    </TempVar>
  </div>
</template>
<script>
  import Clock from "./Clock";
  // import Functional from "./Functional";
  import TempVar from "./TempVar";

  export default {
    components: {
      Clock,
      // Functional,
      TempVar
    },
    data() {
      return {
        destroyClock: false,
        name: "vue"
      };
    }
  };
</script>
