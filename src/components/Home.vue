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
          <v-card color="purple" dark>
            <v-card-title primary class>
             <h3 class="CinCTitle"> Computing In Community</h3>
              </v-card-title>
            </v-card>
           </v-layout>
        </v-container>
          </v-card-media>
        </v-card>
      <v-layout row-wrap>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 650 px
            class="white--text"
            :src = "require('../assets/students.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">CinC Students</h3>
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
              <h3 class="homeTitle">CinC Faculty</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "leftText">
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
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Blog</h3>
            </v-layout>
        </v-card-title>
        <v-layout row-wrap>
        <v-flex xs 4>
        <div class = "leftText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
        <v-flex xs 4>
        <div class = "leftText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
        <v-flex xs 4>
        <div class = "leftText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        </v-flex>
      </v-layout>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Weekly Calander</h3>
            </v-layout>
        </v-card-title>
      </v-card>
      </v-flex>
    </v-layout>
</template>

<style>
  .homeTitle {
    color: purple
  }
  .homeText {
    margin-left: 10px;
    font-size: 16px
  }
  .leftText {
    margin-right: 10px;
    font-size: 16px
  }
</style>
