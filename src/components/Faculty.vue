<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/facexp.jpg')"
        >
         <v-container row justify-left>
           <v-layout row justify-left>
            <v-card class="purpBox5">
              <v-card-title primary class>
               <h3 class="CinCTitle"> CINC FACULTY</h3>
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
            height = 500 px
            class="white--text"
            :src = "require('../assets/faculty2.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <div id = "FacHalftext">
          <v-card-title primary-title>
            <v-layout row justify-center>
                <h3 class="homeTitle">Faculty Experiences</h3>
              </v-layout>
          </v-card-title>
          <v-spacer></v-spacer> 
          <div class = "homeText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <v-layout row justify-center>
            <v-btn id="jobBut" :to = "facultyExperiences.url"> {{facultyExperiences.title}}</v-btn>
          </v-layout>
        </div>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
      <v-flex xs5>
        <div id = "FacHalftext">
          <v-card-title primary-title>
            <v-layout row justify-center>
                <h3 class="homeTitle">Faculty Scholars</h3>
              </v-layout>
          </v-card-title>
          <v-spacer></v-spacer> 
          <div class = "homeText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <v-layout row justify-center>
            <v-btn id ="jobBut" :to = "facultyScholars.url"> {{facultyScholars.title}}</v-btn>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs7>
        <v-card>
          <v-card-media
            height = 500 px
            class="white--text"
            :src = "require('../assets/facscholar.jpg')"
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
            :src = "require('../assets/fellow.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <div id = "FacHalftext">
          <v-card-title primary-title>
            <v-layout row justify-center>
                <h3 class="homeTitle">Fellows Program</h3>
              </v-layout>
          </v-card-title>
          <v-spacer></v-spacer> 
          <div class = "homeText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <v-layout row justify-center>
            <v-btn id="jobBut" :to = "fellowProgram.url"> {{fellowProgram.title}}</v-btn>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      facultyExperiences: {title: 'Learn More', url : "/facultyExperiences"},
      facultyScholars: {title: 'Learn More', url : "/facultyScholars"},
      fellowProgram: {title: 'Learn More', url : "/fellowProgram"},
    }
  }
}
</script>

<style>
  .purpBox5 {
    background-color: rgba(90, 43, 129, .90)!important;
    color: white!important;
  }
  .CinCTitle {
    margin: auto;
    height: 50%;
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 4px;
  }
  .butLayout {
    margin-left: 175px;
    margin-top: 20px;
  }
  .heihgtTest {
    height: 100vh;
  }
  .homeText{
    margin-left: 35px;
    margin-right: 50px;
    font-size: 16px;
    height: 50%;
    font-family: 'Quattrocento Sans', sans-serif;
    text-align: justify;
  }
  .homeTitle {
    color: rgba(90, 43, 129, 1);
    font-family: 'Quattrocento Sans', sans-serif;
  }
  #jobBut {
    background-color: #5A2B81;
    color: white;
    margin-top: 20px;
  }

  #FacHalftext{
    margin-top: 15%;
  }
</style>
