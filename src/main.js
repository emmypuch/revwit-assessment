/* eslint-disable no-undef */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ''
  }
]

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.mount('#app')
