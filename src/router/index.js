import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/main'
import authorPage from '@/components/author'
import developerPage from '@/components/developer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/author',
      name: 'authorPage',
      component: authorPage
    },
    {
      path: '/desarrollador',
      name: 'desarrollador',
      component: developerPage
    }
  ]
})
