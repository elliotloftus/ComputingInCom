<template>
  <v-layout row justify-center>
  <v-flex xs8>
    <v-card id = "singlev">
      <b><div id ="title"> {{facexp.title}} </div></b>
      <b><div id = "department">{{facexp.fac_name}} </div></b>
      <div id = "facDesc">{{facexp.description}} </div>
    </v-card>
  </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['facultyExpurl'],
    data () {
      return {
        facexp: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/faclexperiences/' + this.facultyExpurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.facexp = temp
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
  #fac_name {
   margin-left: 30px;
   margin-right: 30px;
  }
  #department { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #facDesc {
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
  }
  #singlev{
   margin-top: 100px;
 }
</style>
