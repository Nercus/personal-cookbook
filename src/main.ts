import { createApp } from 'vue'
import './index.css'
import router from "./router";
import App from './App.vue'
import { createPinia } from "pinia";
import StarportPlugin from 'vue-starport'

const app = createApp(App)
app.use(StarportPlugin())
app.use(router)
app.use(createPinia());
app.mount('#app')
