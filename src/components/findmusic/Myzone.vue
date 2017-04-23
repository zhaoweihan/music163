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

          <button type="buttom" v-bind:disabled="{disabled:isCheckin}">已签到</button>

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
            <i class="mui-icon mui-icon-compose"></i>
            <p>我的资料</p>
          </a>

        </div>
      </div>
      <!--我的消息-->
      <div class="cellbox">
        <mt-cell title="我的消息"  to="//github.com" is-link>
          <i slot="icon" class="mui-icon mui-icon-email"></i>
        </mt-cell>
      </div>
      <!--会员中心-->
      <div class="cellbox">
        <mt-cell title="会员中心"  to="//github.com" is-link> </mt-cell>
        <mt-cell title="商城"  to="//github.com" is-link>
          <i slot="icon" class="fa fa-shopping-cart"></i>
        </mt-cell>
        <mt-cell title="在线听歌免流量"  to="//github.com" is-link> </mt-cell>
      </div>
      <!--设置-->
      <div class="cellbox">
        <mt-cell  title="设置"  to="//github.com" is-link>
          <i slot="icon" class="mui-icon mui-icon-gear"></i>
        </mt-cell>
        <mt-cell title="主题皮肤" value="官方红" to="//github.com" is-link> </mt-cell>
        <mt-cell title="夜间模式"  to="//github.com" is-link> </mt-cell>   
        <mt-cell title="定时关闭"  to="//github.com" is-link> </mt-cell> 
        <mt-cell title="音乐闹钟"  to="//github.com" is-link> </mt-cell>
        <mt-cell title="驾驶模式"  to="//github.com" is-link> </mt-cell>                    
      </div>
      <!--分享-->
      <div class="cellbox">
        <mt-cell title="分享网易云音乐"  to="//github.com" is-link> </mt-cell>
        <mt-cell title="关于"  to="//github.com" is-link> </mt-cell>
      </div>
      <!--退出-->
      <div class="drop bgwhite">退出登录</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'myzone',
  data () {
    return {
      msg: '我是 我的',
      isCheckin:true
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../sass/common';
  @import '../../sass/myzone';
</style>
