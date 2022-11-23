import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from '@/components./Login.vue';
import Index from '@/components./Index.vue';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/index',
        name: 'Index.vue',
        component: Index
    }
];
const router = new VueRouter({
    routes: routes
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')
new Vue ({
    el: '#app',
    router:router,
    template: '<App/>',
    components: {App}
})