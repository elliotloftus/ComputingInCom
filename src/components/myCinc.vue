<template>
<v-app>
<!--
  <v-card class="d-inline-block pa-20">
    <v-navigation-drawer fixed floating light>
      <v-list dense class="pt-6">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
-->
  <v-card class="mt=5">
    <div>lalala</div>
    <div>la</div>
    <div>a</div>
    <div>a</div>
    <div>{{ name }}</div>
    <div>{{ email }}</div>
  </v-card>
</v-app>
</template>



<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        name: '',
        email: ''
      }
    },
    methods: {
      fetchEntries() {
          axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/dump').then(
            response => {
              console.log(response)
              let temp = response.data
              self.info = temp
          }
        )
      },
      viewInfo() {
        axios.post('http://phplaravel-124529-356307.cloudwaysapps.com/mycinc', {
          name: this.name,
          email: this.email,
        }).then(
          response => {
            console.log(response)
            this.fetchEntries()
         }
          )
      },
    },
    created: function(){
      this.fetchEntries()
    }
  }
</script>