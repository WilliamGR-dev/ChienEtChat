import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'
import Cat from '../views/Cat.vue'
import Dog from '../views/Dog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/pets/cat/:id',
    name: 'Cat',
    component: Cat
  },
  {
    path: '/pets/dog/:id',
    name: 'Dog',
    component: Dog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
