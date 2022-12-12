import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './components/Index.vue'
import SignUp from './components/SignUp.vue'
import AddPost from './components/AddPost.vue'
import LoginUus from "@/components/LoginUus.vue";

const routes = [{
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/add-post',
        name: 'add-post',
        component: AddPost
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp
    },
    {
        path: '/login-uus',
        name: 'login-uus',
        component: LoginUus
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router