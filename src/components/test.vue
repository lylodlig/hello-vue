<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <!--<Props v-bind:name="name" v-bind:changeAtr="change" v-bind:mess="'skjd'"
          v-bind:typeMode="'sdsd'"></Props>-->

    <!--<Slot :name="name">这是插槽内容</Slot>-->
    <Slot :name="name" v-slot:default="prop">
      {{prop.user.name2}}
    </Slot>

    <PersonInfo v-model="name"></PersonInfo>
    <PersonInfo :phone="name" @change="name=$event.target.value"></PersonInfo>

    <Clock></Clock>
  </div>
</template>

<script>
  import Props from "./Props"
  import Slot from "./Slot"
  import PersonInfo from "./bind/PersonInfo"
  import Clock from "./1_6/Clock"

  export default {
    data() {
      return {
        name: "slkdjf"
      }
    },
    components: {
      Props, Slot, PersonInfo, Clock
    },
    methods: {
      change: function (value) {
        this.name = value
      }
    }
  }
</script>
