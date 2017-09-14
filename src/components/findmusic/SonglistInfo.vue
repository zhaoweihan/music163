<template>
  <div class="coverbg">
    <!--Header-->
    <mt-header fixed :title="headerTitle">
      <mt-button icon="back" slot="left" @click="goBack()"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--歌单信息-->
    <div class="songlistinfo">
      <div class="search" v-show="false"></div>
      <div class="middleinfo" @click="showInfoPopup()">
        <div class="imgbox">
          <img :src="infoData.cover" alt="歌单封面">
        </div>
        <div class="info">
          <p class="listname">{{infoData.title}}</p>
          <p class="owner">
            <img :src="infoData.ownerPic">{{infoData.owner}}
            <i class="fa fa-angle-right"></i>
          </p>
        </div>
      </div>
      <div class="buttonarea">
        <a href="javascript:;">
          <i class="fa fa-calendar-plus-o"></i>{{infoData.collection_count}}</a>
        <a href="javascript:;">
          <i class="fa fa-comment"></i>{{infoData.comment_count}}</a>
        <a href="javascript:;">
          <i class="fa fa-share-square-o"></i>{{infoData.share_count}}</a>
        <a href="javascript:;">
          <i class="fa fa-cloud-download"></i>下载</a>
      </div>
    </div>
    <!--歌曲列表-->
    <div class="songlist" :class="{stickUp:isStickUp}">
      <div class="playAll">
        <i class="fa fa-play-circle-o fa-fw playIcon"></i> 播放全部
        <em>（共{{songNum}}首）</em>
        <span>
          <i class="mui-icon mui-icon-list chooseMore"></i>多选</span>
      </div>
      <transition-group name="slide">
        <!--<i class='fa fa-ellipsis-h'></i>i-->
        <!--  -->
        <mt-cell-swipe v-for="(song,index) in songlist" :to="'/musicinfo/'+song.id"  :title="(index+1)+' '+song.name" :label="song.artists[0].name+'-'+song.album.name" :key="song.id" :right="[
                   {
                     content: '详情',
                     style: { background: '#ccc', color: '#fff' },
                     handler: () => showsheet(song)
                   },{
                     content: '删除',
                     style: { background: '#ce3d3a', color: '#fff' },
                     handler: () => deleteSonglistItem(song.id)
                   }]">
          <!-- <i class='fa fa-ellipsis-h' @click.stop="showsheet(song)"></i> -->
        </mt-cell-swipe>
      </transition-group>

    </div>
    <!--歌单详情介绍弹出层-->
    <mt-popup v-model="songlistInfoVisible" pop-transition="popup-fade" class="songlistInfoPopup">
      <infodes :infodesdata="infoData" v-on:closepopup="closePopupfn"></infodes>
    </mt-popup>
    <!--歌曲功能菜单-->
    <mt-popup v-model="songlistItemVisible" position="bottom" class="songlistItemPopup">
      <songmenu :song-menu-data="songMenuPropData" :songname="headerTitle"></songmenu>
    </mt-popup>
  </div>
</template>
<script>
import servers from '../../lib/servers.js';
import { Toast } from 'mint-ui';

import songmenu from './songlistinfo/songmenu';
import infodes from './songlistinfo/infoDes'
import default_album from '../../assets/default_album.jpg'
export default {
  data() {
    return {
      headerTitle: "歌单",
      infoData: {
        cover:default_album,
        ownerPic:default_album
      },
      songNum: 0,
      songlist: [],
      songlistItemVisible: false,//控制歌曲操作菜单
      songlistInfoVisible: false,//控制歌单详情介绍弹出层
      isStickUp: false,
      songMenuPropData: {
        namn: "",
        artistsName: "",
        albumName: ""
      }
    }
  },
  methods: {
    getinfo() {
      const self = this;
      servers.get('/playlist/' + self.$route.params.id, function(result) {
        // console.log(result)
        result.data.cover += result.data.cover + "?param=144y144"
        self.infoData = result.data

      })
    },
    getSonglist() {
      const self = this;
      servers.get('/song_list/' + self.$route.params.id, function(result) {
        // console.log(result)
        self.songNum = result.data.length;
        self.songlist = result.data;
      });
    },
    deleteSonglistItem(id) {
      const self = this;
      self.songlist.forEach(function(element, i) {
        if (id == element.id) {
          self.songlist.splice(i, 1);
        }
      });
    },
    showsheet(item) {
      // console.log(item)
      this.songMenuPropData.name = item.name;//歌曲名字
      var artistsName = [];
      item.artists.forEach(function(ar, ai) {
        artistsName.push(ar.name);
      })
      this.songMenuPropData.artistsName = artistsName.join("/")//歌手
      this.songMenuPropData.albumName = item.album.name //专辑名字
      this.songlistItemVisible = true
    },
    showInfoPopup() {
      this.songlistInfoVisible = true
    },
    closePopupfn() {
      this.songlistInfoVisible = false
    },
    scrollStyle() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      if (scrollTop > 215) {
        this.isStickUp = true
        this.headerTitle = this.infoData.title
      } else {
        this.isStickUp = false
        this.headerTitle = '歌单'
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  components: { songmenu, infodes },
  created() {
    this.getinfo();
    this.getSonglist();
  },
  mounted() {
    var self = this;
    window.addEventListener('scroll', this.scrollStyle)
  }
}

</script>
<style lang="scss">
@import '../../sass/common';
@import '../../sass/songlistinfo';
</style>
