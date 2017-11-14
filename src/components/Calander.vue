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
            
            <!--<template slot-scope="props">
              <div v-for= "events in props.showEvents" class="event-item" :key="events.title">
                <b>Event title: {{events.title}}</b><br>
                  Description: {{events.desc}} <br>
                  Date: {{events.date}} <br>
                  Location: {{events.location}} <br>
                  Start Time: {{formatTime(events.startTime)}} <br>
                  End Time: {{formatTime(events.endTime)}}
               </div>
            </template>-->
            </vue-event-calendar>
          </v-card>
        </v-flex>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  data () {
    return {
      calEvents: [{
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
    ]
    }
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
  }
</style>