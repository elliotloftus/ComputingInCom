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
    <v-btn v-on:click="viewInfo">call viewInfo</v-btn>
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
    method: {
      fetchEntries() {
          axios.get('http://phplaravel-124529-356307.cloudwaysapps.com/myCinc').then(
            response => {
              console.log(response)
              this.info = response.data
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
    }
  }
</script>