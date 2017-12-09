<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex xs5  offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Post a Job</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn primary dark slot="activator">Post a Job</v-btn>
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
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  .secTierTitle {
    margin: auto;
    height: 50%;
  }
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
  }
</style>

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
      }
      },
      methods: {
        closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitJob() {
        let self = this
        axios.post('http://127.0.0.1:8000/jobs/create/', {
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

