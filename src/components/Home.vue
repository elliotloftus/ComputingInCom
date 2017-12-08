<template>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/comp.jpg')"
          >
        <v-container row justify-center>
          <v-layout row justify-center>
          <v-card class = "test">
            <v-card-title primary class>
             <h3 id="mainTitle"> COMPUTING IN COMMUNITY</h3>
              </v-card-title>
            </v-card>
           </v-layout>
        </v-container>
      </v-card-media>
      </v-card>
      <v-layout row-wrap>
      <v-flex xs0 sm7>
        <v-card id ="homeSidePic">
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('../assets/students.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5>
        <div id ="homeHalfText">
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Students</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row-wrap>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Faculty</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('../assets/faculty.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row-wrap>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('../assets/community.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Community</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
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
      </v-flex>
        <v-flex xs7>
          <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('../assets/presentation.jpg')"
          >
          </v-card-media>
        </v-card> 
      </v-flex>
      </v-layout>
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Blog</h3>
            </v-layout>
        </v-card-title>
        <v-layout row-wrap>
        <v-flex xs 4>
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
        <v-flex xs 4>
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
        <v-flex xs 4>
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
      </v-layout>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Weekly Calendar</h3>
            </v-layout>
        </v-card-title>
      </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  data() {
    return {
      courses: {title: 'Learn More', url : '/studentCourses'},
    }
    }
  }
</script>
<style>
  .homeTitle {
    color: rgba(90, 43, 129, 1);
  }
  .homeText {
    margin-left: 50px;
    margin-right: 50px;
    font-size: 16px;
    height: 50%;
  }
  .test {
    background: rgba(90, 43, 129, .95)!important;
  }
  #mainTitle {
    color:rgba(255, 255, 255, 1);
  }
  #homeHalfText {
    margin-top: 25%;
  }
</style>
