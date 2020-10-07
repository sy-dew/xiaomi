import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

router.beforeEach((to, from, next) => {
    //console.log(to);
    //console.log(from);
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (localStorage.getItem('access_token')) { //判断本地是否存在access_token
            next();
        } else {
            if (to.path === '/login') {
                next();
            } else {
                next({
                    path: '/login'
                })
            }
        }
    } else {
        next();
    }
    /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
    if (to.fullPath == "/login") {
        if (localStorage.getItem('access_token')) {
            next({
                path: from.fullPath
            });
        } else {
            next();
        }
    }
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')