<template>
  <div class="otter">
      我是otter组件拿到的全局状态{{getNum}}
      <button  @click="oadd">otter组件--改变状态按钮</button>
      <button @click="otterActions">otter组件--改变状态按钮(action)</button>
  </div>
</template>

<script>
export default {
  name: "otter",
  computed: {
    getNum: function(){
      return this.$store.state.num
    }
  },
  methods: {
    oadd: function(){
       this.$store.commit('increase')
    },
    otterActions(){
      this.$store.dispatch('decreaseAction')
    }
  }
};
</script>


<style scoped>
</style>