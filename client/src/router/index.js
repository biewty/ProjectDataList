import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

import AllMotorcycles from '@/components/Motorcycle/AllMotorcycles'
import MotorcycleCreate from '@/components/Motorcycle/CreateMotorcycle'
import MotorcycleEdit from '@/components/Motorcycle/EditMotorcycle'
import MotorcycleShow from '@/components/Motorcycle/ShowMotorcycle'


import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    
    {
      path: '/motorcycles',  
      name: 'motorcycles',   
      component: AllMotorcycles  
    },
    {
      path: '/motorcycle/create',  
      name: 'motorcycle-create',   
      component: MotorcycleCreate  
    },
    {
      path: '/motorcycle/edit/:motorcycleId',  
      name: 'motorcycle-edit',  
      component: MotorcycleEdit  
    },
    {
      path: '/motorcycle/:motorcycleId',  
      name: 'motorcycle-show',   
      component: MotorcycleShow  
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
