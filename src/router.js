import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/Register.vue')
    },
    {
      path: '/posts/new',
      name: 'newpost',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/NewPost.vue')
    },
    {
      path: '/posts',
      name: 'post',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/Posts.vue')
    },

    {
      path: '/posts/:id',
      name: 'postid',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/Post.vue')
    },
    {
      path: '/login',
      name: 'login',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/Login.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      // sfafsafa
      ///aff
      //fadfs
      component: () => import('./views/Logout.vue')
    },
  ]
})
