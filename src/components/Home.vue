<template>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-media
            height = 700 px
            class="white--text"
            v-bind:src=comp.src
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
            :src = "require('@/assets/fustu.jpg')"
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
        <v-layout row justify-center>
          <v-btn id="homeBut" :to="students.url">Learn More</v-btn>
        </v-layout>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row-wrap>
      <v-flex xs5>
        <div id ="homeHalfText">
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Faculty</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
          <v-btn id="homeBut" :to="faculty.url">Learn More</v-btn>
        </v-layout>
        </div>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('@/assets/faculty2.jpg')"
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
            :src = "require('@/assets/community2.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <div id ="homeHalfText">
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Community</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
          <v-btn id="homeBut" :to="community.url">Learn More</v-btn>
        </v-layout>
        </div>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
       <v-flex xs5>
        <div id ="homeHalfText">
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Courses</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
          <v-btn id="homeBut" :to="courses.url">Learn More</v-btn>
        </v-layout>
        </div>
      </v-flex>
        <v-flex xs7>
          <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('@/assets/courses.jpeg')"
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
      students: {title: 'Learn More', url : "/students"},
      faculty: {title: 'Learn More', url : "/faculty"},
      community: {title: 'Learn More', url : "/community"},
      courses: {title: 'Learn More', url : '/courses'},
      comp: {
        src: require('@/assets/comp.jpg')
      },
   }
    }
  }
</script>
<style>
  .homeTitle {
    color: rgba(90, 43, 129, 1);
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .homeText {
    margin-left: 35px;
    margin-right: 50px;
    font-size: 16px;
    height: 50%;
    font-family: 'Quattrocento Sans', sans-serif;
    text-align: justify;
  }
  .test {
    background: rgba(90, 43, 129, .95)!important;
  }
  #mainTitle {
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
  }
  #homeHalfText {
    margin-top: 25%;
  }
  #homeBut {
    background-color: #5A2B81;
    color: white;
    margin-top: 20px;
  }
</style>
