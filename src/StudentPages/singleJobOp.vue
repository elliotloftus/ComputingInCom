<template>
  <v-layout row justify-center>
  <v-flex xs8>
    <v-card id = "singlev">
        <b><div id ="title"> {{jobs.title}} </div></b>
        <b><div id = "employer">{{jobs.employer}} </div></b>
        <div id = "jobDesc">{{jobs.job_description}} </div>
    </v-card>
  </v-flex>
  </v-layout>
 </template>
 
 
 <script>
  import axios from 'axios'
  export default {
    props: ['joburl'],
    data () {
      return {
        jobs: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/jobs/' + this.joburl).then(
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
<style>
#title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
}
 #employer {
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
 }
 #jobDesc {
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
 }
 #singlev{
   margin-top: 100px;
 }
</style>