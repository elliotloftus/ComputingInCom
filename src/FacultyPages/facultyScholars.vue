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
            <v-flex xs5  offset-xs7> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Faculty Scholars</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-layout row-wrap>
          <v-flex xs6 v-for="fac_exp in fac_exps" v-bind:key="fac_exp.title">
            <v-card>
              <v-card-media
                height = 400 px
                class="white--text"
                :src = "require('../assets/travel.jpg')"
              >     
          <v-container row justify-center>
           <v-layout row justify-center>
            <v-flex offset-xs6> 
              <v-card class="purpBox" :to ="'/singlefacExp/' + fac_exp.id">
                <v-card-title primary class>
                  <h5 id ="expfac"> {{fac_exp.fac_name}}</h5>
                </v-card-title>
                <v-card-title primary class>
                  <h6 id= "expTitle"> {{fac_exp.title}}</h6>
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
  .secTierTitle {
    margin: auto;
    height: 50%;
  }
  .purpBox {
    background-color: #5A2B81!important;
    color: white!important;
  }
</style>