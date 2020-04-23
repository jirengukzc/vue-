import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建状态仓库，注意Store,state不能改
export default new Vuex.Store({
    state: {
      num: 88
    },
    mutations: {
      //定义我们状态改变的函数
      increase: function(state){
        state.num++
      },
      decrease(state){
        state.num = state.num - 20
      }
    },
    actions: {
       //context为我们上下文的对象
      decreaseAction: function(context){
        //actions只能对mutations中的函数进行操作
        // setTimeout(function(){
          context.commit('decrease')
        // },1000)    
      }
    },
    getters: {
      getNum: function(state){
        return state.num>0 ? state.num : 0
      }
    }
  })