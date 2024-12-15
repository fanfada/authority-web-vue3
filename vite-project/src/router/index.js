import Layout from '@/layout/index.vue'
import {createRouter, createWebHistory} from "vue-router";

const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/layout',
        component: Layout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router