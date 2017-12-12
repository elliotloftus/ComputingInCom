<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/faculty2.jpg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Faculty Experiences</h3>
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
            <v-btn id="facBut" dark slot="activator">Submit a Faculty Experience</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit a Faculty Experience</span>
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
                            <v-text-field label="Faculty name" required v-model="fac_name"></v-text-field>
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
            <v-flex xs12 sm6 v-for="fac_exp in fac_exps" v-bind:key="fac_exp.title">
              <b><div id ="title"> {{fac_exp.title}} </div></b>
              <b><div id = "major">{{fac_exp.fac_name}} </div></b>
              <div id = "stuDesc">{{fac_exp.description}} </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singlefacultyExp/' + fac_exp.id">Read More</v-btn>
                </v-card-actions>
              </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        fac_exps: [],
        title: '',
        descr: '',
        fac_name: '',
        dialog: false,
        singlefacultyExp: "/singlefacultyExp/:facultyExpurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/faclexperiences').then(
          response => {
            console.log(response)
            let temp = response.data
            self.fac_exps = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/faclexperiences/create', {
          title: this.title,
          description: this.descr,
          fac_name: this.fac_name,
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


<style>
  .secTierTitle {
    margin: auto;
    height: 50%;
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .purpBox {
    background-color: rgba(90, 43, 129, .90)!important;
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
  #favorite {
    margin-right: 30px;
    margin-left: 20px;
  }
  #facBut {
    background-color: #5A2B81;
    margin-top: 20px;
  }
</style>