import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './AppTailwind.vue'

import './assets/main.css'

const vue = createApp(App)
vue.use(vuetify)

vue.mount('#app')
