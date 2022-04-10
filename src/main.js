import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YmapPlugin from 'vue-yandex-maps'

const setting = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
}

createApp(App).use(store).use(router).use(YmapPlugin,setting).mount('#app')
