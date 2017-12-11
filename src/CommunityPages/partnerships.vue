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
            <v-flex xs5  offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Partnerships</h3>
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
            <v-btn id="facBut" dark slot="activator">Submit a Partnership</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit a Partnership</span>
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
                            <v-text-field label="Orginization" required v-model="org"></v-text-field>
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
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="part in parts" v-bind:key="part.title">
              <b><div id ="title"> {{part.title}} </div></b>
              <b><div id = "org">{{part.org}} </div></b>
              <div id = "description">{{part.description}} </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singlepart/' + part.id">Read More</v-btn>
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
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  # {
   margin-left: 30px;
    margin-right: 30px;
  }
  #org { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #description {
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
    data () {
      return {
        parts: [],
        title: '',
        descr: '',
        org: '',
        dialog: false,
        singlepartOp: "/singlepart/:parturl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/partnerships').then(
          response => {
            console.log(response)
            let temp = response.data
            self.parts = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/partnerships/create', {
          title: this.title,
          description: this.descr,
          org: this.org,
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
