<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/job2.jpeg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex offset-xs7> 
              <v-card class = "purpBox12">
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
              <b><span id = "label">Employer: </span><span id = "employer">{{job.employer}}</span></b>
              <div id = "jobDesc">{{job.job_description}} </div>
              <v-card-actions>
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
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .purpBox12 {
    background-color: rgba(90, 43, 129, .90)!important;
    color: white!important;
  }
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  #employer { 
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #label { 
    margin-left: 30px;
    color: black;
  }
  
  #jobDesc {
    margin-left: 30px;
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
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/jobs').then(
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




      