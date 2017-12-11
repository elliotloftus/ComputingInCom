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
          <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent width="50%">
            <v-btn id="calBut" dark slot="activator">Submit an event</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Submit an event</span>
                  </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                            <v-text-field label="Email" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Event Name" required v-model="title"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Location" required v-model="location"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                          <v-dialog
                              persistent
                              v-model="modal"
                              lazy
                              full-width
                              width="290px"
                            >
                          <v-text-field
                            slot="activator"
                            label="Pick a date"
                            v-model="date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                      <v-date-picker v-model="date" scrollable actions>
                      <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                      </template>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
               <v-flex xs12>
                <v-dialog
                    persistent
                      v-model="modal2"
                      lazy
                      full-width
                      width="290px"
                    >
                    <v-text-field
                      slot="activator"
                      label="Pick a start time for your event"
                       required v-model="start_time"
                       prepend-icon="access_time"
                       readonly
                    ></v-text-field>
                    <v-time-picker v-model="start_time" format="24hr" actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">Save</v-btn>
                      </v-card-actions>
                      </template>
                    </v-time-picker>
                  </v-dialog>
                          </v-flex>
               <v-flex xs12>
                <v-dialog
                    persistent
                      v-model="modal3"
                      lazy
                      full-width
                      width="290px"
                    >
                    <v-text-field
                      slot="activator"
                      label="Pick an end time for your event"
                       required v-model="end_time"
                       prepend-icon="access_time"
                       readonly
                    ></v-text-field>
                    <v-time-picker v-model="end_time" format="24hr" actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">Save</v-btn>
                      </v-card-actions>
                      </template>
                    </v-time-picker>
                  </v-dialog>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Description" required v-model="body"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="blue--text darken-1" flat v-on:click="submitEvent">Submit</v-btn>
                      <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
  data () {
    return {
      body: '',
      dialog: false,
      description: '',
      title: '',
      date: null,
      start_time: null,
      end_time: null,
      calEvents: [],
      menu: false,
      modal: false,
      menu2: false,
      modal2: false,
      modal3: false,
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
      closeDialog(e) {
        console.log(e.editdialog)
        e.editdialog=false
      },
      submitEvent() {
        let self = this
        axios.post('http://127.0.0.1:8000/eventfeeds/create/', {
          title: this.title,
          description: this.body,
          date: this.date,
          location: this.location,
          start_time: this.start_time,
          end_time: this.end_time,
        }).then(
          response => {
            console.log(response)
            self.fetchEntries()
         }
          )
        this.dialog = false
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
  #calBut {
    background-color: #5A2B81;
  }
</style>