import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import HeaderDiv from '@/components/layout/header'
import Login from '@/components/login'
import Signup from '@/components/signup'
import PerCenter from '@/components/perCenter'
import PerInfo from '@/components/perCenter/perInfo'
import PerMessage from '@/components/perCenter/perMessage'
import SubmitSellerMeasage from '@/components/perCenter/submitSellerMeasage'
import Myorders from '@/components/perCenter/myorders'
import Orderinfo from '@/components/perCenter/orderinfo'
import SellerAudit from '@/components/adminComs/sellerAudit'
import Myshops from '@/components/sellerComs/myshops'
import Allitems from '@/components/allitems'
import AllProducts from '@/components/itemComs/allProducts'
import Trolley from '@/components/itemComs/trolley'
import Item from '@/components/itemComs/item'
import SearchResult from '@/components/itemComs/searchResult'


Vue.use(Router)
Vue.use(HeaderDiv)
export default new Router({
	mode: 'history',
  	routes: [
    	{
      		path: '/',
      		name: 'main',
      		component: Main
    	},
    	{
      		path: '/login',
      		name: 'login',
      		component: Login
    	},
    	{
      		path: '/signup',
      		name: 'signup',
      		component: Signup
    	},
      {
          path: '/perCenter',
          name: 'perCenter',
          component: PerCenter,
          children:[
            {
              path:'perInfo',
              component:PerInfo
            },
            {
              path:'perMessage',
              component:PerMessage
            },
            {
              path:'submitSellerMeasage',
              component:SubmitSellerMeasage
            },
            {
              path:'sellerAudit',
              component:SellerAudit
            },
            {
              path:'myshops',
              component:Myshops
            },
            {
              path:'myorders',
              component:Myorders
            },
            {
              path:'orderinfo',
              component:Orderinfo
            }
          ]
      },
      {
          path: '/allitems',
          name: 'allitems',
          component: Allitems,
          children:[
            {
              path:'allProducts',
              component:AllProducts
            },
            {
              path:'item',
              component:Item
            },
            {
              path:'searchResult',
              component:SearchResult
            },
            {
              path:'trolley',
              component:Trolley
            }
          ]
      }
  	]
})
