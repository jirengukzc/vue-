<template>
  <div class="hello">
    <h3>我是axiosAPP,用来发送请求,拦截响应</h3>
    <button @click="getData">get发送请求</button>
    <button @click="postData">post发送请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
Vue.prototype.$http = axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getData:function(){
      var self = this
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params: {
          page: 1,
          limit: 15
        }
      })
       .then(function(res){
         self.items = res.data.data
         console.log(res.data.data)
       })
       .catch(function(err){
         console.log(err)
       })
    },
    postData:function(){
      var self = this
      this.$http.post(url,qs.stringify({
        page: 1,
        limit: 20
      }))
       .then(function(res){
         self.items = res.data.data
         console.log(res.data.data)
       })
       .catch(function(err){
         console.log(err)
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
