// main.js
import { createApp } from './app.js'
import { router } from './router.js'

const app = createApp()
app.use(router)
app.mount('#root')
