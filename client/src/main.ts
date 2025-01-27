import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'
// import 'animate.css/source/animate.css'
import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import 'dayjs/locale/en'

import 'ant-design-vue/dist/reset.css'
import './assets/main.less'

 import 'virtual:uno.css'


import router from './router'

dayjs.locale('fa')

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
