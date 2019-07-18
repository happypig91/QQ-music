
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App),
  components: { App },
  template: '<App/>'
})
