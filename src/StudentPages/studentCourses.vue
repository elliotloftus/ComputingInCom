<template>
  <v-layout>
    <v-flex>
      <div class="heightTest">
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
         <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex xs5  offset-xs7> 
            <v-card color="purple darken-3" dark>
              <v-card-title primary class>
               <h3 class="cincCourses"> CINC COURSES</h3>
               </v-card-title>
              </v-card>
            </v-flex>
             </v-layout>
           </v-container>
          </v-card-media>
        </v-card>
      </div>
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Existing Courses</h3>
            </v-layout>
        </v-card-title>
        <v-layout row wrap>
            <v-flex xs4 v-for="course in courses" :key="courses.title">
              <b><div id ="title"> {{course.title}} </div></b>
              <b><div id = "prof">{{course.prof}} </div></b>
              <b><div id = "department">{{course.department}} </div></b>
              <div id = "desc">{{course.desc}} </div>
            </v-flex>
        </v-layout>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <b><h3 class="homeTitle">Suggested Courses</h3></b>
            </v-layout>
        </v-card-title>
          <v-layout row wrap>
            <v-flex xs4 v-for="course in courses" :key="courses.title">
              <b><div id ="title"> {{course.title}} </div></b>
              <b><div id = "prof">{{course.prof}} </div></b>
              <b><div id = "department">{{course.department}} </div></b>
              <div id = "desc">{{course.desc}} </div>
            </v-flex>
        </v-layout>
        </div>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
  .cincCourses {
    margin-left: 60px;
  }
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  #prof {
   margin-left: 30px;
    margin-right: 30px;
  }
  #department { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #desc {
    margin-left: 30px;
    margin-bottom: 25px;
    margin-right: 30px;
    text-align: justify;
  }
</style>

 <script>
  export default {
    data () {
      return {
        courses: [
          {
            title: 'CSC-340: Computing with Art',
            prof: 'Dr. Treu | Dr. Armstrong',
            department: 'Computer Science | Communication Studies',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            title: 'CSC-340: Computing with Art',
            prof: 'Dr. Treu | Dr. Armstrong',
            department: 'Computer Science | Communication Studies',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            title: 'CSC-340: Computing with Art',
            prof: 'Dr. Treu | Dr. Armstrong',
            department: 'Computer Science | Communication Studies',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
        ]
      }
    }
  }
 </script>