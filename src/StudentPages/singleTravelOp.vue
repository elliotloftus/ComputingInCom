<template>
  <v-layout row justify-center>
  <v-flex xs8>
    <v-card id = "singlev">
        <b><div id ="title"> {{travel.title}} </div></b>
        <b><div id = "date">{{travel.start_date}} - {{travel.end_date}} </div></b>
        <div id = "majors">{{travel.majors}} </div>
        <div id = "travDesc">{{travel.description}} </div>
    </v-card>
  </v-flex>
  </v-layout>
</template>

<style>
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  #date {
   margin-left: 30px;
    margin-right: 30px;
  }
  #majors { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #travDesc {
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
  }
  #singlev{
   margin-top: 100px;
 }
</style>

<script>
  import axios from 'axios'
  export default {
    props: ['travelurl'],
    data () {
      return {
        travel: []
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/travels/' + this.travelurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.travel = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>