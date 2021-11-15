import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/index.vue'),
    children:[
      {
        path:':type/City/:city',
        component:() => import('./views/list.vue')
      },
      {
        path:':type+/:id+',
        component:() => import('./views/detail.vue')
      },
    ]
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router