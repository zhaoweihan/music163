<template>
  <div class="coverbg">
    <!--Header-->
    <mt-header fixed title="歌单">
      <router-link to="/bottomnav" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--歌单信息-->
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
    <!--歌曲列表-->
    <div class="songlist">
      <div class="playAll">
        <i class="fa fa-play-circle-o fa-fw playIcon"></i> 播放全部<em>（共{{songNum}}首）</em>
        <span><i class="mui-icon mui-icon-list chooseMore"></i>多选</span>
      </div>
      <transition-group name="slide">
        <!--<i class='fa fa-ellipsis-h'></i>i-->
        <mt-cell-swipe v-for="(song,index) in songlist" :title="(index+1)+' '+song.name"  :label="song.artists[0].name+'-'+song.album.name" :key="song.id" :right="[
           {
             content: '删除',
             style: { background: '#ce3d3a', color: '#fff' },
             handler: () => deleteSonglistItem(song.id)
           }]">
            <i class='fa fa-ellipsis-h'></i>
        </mt-cell-swipe>
      </transition-group>

    </div>
  </div>

</template>
<script>
  import servers from '../../lib/servers.js';
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        infoData: {},
        songNum: 0,
        songlist: []
      }
    },
    methods: {
      getinfo() {
        const self = this;
        servers.get('/playlist/' + self.$route.params.id, function (result) {
          result.data.cover += result.data.cover + "??param=144y144"
          self.infoData = result.data

        })
      },
      getSonglist() {
        const self = this;
        servers.get('/song_list/' + self.$route.params.id, function (result) {
          console.log(result)
          self.songNum = result.data.length;
          self.songlist = result.data;
        })
      },
      deleteSonglistItem(id) {
        const self = this;
        self.songlist.forEach(function (element, i) {
          if (id == element.id) {
            self.songlist.splice(i, 1);
          }
        });


      }
    },
    created() {
      this.getinfo();
      this.getSonglist();
    }
  }

</script>
<style lang="scss">
  @import '../../sass/common';
  @import '../../sass/songlistinfo';

</style>
