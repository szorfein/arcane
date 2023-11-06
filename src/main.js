// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
