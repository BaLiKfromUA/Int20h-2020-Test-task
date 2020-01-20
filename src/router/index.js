import Vue from 'vue'
import VueRouter from 'vue-router'
import recorder from 'vue-audio-recorder'
import Home from '../views/GameStart.vue'

Vue.use(VueRouter)
Vue.use(recorder)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/result',
        name: 'gameResult',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/GameResult.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
