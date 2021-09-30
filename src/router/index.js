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
    // console.log(to)
    // console.log(from)
    // console.log(next)
    // VueRouter.path({
    //     path:to.path
    // })
    // next(to.path)
    // store.commit("changeTabActive",to.path)
    // routes.push({
    //     path:to.path
    // })
    store.commit("changeTabActive",to.path)
    if(to.name === "login"){
        store.commit("clearToken")
        store.commit("clearRefreshToken")
        store.commit("changeTabActive","index")
    }
    next()
})

export default router