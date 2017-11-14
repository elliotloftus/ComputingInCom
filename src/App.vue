<template>
  <v-app light>
      <v-toolbar
        fixed
        color="white"
        dense
        >
      <v-toolbar-title class ="homeTitle">Furman @CinC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat color = "black" :to = "home.url" > {{home.title}} </v-btn>
      <v-menu 
        open-on-hover 
        offset-y  
        >
        <v-btn flat color = "black" dark slot = "activator" :to = "student.url" > {{student.title}}</v-btn>
          <v-list>
            <v-list-tile v-for="item in studentPages" :key="item.title" :to="item.url">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      <v-menu 
        open-on-hover 
        offset-y  
        >
        <v-btn flat color = "black" dark slot = "activator" :to = "faculty.url">  {{faculty.title}}</v-btn>
         <v-list>
            <v-list-tile v-for="item in facultyPages" :key="item.title" :to="item.url">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      <v-menu 
        open-on-hover 
        offset-y  
        >
        <v-btn flat color = "black" dark slot = "activator" :to = "community.url">  {{community.title}}</v-btn>
          <v-list>
            <v-list-tile v-for="item in communityPages" :key="item.title" :to="item.url">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
        <v-btn flat color = "black" :to ="courses.url"> {{courses.title}}</v-btn>
        <v-btn flat color = "black" :to = "calander.url">  {{calander.title}}</v-btn>
        <v-btn flat color = "black" :to = "blog.url">  {{blog.title}}</v-btn>
        <v-btn flat icon color = "black"><v-icon>account_circle</v-icon></v-btn>
      </v-toolbar-items>
      </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view>
              <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
              <blockquote>
                &#8220;Computing In Community.&#8221;
              </blockquote>
            </router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>   
    </main>
    <v-footer class="pa-3">
      I don't know what should go in the footer
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        student: {title: 'students', url : "/students"},
        faculty: {title: 'faculty', url : "/faculty"},
        courses: {title: 'Courses', url : "/courses"},
        community: {title: 'community', url : "/community"},
        blog: {title: 'blog', url : "/blog"},
        calander: {title: 'calendar', url : "/calander"},
        home: {title: 'home', url : "/"},
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Furman @CinC',
        studentPages: [
          {title: 'Project Opportunities', url : "/projectOp"},
          {title: 'Job Opportunities', url : "/jobOp"},
          {title: 'Student Experiences', url : "/studentExp"},
          {title: 'Travel Opportunities', url : "/travelOp"},
          {title: 'Student Awards', url : "/studentAwards"},
        ],
        facultyPages: [
          {title: 'Faculty Experiences', url : "/facultyExperiences"},
          {title: 'Faculty Scholars', url : "/facultyScholars"},
          {title: 'Fellow Program', url : "/fellowProgram"},
        ],
        communityPages: [
          {title: 'Funded Intern Application', url : "/fundedIntern"},
          {title: 'Post a Job', url : "/postJob"},
          {title: 'Partnerships', url : "/partnerships"},
        ]
      }
    }
  }

</script>

<style>
  .homeTitle {
    color: #5A2B81 
  }
</style>
