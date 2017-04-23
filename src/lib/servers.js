import Vue from 'vue';
import VueResource from 'resource';
import { Toast } from 'mint-ui';
Vue.use(VueResource);
export default {
  get(url, sucessCallback) {
    Vue.http.get('http://localhost:3000'+url)
      .then((data) => {
        var result = data.body;
        if (result.code == 200) {
          sucessCallback(result);
        } else {
          Toast({
            message: result,
            position: 'bottom',
            duration: 3000
          });
        }
        // 响应成功回调
      }, (error) => {
        // 响应错误回调
        console.log("e:" + error);
      })
  }
}
