import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home/Home'
import Basket from '../pages/Basket/Basket'
import ProductCard from '../pages/ProductCard/ProductCard'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'ProductCard',
    component: ProductCard
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
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
