<template>
  <div class="coverbg">
    <mt-header fixed title="歌单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="songlistinfo">
      <div class="search" v-show="false"></div>
      <div class="middleinfo">
        <div class="imgbox">
          <img :src="infoData.cover" alt="歌单封面">
        </div>
        <div class="info">
          <p class="listname">{{infoData.title}}</p>
          <p class="owner"><img :src="infoData.ownerPic">{{infoData.owner}} <i class="fa fa-angle-right"></i></p>
        </div>
      </div>
      <div class="buttonarea">
        <a href="javascript:;"><i class="fa fa-calendar-plus-o"></i>{{infoData.collection_count}}</a>
        <a href="javascript:;"><i class="fa fa-comment"></i>{{infoData.comment_count}}</a>
        <a href="javascript:;"><i class="fa fa-share-square-o"></i>{{infoData.share_count}}</a>
        <a href="javascript:;"><i class="fa fa-cloud-download"></i>下载</a>
      </div>
    </div>

  </div>
</template>
<script>
  import servers from '../../lib/servers.js';
  import router from '../../router';
  export default {
    data() {
      return {
        infoData: {}
      }
    },
    methods: {
      getinfo() {
        const self = this;
        servers.get('/playlist/' + self.$route.params.id, function (result) {
          result.data.cover += result.data.cover + "??param=144y144"
          self.infoData = result.data

        })
      }
    },
    created() {
      this.getinfo();
    }
  }

</script>
<style  lang="scss">
  @import '../../sass/common';
  @import '../../sass/songlistinfo';

</style>
