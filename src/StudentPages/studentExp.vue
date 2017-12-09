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
              <v-card class="purpBox">
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
        exps: [],
        singleStudentExp: "/singleStudentExp/:studentExpurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/stuexperiences/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.exps = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>