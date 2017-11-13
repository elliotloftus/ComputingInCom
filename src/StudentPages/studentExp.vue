<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/studentHome.jpg')"
        >
         <v-container row justify-right>
           <v-layout row justify-right>
            <v-card color="purple" dark>
              <v-card-title primary class>
               <h3 class="CinCTitle"> Student Experiences</h3>
               </v-card-title>
              </v-card>
             </v-layout>
           </v-container>
          </v-card-media>
        </v-card>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card>
              <v-card-media
                height = 400 px
                class="white--text"
                :src = "require('../assets/travel.jpg')"
              >
              </v-card-media>
            </v-card>
        </v-flex>
        <v-flex xs6>
            <v-card>
              <v-card-media
                height = 400 px
                class="white--text"
                :src = "require('../assets/travel.jpg')"
              >
              </v-card-media>
            </v-card>
        </v-flex>
      </v-layout>
     </v-flex>
  </v-layout>
</template>