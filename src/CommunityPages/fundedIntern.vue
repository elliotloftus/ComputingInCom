<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media
            height = 700 px
            class="white--text"
            :src = "require('../assets/finance.jpeg')"
        >
          <v-container row justify-right>
           <v-layout row justify-right>
            <v-flex offset-xs6> 
              <v-card class = "purpBox7">
                <v-card-title primary class>
                  <h3 class="secTierTitle">Funded Intern Application</h3>
               </v-card-title>
              </v-card>
            </v-flex>
           </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
              <v-card>
                <v-card-title>
                   <v-layout row justify-center>
                      <div class="headline"><h4>Apply for a Funded Intern!</h4></div><br></br>
                  </v-layout>
                  </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                             <v-layout row justify-center>
                                <div class="description"><h5>Download the application with the link below. Fill it out, upload it, and click submit. Thanks you for your interest!</h5></div></br>
                             </v-layout>
                          </v-flex>
                          <v-flex xs12>
                            <v-layout row justify-center>
                                <div class="pdf"><a href='pdfForms/example.pdf'target="_blank">Download the Application Here</a></div>
                              </form>
                            </v-layout>
                          </v-flex></br></br></br></br>
                          <v-flex xs12 sm6 md6>
                            <v-text-field label="First name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md6>
                            <v-text-field label="Last name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Email" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <div class="Upload"><h5>Upload your application using the file chooser below.</h5></div></br>
                          </v-flex>
                          <v-flex xs12>
                            <v-layout row justify-center>
                              <form method='post' action='Interns.php' enctype ='multipart/form-data'>
                                    <input type='file' name='app'> </br></br></br>
                                <div class="upload-btn-wrapper">
                                    <button class="bttn">Upload</button>
                                    <input type='submit' name='submit' value = 'Upload' style="display: none;">
                                </div>
                              </form>
                            </v-layout>
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


    </v-flex>
  </v-layout>
</template>

<style>
  .secTierTitle {
    margin: auto;
    height: 50%;
    font-family: 'Quattrocento Sans', sans-serif;
  }
  .purpBox7 {
    background-color: rgba(90, 43, 129, .90)!important;
    color: white!important;
  }

  h5 {
    text-align: center;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 16pt;
  }

  .pdf {
    margin-top: 10px;
  }

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    align-self: center;
  }

  .bttn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
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


