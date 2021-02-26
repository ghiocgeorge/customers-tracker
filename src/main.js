import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
// import RouterTab and styles
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(RouterTab)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
