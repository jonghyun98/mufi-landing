import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(VueFullPage)
app.mount('#app') 