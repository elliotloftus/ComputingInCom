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
      <form method='post' action='Interns.php' enctype ='multipart/form-data'>
      <a href='pdfForms/example.pdf'target="_blank">Download</a>
      <input type='file' name='app'>
      <input type='submit' name='submit' value = 'Upload'>
      </form>
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
import axios from 'axios';
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
      xhr.open('POST', 'Interns.php', true)
      console.log(xhr)
      xhr.send(data)
    }
  }
}
</script>


