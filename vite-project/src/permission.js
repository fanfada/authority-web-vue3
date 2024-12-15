import index from "@/router/index.js";
import {getToken} from "@/utils/auth.js";

const whiteList = ['/login']
index.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`)
        }
    }
})