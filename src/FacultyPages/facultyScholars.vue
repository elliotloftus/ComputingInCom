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
                  <h3 class="secTierTitle">Faculty Scholars</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="fac_scholar in fac_scholars" v-bind:key="fac_scholar.title">
              <b><div id ="title"> {{fac_scholar.fac_name}} </div></b>
              <b><div id = "department">{{fac_scholar.department}} </div></b>
              <div id = "fac_desc">{{fac_scholar.description}} </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singlefac_scholars/' + fac_scholar.id">Read More</v-btn>
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
  #fac_name {
   margin-left: 30px;
    margin-right: 30px;
  }
  #department { 
    margin-left: 30px;
    color: #5A2B81;
    text-transform: uppercase;
    margin-right: 20px;
  }
  #fac_desc {
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
        fac_scholars: [],
        singlefacultyscholar: "/singlefacultyscholar/:facultyscholarurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/faclscholars/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.fac_scholars = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>

