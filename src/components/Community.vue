<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
         <v-container row justify-left>
           <v-layout row justify-left>
            <v-card class="purpBox">
              <v-card-title primary class>
               <h3 class="CinCTitle"> CINC COMMUNITY</h3>
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
            :src = "require('../assets/students.jpg')"
          >
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Funded Intern</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
        <v-btn id="jobBut" dark slot="activator" :to = "fundedIntern.url"> {{fundedIntern.title}}</v-btn>
        </v-layout>
      </v-flex>
      </v-layout>
      <v-layout row-wrap>
      <v-flex xs5>
        <v-card-title primary-title>
          <v-layout row justify-center>
              <h3 class="homeTitle">Partnerships</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
        <v-btn id="jobBut" dark slot="activator" :to = "partnerships.url"> {{partnerships.title}}</v-btn>
        </v-layout>
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
              <h3 class="homeTitle">Post A Job</h3>
            </v-layout>
        </v-card-title>
        <v-spacer></v-spacer> 
        <div class = "homeText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn id="jobBut" dark slot="activator">Post a Job</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Post a Job</span>
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
                            <v-text-field label="Title" required v-model="jobTitle"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Job Description" required v-model="jobDesc"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Employer" required v-model="employer"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Employer Description" required v-model="employerDesc"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Majors Applicable" required v-model="majors"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Requirements" required v-model="requirements"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click="submitJob">Submit</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
      </v-flex>
    </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
 import axios from 'axios'
  export default {
    data () {
      return {
        jobs: [],
        dialog: false,
        jobTitle: '',
        jobDesc: '',
        employer: '',
        employerDesc: '',
        majors: '',
        requirements: '',
        fundedIntern: {title: 'Learn More', url : "/fundedIntern"},
        partnerships: {title: 'Learn More', url : "/partnerships"},
        postJob: {title: 'Learn More', url : "/postJob"},
      }
      },
      methods: {
        closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitJob() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/jobs/create/', {
          title: this.jobTitle,
          description: this.jobDesc,
          employer: this.employer,
          employerDesc: this.employerDesc,
          majors: this.majors,
          requirements: this.requirements,
        }).then(
          response => {
            console.log(response)
         }
          )
        this.dialog = false
      },
    },
  }
 </script>

<style>
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
  }
  .CinCTitle {
    margin: auto;
    height: 50%;
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
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
    background-color: #5A2B81
  }
</style>