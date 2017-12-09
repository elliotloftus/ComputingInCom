<template>
    <v-app>
      <v-content>
        <v-card>
        <v-card-media
            height = 400 px
            class="white--text"
            :src = "require('../assets/presentation.jpg')"
        >
         <v-container row justify-right>
           <v-layout row justify-right>
            <v-card class="purpBox">
              <v-card-title primary class>
               <h3 class="CinCTitle">CALENDAR</h3>
               </v-card-title>
              </v-card>
             </v-flex>
             </v-layout>
           </v-container>
          </v-card-media>
        </v-card>
          <v-flex xs12>
            <v-card>
            <vue-event-calendar :events="calEvents">
            <template slot-scope="props">
              <div v-for= "events in props.showEvents" class="event-item" :key="events.title">
                <b>Event title: {{events.title}}</b><br>
                  Description: {{events.content}} <br>
                  Date: {{events.date}} <br>
                  Location: {{events.location}} <br>
                  Start Time: {{formatTime(events.start_time)}} <br>
                  End Time: {{formatTime(events.end_time)}}
               </div>
            </template>
            </vue-event-calendar>
          </v-card>
        </v-flex>
    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
  data () {
    return {
      calEvents: [],
      /*calEvents: [{
        date: '2017/11/10', 
        title: 'CS Presentation',
        desc: 'We present our work'
      }, {
        date: '2017/11/12',
        title: 'Furman football Game',
        desc: 'Furman will win for parents weekend',
      },
      {
        date: '2017/11/23',
        title: 'Thanksgiving',
        desc: 'Celebrate with family and watch some football',
      }
    ] */
    }
  },
  methods: {
      fetchEntries() {
        let self = this
        axios.get('http://127.0.0.1:8000/eventfeeds/').then(
          response => {
            console.log(response)
            let temp = response.data
            temp.forEach(obj => {obj.date = self.getEventMonth(obj.date)})  
            self.calEvents = temp
          }
        )
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
        var properDate = firstLetYear + secondLetYear + thirdLetYear + fourthLetYear + "/" +
                       firstLetMonth +secondLetMonth +  "/" + firstLetDay + secondLetDay 
        return properDate
      },
      formatTime(time) {
        var firstHour = time.charAt(0)
        var secondHour = time.charAt(1)
        var hours = firstHour + secondHour
        var firstMinute = time.charAt(3)
        var secondMinute = time.charAt(4)
        var pm = "AM";
        if (hours == 12) {
            pm = "PM"
          }
        if (hours > 12) {
            hours = hours - 12
            pm = "PM"
          }
        var finalTime = hours + ":" + firstMinute + secondMinute + " "+pm
        return finalTime
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
</style>