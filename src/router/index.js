import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: () =>
                import ("../views/home/index.vue")
        },
        {
            path: '/fenLei',
            component: () =>
                import ("../views/fenLei/index.vue")
        },
        {
            path: '/cart',
            component: () =>
                import ("../views/cart/index.vue")
        },
        {
            path: '/mine',
            component: () =>
                import ("../views/mine/index.vue")
        },
        {
            path: '/login',
            component: () =>
                import ("../views/login/index.vue")
        },
        {
            path: '/register',
            component: () =>
                import ("../views/register/index.vue")
        },
        {
            path: '/myOrder',
            component: () =>
                import ("../views/myOrder/index.vue")
        },
        {
            path: '/about',
            component: () =>
                import ("../views/about/index.vue")
        }
    ],
    linkActiveClass: 'active'
});

export default router