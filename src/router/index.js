import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '../components/user'
import home from '../components/home'
import add from '../components/Useradd'
import test from '../components/test'
import update from '../components/update'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //       path: '/',
    //       name: 'HelloWorld',
    //       component: HelloWorld
    //     },
    // {path: '/',redirect:'/home'},
    {path: '/',redirect:'/test'},
    {path: '/test',component:test},
    {path: '/update',component:update,name: 'update'},
    {path: '/home',component:home},
    {path: '/user',component:user,
    children:[{path:'add',component:add}]
    },
    {path: '/add',component:add},
  ]
})
