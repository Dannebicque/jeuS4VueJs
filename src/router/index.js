import { createRouter, createWebHistory } from 'vue-router'
import JeuView from '../views/Jeu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/jeu/:idpartie',
      name: 'jeu',
      component: JeuView
    }
  ]
})

export default router
