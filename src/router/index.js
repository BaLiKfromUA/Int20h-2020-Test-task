import Vue from 'vue'
import VueRouter from 'vue-router'
import recorder from 'vue-audio-recorder'

Vue.use(VueRouter);
Vue.use(recorder);//todo: transfer

const routes = [];

const router = new VueRouter({
    routes
});

export default router;
