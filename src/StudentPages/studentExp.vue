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
            <v-flex offset-xs7> 
              <v-card class="purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle"> Student Experiences</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
          </v-card-media>
        </v-card>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card id = "greyscale">
              <v-card-media
                height = 400 px
                class="white--text"
                :src = "require('../assets/travel.jpg')"
              >
          <v-container row justify-center>
           <v-layout row justify-center>
            <v-flex offset-xs6> 
              <v-card class="purpBox" :raised="true" :to ="projectOp.url">
                <v-card-title primary class>
                  <h5 id ="expStudent"> Student Name</h5>
                  <h6 id= "expTitle"> Experience Title</h6>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
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
          <v-container row justify-center>
           <v-layout row justify-center>
            <v-flex offset-xs6> 
              <v-card class="purpBox">
                <v-card-title primary class>
                  <h5 id ="expStudent"> Student Name</h5>
                  <h6 id= "expTitle"> Experience Title</h6>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
              </v-card-media>
            </v-card>
        </v-flex>
      </v-layout>
     </v-flex>
  </v-layout>
</template>

<style>
  #greyscale:hover{
    background-color: black
  }
  .secTierTitle {
    margin: auto;
    height: 50%;
  }
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
  }
</style>

<script>
export default {
  data() {
    return {
      projectOp: {title: 'Learn More', url : "/projectOp"},
    }
  }
}
</script>
