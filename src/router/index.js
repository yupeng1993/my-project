import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import yup from '~/yup'
import yup2 from '~/yup2'
import index from '~/index'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path:'/',
      components:{
        default:Hello,
        x:index
      }
    },
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path:'Hello',
          name:'hello',
          components:{
            default:index,
            x:yup
          } 
        },
        {
          path: 'yup',
          name: 'yup1',
          component: yup
        }
      ]
    },
    {
    	path: '/yup',
    	name: 'yup',
    	component: yup
    },
    {
    	path: '/yup2',
    	name: 'yup2',
    	component: yup2
    }
  ]
})
