<template>
  <div class="hello">
    <parent></parent>
    <hr>
    <otter></otter>
  </div>
</template>

<script>
import parent from './parent'
import otter from './otter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components: {
    parent,
    otter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
