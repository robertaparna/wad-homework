import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import './assets/generic.css'

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
//createApp(App).use(store).use(router).mount('#app')
