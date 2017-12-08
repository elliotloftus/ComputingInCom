<template>
    <v-card>
        <br>
        <br>
        <b><div id ="title"> {{project.title}} </div></b>
        <b><div id = "company">{{project.host_orginization}} </div></b>
        <b><div id = "company_contact">{{project.start_date}} - {{project.end_date}} </div></b>
        <div id = "desc">{{project.majors}} </div>
        <div id = "desc">{{project.requirements}} </div>
        <div id = "desc">{{project.description}} </div>
    </v-card>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['projecturl'],
    data () {
      return {
        project: []
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/projects/' + this.projecturl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.project = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>