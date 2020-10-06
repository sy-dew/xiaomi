import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')