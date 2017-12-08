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
            <v-flex xs12 sm6 v-for="blog in blogs" v-bind:key="blog.title">
              <b><div id ="title"> {{blog.title}} </div></b>
              <b><div id = "author">{{blog.author}} </div></b>
              <b><div id = "date">{{blog.time}} </div></b>
              <div id = "desc">{{blog.body}} </div>
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
                  <v-btn flat class="blue--text" :to ="'/singleBlog/' + blog.id">Read More</v-btn>
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
        blogs: [],
        singleBlog: "/singleBlogPage/:blogurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/blogs/').then(
          response => {
            console.log(response)
            let temp = response.data
            self.blogs = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
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
    max-height: 190px;
    overflow: hidden;
  }
</style>
