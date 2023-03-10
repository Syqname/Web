import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Mai from '../views/Mai.vue'
import MaiXX from '../views/MaiXX.vue'
import Sale from '../views/Sale.vue'
import SaleXX from '../views/SaleXX.vue'
import Core from '../views/Core.vue'
import Detail from '../views/Detail.vue'
import Detailgd from '../views/Detailgd.vue'
import Detaill from '../views/Detaill.vue'
import Detaillgd from '../views/Detaillgd.vue'
import NoticeMore from '../views/NoticeMore.vue'
import ThingMore from '../views/ThingMore.vue'
import WarningMore from '../views/WarningMore.vue'
import ItemMore from '../views/ItemMore.vue'
import Login from '../views/Login.vue'




import PeopleEidt from '../views/Core/PeopleEidt.vue'
import PeopleList from '../views/Core/PeopleList.vue'

import BotanyEidt from '../views/Core/BotanyEidt.vue'
import BotanyList from '../views/Core/Botany-List.vue'

import DemandEidt from '../views/Core/DemandEidt.vue'
import DemandList from '../views/Core/DemandList.vue'

import MiMa from '../views/Core/MiMa.vue'
import Order from '../views/Core/Order.vue'
import Real_Name from '../views/Core/Real_Name.vue'






Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home,meta:{isPublic:true}},
      {path:'/details/:id', name:'detail',component:Detail,props:true,meta:{isPublic:true}},
      {path:'/detailgds', name:'detailgd',component:Detailgd,props:true,meta:{isPublic:true}},
      {path:'/detaills/:id', name:'detaill',component:Detaill,props:true,meta:{isPublic:true}},
      {path:'/detaillgds', name:'detaillgd',component:Detaillgd,props:true.valueOf,meta:{isPublic:true}},
      {path:'/mais',name:'mai',component:Mai,meta:{isPublic:true}},
      {path:'/maixxs/:id',name:'maixx',component:MaiXX,props:true},
      {path:'/sales',name:'sale',component:Sale,meta:{isPublic:true}},
      {path:'/salexxs/:id',name:'salexx',component:SaleXX,props:true,},
      {path:'/noticemore',name:'noticemore',component:NoticeMore,meta:{isPublic:true}},
      {path:'/thingmore',name:'thingmore',component:ThingMore,meta:{isPublic:true}},
      {path:'/warningmore',name:'warningmore',component:WarningMore,meta:{isPublic:true}},
      {path:'/itemmore',name:'itemmore',component:ItemMore,meta:{isPublic:true}},
   
      {path:'/cores',name:'core',component:Core,children:[
      
        
        {path:'/botanies/create',name:'botanyeidt',component:BotanyEidt,},
        {path:'/botanies/edit/:id',name:'botanyeidt',component:BotanyEidt,props:true,},
        {path:'/botanies/list',name:'botanylist',component:BotanyList,},

        {path:'/demands/create',name:'demandeidt',component:DemandEidt},
        {path:'/demands/edit/:id',name:'demandeidt',component:DemandEidt,props:true},
        {path:'/demands/list',name:'demandlist',component:DemandList},

        {path:'/peoples/create/:id',name:'peopleeidt',component:PeopleEidt,props:true},
        {path:'/mima/:id',name:'peoplelist',component:MiMa,props:true},
        {path:'/cores',name:'peoplelist',component:PeopleList,},

        {path:'/orders',name:'orders',component:Order,},
        {path:'/real_name',name:'real_name',component:Real_Name,},

               ]
               },      
    ],meta:{isPublic:true}
  },
  {path:'/login',name:'login',component:Login,meta:{isPublic:true}},
  {path:'/login/:id',name:'login',component:Login,props:true,meta:{isPublic:true}}


]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
