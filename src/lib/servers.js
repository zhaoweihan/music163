import Vue from 'vue';
import axios from 'axios';
import {Toast} from 'mint-ui';

if(process.env.NODE_ENV == 'production'){
  var baseUrl = 'http://39.107.115.234:3000';
}else{
  var baseUrl = 'http://localhost:3000';
}
//192.168.102.142 192.168.1.106

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
