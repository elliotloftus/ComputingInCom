<template>
  <v-layout row justify-center>
  <v-flex xs8>
    <v-card id = "singlev">
        <b><div id ="title"> {{project.title}} </div></b>
        <b><div id = "profname">{{project.prof_name}} </div></b>
        <b><div id = "department">{{project.department}} </div></b>
        <div id = "projDesc">{{project.description}} </div>
    </v-card>
  </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['projecturl'],
    data () {
      return {
        project: []
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/projects/' + this.projecturl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.project = temp
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
#profname{
   margin-left: 30px;
   margin-right: 30px;
 }
 #department {
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
 }
 #projDesc {
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
 }
 #singlev{
   margin-top: 100px;
 }
</style>
