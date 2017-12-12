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
              <v-card class="purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle"> Student Experiences</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
          </v-card-media>
        </v-card>
        <v-layout row-wrap>
          <v-flex xs6 v-for="exp in exps" v-bind:key="exp.title">
            <v-card>
              <v-card-media
                height = 400 px
                class="white--text"
                :src = "require('../assets/travel.jpg')"
              >     
          <v-container row justify-center>
           <v-layout row justify-center>
            <v-flex offset-xs6> 
              <v-card class="purpBox" :to ="'/singleStudentExp/' + exp.id">
                <v-card-title primary class>
                  <h5 id ="expStudent"> {{exp.stu_name}}</h5>
                </v-card-title>
                <v-card-title primary class>
                  <h6 id= "expTitle"> {{exp.title}}</h6>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn id="expBut" dark slot="activator">Submit a student Experience</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit a student Experience</span>
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
                            <v-text-field label="Student name" required v-model="stu_name"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Grade" required v-model="grade"></v-text-field>
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
      </v-card>
     </v-flex>
  </v-layout>
</template>

<style>
  #greyscale:hover{
    background-color: black
  }
  .secTierTitle {
    margin: auto;
    height: 50%;
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .purpBox {
    background-color: rgba(90, 43, 129, .90)!important;
    color: white!important;
  }
  #expBut {
    background-color: #5A2B81;
    margin-top: 20px;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        exps: [],
        title: '',
        descr: '',
        stu_name: '',
        grade: '',
        major: '',
        dialog: false,
        singleStudentExp: "/singleStudentExp/:studentExpurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/stuexperiences').then(
          response => {
            console.log(response)
            let temp = response.data
            self.exps = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/stuexperiences/create', {
          title: this.title,
          description: this.descr,
          stu_name: this.stu_name,
          grade: this.grade,
          major: this.major,
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