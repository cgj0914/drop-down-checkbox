import Vue from 'vue'
import App from './App.vue'
import ConvenienceImage from './lib'

Vue.config.productionTip = false

Vue.use(ConvenienceImage)

new Vue({
  render: h => h(App)
}).$mount('#app')
