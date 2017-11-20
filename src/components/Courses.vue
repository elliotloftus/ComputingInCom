<template>
  <v-layout>
    <v-flex>
      <div>
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
         <v-container row justify-right>
           <v-layout row justify-right>
            <v-card class="purpBox">
              <v-card-title primary class>
               <h3 class="CinCTitle"> CINC COURSES</h3>
               </v-card-title>
              </v-card>
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
           <v-flex xs4 v-for="course in courses" v-bind:key="courses.title">
              <b><div id ="title"> {{course.course_id}} </div></b>
              <b><div id = "prof">{{course.prof_name}} </div></b>
              <b><div id = "department">{{course.department}} </div></b>
              <div id = "desc">{{course.description}} </div>
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
            <v-flex xs4 v-for="course in courses" v-bind:key="courses.title">
              <b><div id ="title"> {{course.course_id}} </div></b>
              <b><div id = "prof">{{course.prof_name}} </div></b>
              <b><div id = "department">{{course.department}} </div></b>
              <div id = "desc">{{course.description}} </div>
            </v-flex>
        </v-layout>
        </div>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
  .CinCTitle {
    margin: auto;
    height: 50%;
  }
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
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
  #favorite {
    margin-right: 30px;
    margin-left: 20px;
  }
</style>

 <script>
 import axios from 'axios'
  export default {
    data () {
      return {
        courses: [],
      }
      },
      methods: {
        fetchEntries() {
          let self = this
          axios.get('http://127.0.0.1:8000/courses/').then(
            response => {
              console.log(response)
              let temp = response.data
              self.courses = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
 </script>
 