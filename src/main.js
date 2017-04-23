import Vue from 'vue';
import VueResource from 'resource';
import App from './App';
import router from './router';
import store from './store'; 
Vue.config.productionTip = false;
import './lib/mui.min.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import servers from './lib/servers'
import 'font-awesome'
Vue.use(MintUI);
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  store, // 注入store 
  template: '<App/>',
  components: { App }
})