import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import EventArticlePage from '@/pages/EventArticle'
import AddArticle from '@/pages/addArticle'
import AuthPage from '@/pages/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/articles',
      name: 'eventArticle',
      component: EventArticlePage
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/add',
      name: 'addEvent',
      component: AddArticle,
      meta: {
        requireAuth: true
      }
    }
  ]
})
