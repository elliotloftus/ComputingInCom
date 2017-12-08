<template>
    <v-card>
        <br>
        <br>
        <b><div id ="title"> {{travel.title}} </div></b>
        <b><div id = "company">{{travel.host_orginization}} </div></b>
        <b><div id = "company_contact">{{travel.start_date}} - {{travel.end_date}} </div></b>
        <div id = "desc">{{travel.majors}} </div>
        <div id = "desc">{{travel.requirements}} </div>
        <div id = "desc">{{travel.description}} </div>
    </v-card>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['travelurl'],
    data () {
      return {
        travel: []
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/travels/' + this.travelurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.travel = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>