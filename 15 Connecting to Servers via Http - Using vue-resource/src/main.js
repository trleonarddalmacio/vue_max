import Vue from 'vue'
import VueResource from 'vue-resource';

import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-88473.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);

  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  // the next() is the one that would continue the function after intercepting
  next(response => {
    response.json = () => {
      return {messages: response.body}
    } 
  }); 
});

new Vue({
  el: '#app',
  render: h => h(App)
})
