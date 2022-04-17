import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home/Home'
import Basket from '../pages/Basket/Basket'
import Login from '../pages/Authorization/Login'
import Registration from '../pages/Authorization/Registration'
import ProductCard from '../pages/ProductCard/ProductCard'
import Ordering from '../pages/Ordering/Ordering'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductCard',
    component: ProductCard
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/ordering',
    name: 'Ordering',
    component: Ordering
  },
  /*{
    path: '/product',
    name: 'ProductCard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ //'../views/About.vue')
  //}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
