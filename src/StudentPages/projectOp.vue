<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/research.jpg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex offset-xs7> 
              <v-card class = "purpBox13">
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
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn id="projectBut" dark slot="activator">Suggest a Project Opportunity</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Suggest a Project Opportunity</span>
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
                            <v-text-field label="Title" required v-model="title"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Description" required v-model="descr"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Professor name" required v-model="prof"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Department" required v-model="dep"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Major" required v-model="major"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click="submitEvent">Submit</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
              <br>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="project in projects" v-bind:key="project.title">
              <b><div id ="title"> {{project.title}} </div></b>
              <b><div id = "company">Professor: {{project.prof_name}} </div></b>
              <div id = "majors">Majors: {{project.majors}} </div>
              <div id = "desc">{{project.description}} </div>
              <v-card-actions>
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
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .purpBox13 {
    background-color: rgba(90, 43, 129, .90)!important;
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
  #majors { 
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
    max-height: 190px;
    overflow: hidden;
  }
  #projectBut {
    background-color: #5A2B81;
    margin-top: 20px;
  }
</style>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        projects: [],
        dialog: false,
        title: '',
        descr: '',
        prof: '',
        dep: '',
        major: '',
        singleProjectOp: "/singleProjectOp/:projecturl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/projects').then(
          response => {
            console.log(response)
            let temp = response.data
            self.projects = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/projects/create', {
          title: this.title,
          description: this.descr,
          prof_name: this.prof,
          department: this.dep,
          majors: this.major,
        }).then(
          response => {
            console.log(response)
            self.fetchEntries()
         }
          )
        this.dialog = false
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>