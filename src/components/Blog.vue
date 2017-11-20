<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
         <v-container row justify-left>
           <v-layout row justify-left>
            <v-flex xs2> 
            <v-card class="purpBox">
              <v-card-title primary class>
                <h3 class="CinCTitle"> BLOG</h3>
              </v-card-title>
            </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-card>
      <br>
       <v-layout row wrap>
            <v-flex xs6 v-for="blog in blogs" v-bind:key="blog.title">
              <b><div id ="title"> {{blog.title}} </div></b>
              <b><div id = "author">{{blog.author}} </div></b>
              <b><div id = "date">{{blog.date}} </div></b>
              <div id = "desc">{{blog.desc}} </div>
              <v-card-actions>
                <v-btn icon class="red--text">
                  <v-icon medium>fa-reddit</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text">
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon medium>fa-facebook</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
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
        blogs: [
          {
            title: 'First blog post',
            author: 'Elliot Loftus',
            date: 'November 16, 2017',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            title: 'First blog post',
            author: 'Elliot Loftus',
            date: 'November 16, 2017',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            title: 'First blog post',
            author: 'Elliot Loftus',
            date: 'November 16, 2017',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
        ]
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/eventfeeds/').then(
          response => {
            console.log(response)
            let temp = response.data
            temp.forEach(obj => {obj.date = self.getEventMonth(obj.date)})  
            self.calEvents = temp
          }
        )
    }
    },
  }
 </script>

<style>
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
  }
  .CinCTitle {
    margin: auto;
    height: 50%;
  }
  #title {
    margin-left: 30px;
    font-size: 24px;
    margin-right: 30px;
  }
  #author {
   margin-left: 30px;
    margin-right: 30px;
  }
  #date { 
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
  }
</style>
