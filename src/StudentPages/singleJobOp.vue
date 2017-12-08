 <template>
    <v-card>
        <br>
        <br>
        <b><div id ="title"> {{jobs.title}} </div></b>
        <b><div id = "author">{{jobs.job_description}} </div></b>
        <b><div id = "date">{{jobs.employer}} </div></b>
        <div id = "desc">{{jobs.body}} </div>
    </v-card>
 </template>
 
 
 <script>
  import axios from 'axios'
  export default {
    props: ['joburl'],
    data () {
      return {
        jobs: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/jobs/' + this.joburl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.jobs = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
 </script>
