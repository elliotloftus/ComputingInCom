<template>
    <v-card>
        <br>
        <br>
        <br>
        <b><div id ="title"> {{facexp.title}} </div></b>
        <b><div>{{facexp.fac_name}}</div></b>
    </v-card>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['facultyExpurl'],
    data () {
      return {
        facexp: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/faclexperiences/' + this.facultyExpurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.facexp = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>