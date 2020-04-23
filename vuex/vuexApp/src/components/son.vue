<template>
  <div class="son">
    <span>我是子组件</span>-----{{msg}}
    <button @click="sentMsgfa">向父组件传递数据</button> <br>
    我是子组件拿到的全局状态：{{getNum}}
    <button  @click="sadd">子组件--改变状态按钮</button>
    <button @click="sActions">子组件--改变状态按钮(action)</button>
  </div>
</template>

<script>
export default {
  name: "son",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
        toFatherMsg: '我是你的son'
    };
  },
  methods: {
      sentMsgfa: function(){
          this.$emit('handle', this.toFatherMsg)
      },
      sadd: function(){
        this.$store.commit('increase')
      },
      sActions(){
        this.$store.dispatch('decreaseAction')
      }
  },
  computed: {
    getNum: function(){
      return this.$store.state.num
    }
  }
};
</script>


<style scoped>
</style>