import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import About from '@/components/About'
import Product from '@/components/Products'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: true
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      props: true
    },
  ]
})


