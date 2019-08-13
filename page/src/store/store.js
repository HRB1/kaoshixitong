import Vue from 'vue'
import Vuex from 'vuex'
import comstates from "./modules/comstates";

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    comstates,//公共状态
  }
})
