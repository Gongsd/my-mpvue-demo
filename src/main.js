import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import fly from './utils/fly'
import App from '@/App'
import store from '@/store'

Vue.use(MpvueRouterPatch)
Vue.prototype.$http = fly
Vue.config.productionTip = false

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
