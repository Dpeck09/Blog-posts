import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MoreInfoView from '../views/MoreInfoView.vue';

import Signup from "../views/Signup.vue";

import Login from "../views/Login.vue";

import Logout from "../views/Logout.vue";

import PostsIndex from "../views/PostsIndex.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/MoreInfoView",
    name: "MoreInfo",
    component: MoreInfoView
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/PostsIndex",
    name: "PostsIndex",
    component: PostsIndex
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
