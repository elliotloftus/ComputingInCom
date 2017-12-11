<template>
<v-layout row justify-center>
  <v-flex xs8>
    <v-card id = "singlev">
        <b><div id ="title"> {{award.title}} </div></b>
        <b><div id = "stu_name">{{award.stu_name}} </div></b>
        <b><div id = "major">{{award.major}} </div></b>
        <div id = "stuDesc">{{award.description}} </div>   
    </v-card>
  </v-flex>
</v-layout>
</template>

 <script>
  import axios from 'axios'
  export default {
    props: ['awardurl'],
    data () {
      return {
        award: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/stuawards/' + this.awardurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.award = temp
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
  #stu_name {
   margin-left: 30px;
    margin-right: 30px;
  }
  #major { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #stuDesc {
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
  }
  #singlev{
   margin-top: 100px;
 }
</style>

