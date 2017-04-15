<template>
<div id="bottomnav">
  <router-view></router-view>

  <div class="bottomNav">
    <router-link to="/bottomnav/"><i class="iconfont icon-wangyiyunyinlezizhi"></i>发现音乐</router-link>
    <router-link to="/bottomnav/mymusic" ><i class="iconfont icon-music"></i>我的音乐</router-link>
    <router-link to="/bottomnav/friends" ><i class="iconfont icon-friend"></i>朋友</router-link>
    <router-link to="/bottomnav/myzone"><i class="iconfont icon-user"></i>我的</router-link>
  </div>
</div>

</template>
<script>
	export default {
		name: 'bottomnav',
		data() {
			return {
				msg: '我是 底部导航'
			}
		}
	}
</script>
<style lang="scss" scoped>
    @import '../sass/common.scss';
	 .bottomNav {
	   $bottomNav-height: 50px;
	   font-family: 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
	   -webkit-font-smoothing: antialiased;
	   -moz-osx-font-smoothing: grayscale;
	   color: #2c3e50;
	   padding-bottom: $bottomNav-height;
	   @include flex;
	   position: fixed;
	   bottom: 0;
	   background: rgba(0, 0, 0, .9);
	   width: 100%;
	   height: $bottomNav-height;
	   max-width: 640px;
	   font-size: 0;
	   line-height: normal;
	   a {
	     $color: #ccc;
	     @include flex-1;
	     padding-top: 4px;
	     color: $color;
	     text-align: center;
	     font-size: 12px;
	     i {
	       display: block;
	       font-size: 26px;
	       color: $color;
	     }
	     &.router-link-active {
	       color: #fff;
	       i {
	         color: #fff;
	       }
	     }
	   }
	 }

      
</style>
