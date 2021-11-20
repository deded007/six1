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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 500 };
  }
})

export default router