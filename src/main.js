import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponents from './uiComponents'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
uiComponents.map(component => { //uiComponentlarni global qilish
  app.component(component.name, component)
})
//Vue.component('font-awesome-icon', FontAwesomeIcon)//fontawesome ni globalga aylashtirish
app.mount('#app')
