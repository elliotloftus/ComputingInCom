 <template>
  <v-card id="singlev">
  <v-layout row justify-center>
    <v-flex xs8>
        <b><div id ="title"> {{blogs.title}} </div></b>
        <b><div id = "date">{{blogs.author}} </div></b>
        <div id = "desc">{{blogs.body}} </div>
    </v-flex>
  </v-layout>
  </v-card>
 </template>
 
 
 <script>
  import axios from 'axios'
  export default {
    props: ['blogurl'],
    data () {
      return {
        blogs: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/blogs/' + this.blogurl).then(
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
    background-color: rgba(90, 43, 129, .90)!important;
    color: white!important;
  }
  .CinCTitle {
    margin: auto;
    height: 50%;
    color:rgba(255, 255, 255, 1);
    font-family: 'Hind Vadodara', sans-serif;
    margin-left: 60px;
    margin-right: 60px;
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
  #singlev{
   margin-top: 100px;
 }
</style>
