import Vue from 'vue'
import App from './App.vue'
import SelectBox from './lib'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(SelectBox)

new Vue({
  render: h => h(App)
}).$mount('#app')
