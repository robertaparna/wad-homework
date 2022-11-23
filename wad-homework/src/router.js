import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './components/Index.vue'
import SignUp from './components/SignUp.vue'
import AddPost from './components/AddPost.vue'
import SignUp2 from "@/components/SignUp2.vue";

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
        path: '/sign-up2',
        name: 'sign-up2',
        component: SignUp2
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router