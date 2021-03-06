import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Experience from '../views/Experience.vue'
import How from '../views/How.vue'
import Rental from '../views/Rental.vue'
import Spanish from '../views/Spanish.vue'
import Comment from '../views/Comment.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/experience',
    name: 'experience-view',
    component: Experience
  },
  {
    path: '/how',
    name: 'how-view',
    component: How
  },
  {
    path: '/rental',
    name: 'rental-view',
    component: Rental
  },
  {
    path: '/spanish',
    name: 'spanish-view',
    component: Spanish
  },
  {
    path: '/comment',
    name: 'comment-view',
    component: Comment
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
