import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(VueSocketio, socketio('http://localhost:3000/'));//与websocket服务端链接
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  sockets: {
    connect: function () {
      console.log('socket connected');
    }
  },
  render: h => h(App)
}).$mount("#app");
