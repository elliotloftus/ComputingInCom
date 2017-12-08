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
                  <h3 class="secTierTitle">Project Opportunities</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
     <v-card>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="project in projects" v-bind:key="project.title">
              <b><div id ="title"> {{project.title}} </div></b>
              <b><div id = "company">{{project.host_orginization}} </div></b>
              <b><div id = "company_contact">{{project.start_date}} - {{project.end_date}} </div></b>
              <div id = "desc">{{project.majors}} </div>
              <div id = "desc">{{project.requirements}} </div>
              <div id = "desc">{{project.description}} </div>
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
                  <v-btn flat class="blue--text" :to ="'/singleProjectOp/' + project.id">Read More</v-btn>
                </v-card-actions>
              </v-flex>
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
        projects: [],
        singleProjectOp: "/singleProjectOp/:projecturl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/projects/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.projects = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>