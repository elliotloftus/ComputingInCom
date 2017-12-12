
<template>
  <v-app light>
    <head> 
        <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara:300|Quattrocento+Sans" rel="stylesheet"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
      <v-toolbar
        fixed
        color="white"
        dense
        >
      <v-toolbar-title class ="homeTitle"><a href="home" style="color: #5A2B81; text-decoration: none;"> Furman @CinC</a></v-toolbar-title>
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
        <v-menu
          offset-y
          open-on-hover
        >
        <v-btn flat icon color = "black" dark slot="activator"><v-icon>account_circle</v-icon></v-btn>
          <v-list>
            <v-list-tile v-for="item in logInPages" :key="item.title" href='http://phplaravel-124529-356307.cloudwaysapps.com/login'>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
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
        <v-layout row justify-center>
            <div class="social">
                <h4> Connect with us! </h4>
                <a href="https://www.facebook.com/Furman-University-Computer-Science-130685927004923/"target="_blank" class="fa fa-facebook"></a>
                <a href="https://twitter.com/FurmanCompSci"target="_blank" class="fa fa-twitter"></a>
                <a href="https://www.instagram.com/furmancompsci/"target="_blank" class="fa fa-instagram"></a>
                <h6> www.cs.furman.edu/CinC </h6>
            </div>
        </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  var axios = require('axios');
  export default {
    data () {
      return {
        menu: false,
        clipped: false,
        drawer: true,
        fixed: false,
        myCinc: {title: 'cinc', url: "/myCinc"},
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
          {title: 'Fellows Program', url : "/fellowProgram"},
        ],
        communityPages: [
          {title: 'Funded Intern Application', url : "/fundedIntern"},
          {title: 'Partnerships', url : "/partnerships"},
        ],
        logInPages: [
          {title: 'login'},
          {title: 'Create Account', url : "/facultyScholars"},
        ],
      }
    },
    methods: {
      getUrl() {
        window.location.assign("/")
      }
    }
}

</script>

<style>
  .homeTitle {
    color: #5A2B81 !important 
  }

  .fa {
    text-align: center!important;
    padding: 20px!important;
    margin: 9px;
    font-size: 25px!important;
    width: 60px!important;
    height: 60px;
    text-decoration: none;
  }

  /* Add a hover effect if you want */
  .fa:hover {
      opacity: 0.7;
  }

  /* Set a specific color for each brand */

  /* Facebook */
  .fa-facebook {
      background: #3B5998;
      color: #ffffff!important;
  }

  /* Twitter */
  .fa-twitter {
      background: #55ACEE;
      color: #ffffff!important;
      text-align: center!important;
      align-content: center!important;
  }

  .fa-instagram {
     background: #cd486b;
     color: white!important;
  }

  h4 {
    font-family: 'Quattrocento Sans', sans-serif;
  }

  h6 {
    font-family: 'Quattrocento Sans', sans-serif;
    margin-top: 10px;
    text-align: center;
  }

  .social{
    margin-top: 10px;
  }

  .pa-3 {
    background: #5A2B81!important;
    color: white!important;
  }


</style>
