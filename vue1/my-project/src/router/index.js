import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import helloEarth from '../components/helloEarth'

Vue.use(router)

//配置路由
export default new router({
  routes: [{
    name: 'helloWorld',
    path: '/helloWorld/:worldMsg',//指定要跳转的路径
    component: HelloWorld//指定要跳转的组件
  }, {
    name: 'helloEarth',
    path: '/helloEarth/:earthMsg',//指定要跳转的路径
    component: helloEarth//指定要跳转的组件
  }]
})