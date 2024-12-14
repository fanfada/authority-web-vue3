import {createRouter, createWebHistory} from "vue-router";

const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router