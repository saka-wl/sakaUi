import { createApp } from 'vue'
import './Test/style.css'
import App from './Test/App.vue'
import sakaUi from "./components/index"

createApp(App).use(sakaUi).mount('#app')