import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Table from '../views/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/register',
    component: Register,
    children:[
      {path: '', component: Register},
      {path: ':index/editar',name: 'edit', component: Register},
    ],
  },
  {
    path: '/table',
    component: Table,
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
/* {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    component: Registers,
    children:[
      {path: '', component: Registers},
      {path: ':index/editar',name: 'edit', component: Registers},
    ]
  },
  {
    path: '/table',
    component: Table,
    
  },*/