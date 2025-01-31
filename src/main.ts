import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/variables.css'
import './assets/styles/animations.css'
import './assets/styles/breakpoints.css'

const app = createApp(App)

app.use(router)
app.use(VueFullPage)
app.mount('#app') 