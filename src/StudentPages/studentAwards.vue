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
              <v-card class="purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Student Awards</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="award in awards" v-bind:key="award.title">
              <b><div id ="title"> {{award.title}} </div></b>
              <b><div id = "stu_name">{{award.stu_name}} </div></b>
              <b><div id = "major">{{award.major}} </div></b>
              <div id = "stuDesc">{{award.description}} </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text" :to ="'/singleAwards/' + award.id">Read More</v-btn>
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
</style>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        awards: [],
        singleAward: "/singleAwards/:awardurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/stuawards/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.awards = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>