import Vue from 'vue';
import axios from 'axios';
import {Toast} from 'mint-ui';


const baseUrl = 'http://zwh.s1.natapp.cc';//192.168.102.63 192.168.1.106  47.93.249.147

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
