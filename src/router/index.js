import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'

// 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log(from)
    store.commit("changeTabActive",to.path)
    next()
})

export default router