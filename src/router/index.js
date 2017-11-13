import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Faculty from '@/components/Faculty'
import Community from '@/components/Community'
import Calander from '@/components/Calander'
import Blog from '@/components/Blog'
import projectOp from '@/StudentPages/projectOp'
import jobOp from '@/StudentPages/jobOp'
import studentAwards from '@/StudentPages/studentAwards'
import studentCourses from '@/StudentPages/studentCourses'
import studentExp from '@/StudentPages/studentExp'
import travelOp from '@/StudentPages/travelOp'
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
    },
    {
      path: '/projectOp',
      name: 'ProjectOp',
      component: projectOp
    },
    {
      path: '/jobOp',
      name: 'jobOp',
      component: jobOp
    },
    {
      path: '/studentAwards',
      name: 'studentAwards',
      component: studentAwards
    },
    {
      path: '/studentCourses',
      name: 'studentCourses',
      component: studentCourses
    },
    {
      path: '/studentExp',
      name: 'studentExp',
      component: studentExp
    },
    {
      path: '/travelOp',
      name: 'travelOp',
      component: travelOp
    },
  ]
})
