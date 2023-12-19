import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import 'highcharts/css/highcharts.css';

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode:'history'
  
})

new Vue({
  render: (h) => h(App)
  ,router,
  // beforeCreate(){
  //   if(!isAuthenticated()){
  //     this.$router.push('/login');
  //   }
  // }

}).$mount('#app')
