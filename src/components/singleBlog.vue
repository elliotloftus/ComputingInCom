 <template>
    <v-card>
        <br>
        <br>
        <b><div id ="title"> {{blogs.title}} </div></b>
        <b><div id = "author">{{blogs.author}} </div></b>
        <b><div id = "date">{{blogs.time}} </div></b>
        <div id = "desc">{{blogs.body}} </div>
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
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/blogs' + this.blogurl).then(
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
