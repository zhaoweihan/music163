<template>
  <div class="mymusic">
    <!--页头-->
    <mt-header title="我的音乐">
      <mt-button slot="left">更多</mt-button>
      <mt-button slot="right"><img src="../../assets/icon/musicfrequency.svg" class="frequency"></mt-button>
    </mt-header>
    <!--操作列表-->
    <div class="celllist">
      <mt-cell title="本地音乐" to="javascript:;" is-link value="1"><i class="fa fa-music fa-fw" slot="icon"></i></mt-cell>
      <mt-cell title="最近播放" to="javascript:;" is-link value="100"><i class="fa fa-play-circle-o fa-fw" slot="icon"></i></mt-cell>
      <mt-cell title="我的电台" to="javascript:;" is-link value="2"><i class="fa fa-tint fa-fw" slot="icon"></i></mt-cell>
      <mt-cell title="我的收藏" to="javascript:;" is-link value="6"><i class="fa fa-user-plus fa-fw" slot="icon"></i></mt-cell>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'mymusic',
  data() {
    return {
      msg: '我是 我的音乐'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../sass/common';
.mymusic{
  .celllist{
    .mint-cell{
      i{
        color: $baseColor;
        font-size: 24px;
      }
    }
  }
}
</style>
