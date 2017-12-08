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
            <v-flex offset-xs6> 
              <v-card class = "purpBox">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Funded Intern Application</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <upload-button title="Browse" :selectedCallback="fileSelectedFunc"></upload-button>
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

<script>
import UploadButton from '../components/uploadButton'
export default {
  components: {
    UploadButton
  },
  data () {
    return {
      file: null
    }
  },
  methods: {
    fileSelectedFunc (file) {
      console.log(file)
      this.file = file
    },
    submitForm () {
      let data = new FormData()
      data.append('file', this.file)
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          console.log(this.responseText)
        }
      })
      xhr.open('POST', 'http://localhost:8080/YOUR_API_ENDPOINT')
      console.log(xhr)
      xhr.send(data)
    }
  }
}
</script>


