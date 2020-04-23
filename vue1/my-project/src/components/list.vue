<template>
  <ul>
    <li>
        <router-link :to="{name:'helloWorld', params:{worldMsg:'只有一个世界'}}">helloWorld</router-link>
    </li>
    <li>
        <router-link :to="{name:'helloEarth', params:{earthMsg:'只有一个地球'}}">helloEarth</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>