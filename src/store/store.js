import Vue from 'vue'
import Vuex from 'vuex'
// import portfolio and stock store modules
import portfolio from './portfolio'
import stock from './stock'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules: {
    portfolio,
    stock
  }
})
