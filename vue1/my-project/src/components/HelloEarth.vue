<template>
  <div class="hello">
    <h1>HelloEarth</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.earthMsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 * {
   color: blue;
 }
</style>
