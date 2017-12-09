<template>
    <v-card>
        <br>
        <br>
        <b><div id ="title"> {{exp.title}} </div></b>
        <b><div>{{exp.stu_name}}</div></b>
    </v-card>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['studentExpurl'],
    data () {
      return {
        exp: [],
      }
    },
    methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/stuexperiences/' + this.studentExpurl).then(
          response => {
            console.log(response)
            let temp = response.data
            self.exp = temp
          }
        )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>