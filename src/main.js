import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import './index.css'
import "./assets/layout.scss";

var app = createApp(App);
app.use(router);
app.config.devtools = true
app.mount('#app')
