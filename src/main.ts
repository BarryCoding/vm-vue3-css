import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './AppVuetify.vue'

const vue = createApp(App)
vue.use(vuetify)

vue.mount('#app')
