<template>
  <v-layout>
    <v-flex>
      <div>
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/courses.jpeg')"
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
           <v-flex xs12 sm6 md4 v-for="course in courses" v-bind:key="courses.title">
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
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn  id="courseBut" dark slot="activator">Suggest a Course</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Suggest a Course</span>
                  </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm6 md6>
                            <v-text-field label="First name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md6>
                            <v-text-field label="Last name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Email" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Title" required v-model="title"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Description" required v-model="descr"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Professor(s) name" required v-model="prof"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Department(s)" required v-model="dep"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click="submitEvent">Submit</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
              <br>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="course in courses" v-bind:key="courses.title">
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
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
    margin-left: 60px;
    margin-right: 60px;
  }
  .purpBox {
    background-color: rgba(90, 43, 129, .90)!important;
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
  #courseBut {
    background-color:#5A2B81;
    color: white;
  }
</style>

 <script>
 import axios from 'axios'
  export default {
    data () {
      return {
        courses: [],
        dialog: false,
        title: '',
        descr: '',
        prof: '',
        dep: '',
      }
      },
      methods: {
        fetchEntries() {
          let self = this
          axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/courses').then(
            response => {
              console.log(response)
              let temp = response.data
              self.courses = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/courses/create', {
          course_id: this.title,
          description: this.descr,
          prof_name: this.prof,
          department: this.dep,
        }).then(
          response => {
            console.log(response)
            self.fetchEntries()
         }
          )
        this.dialog = false
      },
  },
    created: function(){
      this.fetchEntries()
    }
  }
 </script>
 