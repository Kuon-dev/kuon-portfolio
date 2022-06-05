import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Home from './views/landing.vue'
import Work from './views/works.vue'
import Skills from './views/skills.vue'
import contact from './views/contact.vue'
import notfound from './views/404page.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepg',
      component: Home,
      props: true,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      props: true,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
      props: true,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: notfound,
      props: true,
    },
  ]
})