// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// import route.js
import { routes } from './routes'
// import Vuex Store from store.js
import { store } from './store/store'
// import Header
import Header from './components/Header'

// import stock in stock folder
import StockInStock from './components/stock/Stock'
import StockInPortfolio from './components/portfolio/Stock'

Vue.use(Router)
Vue.use(VueResource)
Vue.component('app-header', Header)
Vue.component('app-stock', StockInStock)
Vue.component('app-stock-portfolio', StockInPortfolio)

// set up root http
Vue.http.options.root = 'https://laxistech-54e69.firebaseio.com/'

const router = new Router({
  mode: 'history',
  routes
})

// Vue filter
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //
  template: '<App/>',
  components: { App }
})
