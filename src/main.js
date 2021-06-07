import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '300px',
  easing: 'cubic-bezier( 0.53, 0.91, 0.55, 0.99 )',
  mobile: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
