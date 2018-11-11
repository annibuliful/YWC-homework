// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, { locale: 'en' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDmFA_2PpirMXgk9Y2W9bI92QctEgAVRPA',
      authDomain: 'ywchomework-3cef1.firebaseapp.com',
      databaseURL: 'https://ywchomework-3cef1.firebaseio.com',
      projectId: 'ywchomework-3cef1',
      storageBucket: 'ywchomework-3cef1.appspot.com',
      messagingSenderId: '776244465089'
    })
  },
  template: '<App/>',
  components: { App },
  store
})
