import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import './index.css'
import "./assets/layout.scss";

createApp(App).use(router).mount('#app')
