import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '../vue3-page-test/index.vue'
import './styles/reset.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')