import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import axios from 'axios'
import { createPinia } from "pinia";


axios.defaults.baseURL = 'https://user-words.herokuapp.com/api/';
createApp(App).use(router).use(createPinia()).mount("#app");
// createApp(App).use(router).mount('#app')
