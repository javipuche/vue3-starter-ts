import '@/assets/scss/styles.scss'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from '@/App.vue'
import { router } from '@/router'
import locales from '@/locales'
import pinia from '@/stores'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: locales
})

const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')

app.config.errorHandler = (err, instance, info) => {
  // TODO: Add tracking
  console.error('---ERROR---', { err, instance, info })
}
