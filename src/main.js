import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import './scss/style.scss'
import router from './router'
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper) 

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:3000/web/api'
})


Vue.prototype.$http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(localStorage.token)
  config.headers.Authorization = 'Bearer '+(localStorage.token || '')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.prototype.$http.interceptors.response.use(res =>{
  return res
},err=>{
  if(err.response.data.message){
      Vue.prototype.$message({
          type:'error',
          message:err.response.data.message
      })

  if(err.response.status===401){
    router.push('/login')
  }
  }
  return Promise.reject(err)
})

Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return{
        AuTHoriZation:`Bearer ${localStorage.token ||''}`
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
