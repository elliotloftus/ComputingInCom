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
                  <h3 class="secTierTitle">Travel Opportunities</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="travel in travels" v-bind:key="travel.title">
              <b><div id ="title"> {{travel.title}} </div></b>
              <b><div id = "company">{{travel.host_orginization}} </div></b>
              <b><div id = "company_contact">{{travel.start_date}} - {{travel.end_date}} </div></b>
              <div id = "desc">{{travel.majors}} </div>
              <div id = "desc">{{travel.requirements}} </div>
              <div id = "desc">{{travel.description}} </div>
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
</style>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        travels: [],
        singletravelOp: "/singletravelOp/:travelurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/travels/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.travels = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>