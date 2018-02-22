<template>
<!-- 我的页面-->
  <div class="myzone">
    <mt-header fixed title="账号"></mt-header>
    <div class="myzoneContent">
      <div class="headpicbox bgwhite">
        <div class="headpic">
          <div class="imgbox">
            <img src="http://p1.music.126.net/OiWRTvuOeiXRZNWKzvzRWQ==/18503681184549091.jpg?param=80y80" alt="头像">
          </div>
          <div class="info">
            <em>黑色摩天轮</em>
            <i>Lv.5</i>
          </div>
          <button type="buttom" :disabled="isCheckin" @click="checkin()">{{checkInMsg}}</button>
        </div>

        <div class="myzonenav">

          <a href="javascript:;">
            <p class="top">动态</p>
            <em>0</em>
          </a>
          <a href="javascript:;">
            <p class="top">关注</p>
            <em>10</em>
          </a>
          <a href="javascript:;">
            <p class="top">粉丝</p>
            <em>0</em>
          </a>
          <a href="javascript:;">
            <i class="fa fa-edit"></i>
            <p>我的资料</p>
          </a>

        </div>
      </div>
      <!--我的消息-->
      <div class="cellbox">
        <mt-cell title="我的消息"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-envelope-o fa-fw"></i>
        </mt-cell>
      </div>
      <!--会员中心-->
      <div class="cellbox">
        <mt-cell title="会员中心"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-trophy fa-fw"></i>
        </mt-cell>
        <mt-cell title="商城"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-shopping-cart fa-fw"></i>
        </mt-cell>
        <mt-cell title="在线听歌免流量"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-folder-o fa-fw"></i>
        </mt-cell>
      </div>
      <!--设置-->
      <div class="cellbox">
        <mt-cell  title="设置"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-cog fa-fw"></i>
        </mt-cell>
        <mt-cell title="主题皮肤" value="官方红" to="//github.com" is-link>
          <i class="fa fa-user-o fa-fw" slot="icon"></i>
        </mt-cell>
        <mt-cell title="夜间模式"  to="//github.com" >
          <i class="fa fa-lightbulb-o fa-fw" slot="icon"></i>
          <mt-switch v-model="nightModel"></mt-switch>
        </mt-cell>   
        <mt-cell title="定时关闭"  to="//github.com" is-link>
          <i class="fa fa-clock-o fa-fw" slot="icon"></i>
        </mt-cell> 
        <mt-cell title="音乐闹钟"  to="//github.com" is-link>
          <i class="fa fa-bell-o fa-fw" slot="icon"></i>
        </mt-cell>
        <mt-cell title="驾驶模式"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-car fa-fw"></i>
        </mt-cell>                    
      </div>
      <!--分享-->
      <div class="cellbox">
        <mt-cell title="分享网易云音乐"  to="//github.com" is-link>
          <i class="fa fa-share-square-o fa-fw" slot="icon"></i>
        </mt-cell>
        <mt-cell title="关于"  to="//github.com" is-link>
          <i class="fa fa-info-circle fa-fw" slot="icon"></i>
        </mt-cell>
      </div>
      <!--退出-->
      <div class="drop bgwhite">退出登录</div>
    </div>
  </div>
</template>


<script>
import {Toast} from 'mint-ui';
export default {
  name: 'myzone',
  data() {
    return {
      checkInMsg: '签到',
      isCheckin: false,
      nightModel:false//夜间模式开关
    }
  },
  methods: {
    checkin() {
      this.isCheckin = true;
      this.CheckInMsg = "已签到";
      Toast({
        message: '签到成功',
        iconClass: 'fa fa-check fa-3x'
      });
    }
  }
}

</script>

<style scoped lang="scss">
  @import '../../sass/myzone';
</style>
