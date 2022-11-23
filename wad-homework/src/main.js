import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/generic.css'
import {createStore} from "vuex";

// const store = createStore({
//     state () {
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment (state) {
//             state.count++
//         }
//     }
// })
createApp(App).use(store).mount('#app')

app.mount('#app')
new Vue ({
    el: '#app',
    router:router,
    template: '<App/>',
    components: {App}
})
