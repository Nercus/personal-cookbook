import { createApp } from 'vue'
import './index.css'
import router from "./router";
import App from './App.vue'
import { createPinia } from "pinia";

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.use(createPinia());
app.mount('#app')
