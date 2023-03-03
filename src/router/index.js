import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ()=> import('../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue')
  },
  {
    path: '/userprofile',
    name: 'User Profile',
    component: () => import('../views/UserProfileView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/SingleProductView.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
