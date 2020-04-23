<template>
  <div class="parent">
    <span>我是父组件</span>-----{{fromSonMsg}} <br/>
    我是父组件拿到的全局状态：{{getNum}}
    <button @click="padd">父组件--改变状态按钮</button>
    <button @click="pActions">父组件--改变状态按钮(action)</button>
    <hr/>
    <son :msg="tonSonMsg" @handle="getMsgFromSon"></son>
  </div>
</template>

<script>
import son from "./son";

export default {
  name: "parent",
  data: function() {
    return {
      tonSonMsg: "我是你的父亲",
      fromSonMsg: ""
    };
  },
  components: {
    son
  },
  methods: {
    getMsgFromSon: function(value) {
        this.fromSonMsg = value
    },
    padd(){
      this.$store.commit('increase')
    },
    pActions(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum: function(){
      //return this.$store.state.num
      return this.$store.getters.getNum
    }
  }
};
</script>


<style scoped>
</style>