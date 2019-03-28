import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import test4 from '@/components/test4'
import test from '@/components/test'
import Event from '@/components/Event'
import MyBtn from '@/components/MyBtn'
import PersonInfo from '@/components/bind/PersonInfo'
import Clock from '@/components/1_6/Clock'
import Index from '@/components/1_6/index'
import CustomDirective from '@/components/1_7/CustomDerective'
import index from '@/components/1_8/index'
import index10 from '@/components/1_10/index'
import vuex1 from '@/components/vuex/1_1/vuex1'
import vuex2 from '@/components/vuex/1_1/vuex2'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'test2',
      component: test2
    },
    {
      path: '/:id',
      name: 'vuex2',
      component: vuex2
    },
    {
      path: '/',
      name: 'Event',
      component: Event
    },
    {
      path: '/',
      name: 'index10',
      component: index10
    },
    {
      path: '/',
      name: 'CustomDirective',
      component: CustomDirective
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/',
    //   name: 'Clock',
    //   component: Clock
    // },
    // {
    //   path: '/',
    //   name: 'PersonInfo',
    //   component: PersonInfo
    // },

    // {
    //   path: '/',
    //   name: 'test4',
    //   component: test4
    // },
    {
      path: '/',
      name: 'test3',
      component: test3
    },

    {
      path: '/',
      name: 'test1',
      component: test1
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MyBtn',
      component: MyBtn
    }
  ]
})
