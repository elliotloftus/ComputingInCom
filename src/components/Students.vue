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
         <v-container row justify-left>
           <v-layout row justify-left>
            <v-card color="purple" dark>
              <v-card-title primary class>
               <h3 class="CinCTitle"> CINC STUDENTS</h3>
               </v-card-title>
              </v-card>
             </v-layout>
           </v-container>
          </v-card-media>
        </v-card>
      </div>
    <v-layout row-wrap>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/students.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Project Oppurtunities</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "projectOp.url"> {{projectOp.title}}</v-btn>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Job Oppurtunities</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "jobOp.url"> {{jobOp.title}}</v-btn>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/jobOp.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row-wrap>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/roomPic.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Student Experiences</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "studentExp.url"> {{studentExp.title}}</v-btn>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Courses</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "studentCourses.url"> {{studentCourses.title}}</v-btn>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/courses.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row-wrap>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/travel.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Travel Oppurtunities</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "travelOp.url"> {{travelOp.title}}</v-btn>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Student Awards</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-btn flat class = "butLayout" color = "black" :to = "studentAwards.url"> {{studentAwards.title}}</v-btn>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/awards.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      projectOp: {title: 'Learn More', url : "/projectOp"},
      jobOp: {title: 'Learn More', url : "/jobOp"},
      studentExp: {title: 'Learn More', url : "/studentExp"},
      studentCourses: {title: 'Learn More', url : "/studentCourses"},
      travelOp: {title: 'Learn More', url : "/travelOp"},
      studentAwards: {title: 'Learn More', url : "/studentAwards"},
    }
  }
}
</script>

<style>
  .butLayout {
    margin-left: 175px;
    margin-top: 20px;
  }
  .heihgtTest {
    height: 100vh;
  }
</style>
