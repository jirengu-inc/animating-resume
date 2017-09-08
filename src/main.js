import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

var width = document.documentElement.clientWidth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(width > 500 ? App : Mobile)
})
