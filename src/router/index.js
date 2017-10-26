import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Faculty from '@/components/Faculty'
import Community from '@/components/Community'
import Calander from '@/components/Calander'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/calander',
      name: 'Calander',
      component: Calander
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
