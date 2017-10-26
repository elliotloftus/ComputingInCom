<template>
  <v-app light>
    <v-toolbar>
      <v-toolbar-title>Furman @CinC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to = "home.url" > {{home.title}}</v-btn>
        <v-btn :to = "student.url" > {{student.title}}</v-btn>
        <v-btn :to = "faculty.url">  {{faculty.title}}</v-btn>
        <v-btn :to = "community.url">  {{community.title}}</v-btn>
        <v-btn :to = "calander.url">  {{calander.title}}</v-btn>
        <v-btn :to = "blog.url">  {{blog.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view>
              <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
              <blockquote>
                &#8220;Computing In Community.&#8221;
              </blockquote>
            </router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        student: {title: 'students', url : "/students"},
        faculty: {title: 'faculty', url : "/faculty"},
        community: {title: 'community', url : "/community"},
        blog: {title: 'blog', url : "/blog"},
        calander: {title: 'calander', url : "/calander"},
        home: {title: 'home', url : "/"},
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Furman @CinC'
      }
    }
  }

</script>
