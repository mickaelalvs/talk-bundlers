// router.js
import { createRoute } from './route.js'

export const router = {
  routes: [
    createRoute('/', 'Home'),
    createRoute('/about', 'About'),
  ]
}
