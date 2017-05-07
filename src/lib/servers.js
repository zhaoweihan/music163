import Vue from 'vue';
import axios from 'axios';
import {Toast} from 'mint-ui';


const baseUrl = 'http://192.168.1.106:3000';//http://192.168.102.63

export default {
  get(url, sucessCallback, dataParams) {
    axios.get(baseUrl + url, {
        params: dataParams
      }).then(function (response) {
        const result = response.data;
        if (result.code == 200) {
          sucessCallback(result);
        } else {
          Toast({
            message: result,
            position: 'bottom',
            duration: 3000
          });
        }
      })
      .catch(function (error) {
        console.log("e:" + error);
      });

  },
  post(url, sucessCallback, dataParams) {
    axios.post(baseUrl + url, dataParams)
      .then(function (response) {
        const result = response.data;
        if (result.code == 200) {
          sucessCallback(result);
        } else {
          Toast({
            message: result,
            position: 'bottom',
            duration: 3000
          });
        }
      })
      .catch(function (error) {
        console.log("e:" + error);
      });
  }
}
