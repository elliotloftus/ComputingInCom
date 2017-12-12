<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/travel.jpeg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Travel Opportunities</h3>
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
            <v-btn id="travelBut" dark slot="activator">Submit a travel opportunity</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit a travel opportunity</span>
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
                            <v-text-field label="Location" required v-model="location"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Host Orginization" required v-model="host_org"></v-text-field>
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
            <v-flex xs12 sm6 v-for="travel in travels" v-bind:key="travel.title">
              <b><div id ="title"> {{travel.title}} </div></b>
              <b><div id = "date">{{travel.location}} </div></b>
              <div id = "majors">{{travel.majors}} </div>
              <div id = "travDesc">{{travel.description}} </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singletravelOp/' + travel.id">Read More</v-btn>
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
  #travelBut {
    background-color: #5A2B81;
    margin-top: 20px;
  }
</style>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        travels: [],
        title: '',
        descr: '',
        location: '',
        host_org: '',
        major: '',
        dialog: false,
        singletravelOp: "/singletravelOp/:travelurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/travels').then(
          response => {
            console.log(response)
            let temp = response.data
            self.travels = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/travels/create', {
          title: this.title,
          description: this.descr,
          location: this.location,
          host_org: this.host_org,
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