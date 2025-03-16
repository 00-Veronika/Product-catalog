import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProductPage from './components/ProductPage.vue'
import CartPage from './components/CartPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import OurClients from './components/OurClients.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/product', name: 'Product', component: ProductPage },
  { path: '/client', name: 'Client', component: OurClients },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/profile', name: 'Profile', component: ProfilePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

