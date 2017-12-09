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
            <v-flex offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Job Opportunities</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="job in jobs" v-bind:key="job.title">
              <b><div id ="title"> {{job.title}} </div></b>
              <b><div id = "company">{{job.employer}} </div></b>
              <b><div id = "company_contact">{{job.employer_description}} </div></b>
              <b><div id = "company">{{job.requirements}} </div></b>
              <b><div id = "company_contact">{{job.majors}} </div></b>
              <div id = "desc">{{job.job_description}} </div>
              <v-card-actions>
                <v-btn icon class="red--text">
                  <v-icon medium>fa-reddit</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text">
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon medium>fa fa-facebook-official</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singleJobOp/' + job.id">Read More</v-btn>
                </v-card-actions>
              </v-flex>
        </v-layout>
      </v-card>
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
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  #company {
   margin-left: 30px;
    margin-right: 30px;
  }
  #company_contact { 
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
  import axios from 'axios'
  export default {
    data () {
      return {
        jobs: [],
        singleJobOp: "/singleJobOp/:joburl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/jobs/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.jobs = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>




      