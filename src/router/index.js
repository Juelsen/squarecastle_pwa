import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'startScreen',
        component: () => import(/* webpackChunkName: "about" */ '../views/startScreen.vue')
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules.vue')
    },
    {
        path: '/playerSettings',
        name: 'playerSettings',
        component: () => import(/* webpackChunkName: "about" */ '../views/playerSettings.vue')
    },
    {
        path: '/game',
        name: 'game',
        component: () => import(/* webpackChunkName: "about" */ '../views/game.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router