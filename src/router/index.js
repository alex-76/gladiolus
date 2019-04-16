import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/VForm'
import Main from '@/components/VMain'
import About from '@/components/VAbout'
import Product from '@/components/VProducts'
import ProductSingle from '@/components/VProductSingle'
import StartScreen from '@/components/training/VStartScreen'
import Questing from '@/components/training/VQuesting'
import Result from '@/components/training/VResultScreen'

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
      name: 'form',
      component: Form,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: true
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/productItem/:id',
      name: 'productItem',
      component: ProductSingle,
      props: true
    },
    {
      path: '/training',
      name: 'startScreen',
      component: StartScreen,
      props: true
    },
    {
      path: '/questing',
      name: 'questing',
      component: Questing,
      props: true
    },
    {
      path: '/result/:s/:e',
      name: 'result',
      component: Result,
      props: true
    },
    {
      path: '*',
      redirect:"/"
    }


  ]
})


