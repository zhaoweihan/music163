import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'; 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import servers from './lib/servers'
import 'font-awesome'
Vue.config.productionTip = false;

Vue.use(MintUI);
new Vue({
  el: '#app',
  router,
  store, // 注入store 
  template: '<App/>',
  components: { App }
})