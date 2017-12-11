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
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn id="blogBut" dark slot="activator">Submit a blog post</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit a blog post</span>
                  </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                            <v-text-field label="Email" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Title" required v-model="title"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Name" required v-model="author"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Body" required v-model="body"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click="submitBlog">Submit</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            <br>
       <v-layout row wrap>
            <v-flex xs12 sm6 v-for="blog in blogs" v-bind:key="blog.title">
              <b><div id ="title"> {{blog.title}} </div></b>
              <b><div id = "author">{{blog.author}} </div></b>
              <b><div id = "date">{{blog.created_at}} </div></b>
              <div id = "desc">{{blog.body}} </div>
              <v-card-actions>
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
        dialog: false,
        title: '',
        body: '',
        author: '',
        singleBlog: "/singleBlogPage/:blogurl"
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/blogs').then(
          response => {
            console.log(response)
            let temp = response.data
            //temp.forEach(obj => {obj.created_at = self.getEventMonth(obj.created_at)})  
            self.blogs = temp
          }
        )
      },
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitBlog() {
        let self = this
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/blogs/create', {
          title: this.title,
          description: this.body,
          author: this.author,
        }).then(
          response => {
            console.log(response)
            self.fetchEntries()
         }
          )
        this.dialog = false
      },
      getEventMonth(date){
        var firstLetYear = date.charAt(0)
        var secondLetYear = date.charAt(1)
        var thirdLetYear = date.charAt(2)
        var fourthLetYear = date.charAt(3)
        var firstLetMonth = date.charAt(5)
        var secondLetMonth = date.charAt(6)
        var firstLetDay = date.charAt(8)
        var secondLetDay = date.charAt(9)
        var properDate = firstLetMonth +secondLetMonth +  "/" + firstLetDay + secondLetDay + "/" +
                       firstLetYear + secondLetYear + thirdLetYear + fourthLetYear 
        return properDate
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
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
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
  #blogBut {
    margin-top: 25px;
    background-color: #5A2B81
  }
</style>
