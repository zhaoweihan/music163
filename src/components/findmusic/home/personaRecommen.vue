<template>
  <mt-tab-container-item id="tab-container1" data-class="tab-container-1">
    <!--第一屏内容1-->
    <!--轮播图-->
    <mt-swipe :auto="3000" :style="{height:bannerHeight +'px'}" :prevent="true" :defaultIndex="0">
      <mt-swipe-item v-for="(item,index) in bannerlist" :key="index">
        <a :href="item.url"><img :src="item.picUrl" /></a>
      </mt-swipe-item>
    </mt-swipe>
    <!--icon导航-->
    <div class="iconNav">
      <div class="icon-li">
        <i class="iconfont icon-fm"></i>
        <p>私人FM</p>
      </div>
      <div class="icon-li">
        <i class="redBorder">{{nowdate}}</i>
        <p>每日歌曲推荐</p>
      </div>
      <div class="icon-li">
        <i class="redBorder iconfont icon-paihangbang"></i>
        <p>云音乐热歌榜</p>
      </div>
    </div>
    <!--推荐歌单-->
    <div class="recommendSonglist">
      <div class="title"><i class="mui-icon mui-icon-navigate"></i><span>推荐歌单</span><em>更多</em></div>
      <div class="songlist">
        <div class="songbox" v-for="(item,index) in recommendSonglist" v-if="index <	 6">
          <i>{{item.num}}</i>
          <div class="imgbox"><img v-lazy="item.cover" /></div>
          <p>{{item.title}}</p>
        </div>

      </div>
    </div>
    <!--独家放送-->
    <div class="exclusiveDelivery">
      <div class="title"><i class="mui-icon mui-icon-navigate"></i><span>独家放送</span><em>更多</em></div>
      <div class="firstfloor">
        <div class="firstfloorBox left">
          <img src="../../../assets/djfs/djfs1.png" />
          <p>网易原创歌曲榜 在深沉的汪洋中抬头仰望星空</p>
        </div>
        <div class="firstfloorBox right">
          <img src="../../../assets/djfs/djfs2.png" />
          <p>幸田来未全新数字专辑《WFACE~inside~》独家上线！</p>
        </div>
      </div>
      <div class="secondfloor">
        <img src="../../../assets/djfs/djfs3.jpg" />
        <p>一周热评 第103期 大唐农药 ，喝完这碗还有一碗</p>
      </div>
    </div>
    <!--最新音乐-->
    <div class="latestMusic recommendSonglist">
      <div class="title"><i class="mui-icon mui-icon-navigate"></i><span>最新音乐</span><em>更多</em></div>
      <div class="songlist">
        <div class="songbox" v-for="(item,index) in latestmusiclist">
          <div class="imgbox"><img v-lazy="item.picUrl" /></div>
          <p>{{item.albumName}}
            <span>{{item.singerName}}</span>
          </p>
        </div>

      </div>
    </div>
  </mt-tab-container-item>
</template>

<script>
    import Vue from 'vue';
    import servers from '../../../lib/servers'
    export default {
      data() {
        return {
          nowdate: new Date().getDate(),
          flag: 0,
          tagnav: ['个性推荐', '歌单', '主播电台', '排行榜'],
          tabActive: "tab-container1",
          bannerlist: [],
          recommendSonglist: [],
          latestmusiclist: [],
        }

      },

      methods: {
        switchs(index) {
          this.flag = index;
          this.tabActive = "tab-container" + (index + 1);
          if (index == 3) this.ranking();
        },
        getBannerList() {
          let self = this;
          servers.get('/banner_list', function (result) {
            self.bannerlist = result.data;
          })
        },
        recommendSong() {
          let self = this;
          servers.get('/recommendList', function (result) {
            for (let i = 0; i < result.data.length; i++) {
              result.data[i].cover = result.data[i].cover.replace("?param=140y140", "");
            }
            self.recommendSonglist = result.data;
          })
        },
        latestMusicList() {
          let self = this;
          servers.get('/latestMusicList', function (result) {
            self.latestmusiclist = result.data;
          })
        }
      },
      watch: {
        tabActive(val, oldVal) {
          this.flag = Number(val.substr(-1, 1)) - 1;
        }
      },
      computed: {
        bannerHeight() { //动态计算banner图高度。以达到自适应
          return screen.width / 2.17;
        }
      },
      created() {
        this.getBannerList();
        this.recommendSong();
        this.latestMusicList();
      }
    }


</script>
<style scoped lang="scss">
@import '../../../sass/common.scss';
       [data-class='tab-container-1'] {
            display: block !important;
            //轮播图
            .mint-swipe {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            //icon 导航
            .iconNav {
                $icon-width: 50px;
                @include flex;
                width: 100%;
                height: 110px;
                background: $basewhiteColor;
                border-bottom: 1px solid rgba(0,0,0,.1);
                .icon-li {
                    $top: 15px;
                    position: relative;
                    @include flex-1;
                    i {
                        display: block;
                        width: $icon-width;
                        height: $icon-width;
                        color: $baseColor;
                        margin-top: $top;
                        &.redBorder {
                            border: 1px solid $baseColor;
                            border-radius: 50%;
                            text-align: center;
                            line-height: $icon-width;
                            font-size: 36px;
                            font-weight: 300;
                            margin-left: calc(50% - #{$icon-width / 2});
                        }
                        &.icon-fm {
                            position: relative;
                            margin-left: calc(50% - #{$icon-width / 2});
                            border: 1px solid $baseColor;
                            border-radius: 50%;
                            font-size: 56px;
                            &:before {
                                position: absolute;
                                top: 17px;
                                right: -4px;
                            }
                        }
                    }
                    p {
                        text-align: center;
                        font-size: 12px;
                        margin-top: 8px;
                    }
                }
            }

            //推荐歌单
            .recommendSonglist {
                background: $basewhiteColor;
                @at-root .title {
                    $title-height: 34px;
                    height: $title-height;
                    line-height: $title-height;
                    padding: 0 10px;
                    i {
                        color: $baseColor;
                        font-size: 22px;
                    }
                    span {
                        font-size: 16px;
                        margin-left: 5px;
                    }
                    em {
                        height: 30px;
                        float: right;
                        font-size: 12px;
                        color: #888;
                        &:after {
                            content: "\e583";
                            font-family: Muiicons;
                        }
                    }
                }
                .songlist {
                    @include flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .songbox {
                        position: relative;
                        width: 33%;
                        margin-bottom: 5px;
                        i {
                            position: absolute;
                            right: 0;
                            top: 0;
                            background: rgba(0,0,0,.1);
                            color: #fff;
                            padding: 0 3px;
                            height: 14px;
                            line-height: 14px;
                            font-size: 12px;
                            &:before {
                                content: '';
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                background: url("../../../assets/icon/erji-white.svg") no-repeat;
                            }
                        }
                        .imgbox {
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                        p {
                            font-size: 13px;
                            @include ellipses;
                            height: 42px;
                            padding: 0 5px;
                            span {
                                display: block;
                                color: #ccc;
                                font-size: 12px;
                            }
                        }

                    }
                }
            }

            //独家放送
            .exclusiveDelivery {
                background: $basewhiteColor;
                margin-bottom: 20px;
                .title {
                    @extend .title;
                }
                .firstfloor {
                    margin-bottom: 15px;
                    .firstfloorBox {
                        display: inline-block;
                        width: calc(50% - 1.5px);
                        &.right {
                            float: right;
                        }
                        img {
                            width: 100%;
                        }
                        p {
                            font-size: 12px;
                            padding: 0 5px;
                            line-height: 16px;
                        }
                    }
                }
                .secondfloor {
                    img {
                        width: 100%;
                    }
                    p {
                        font-size: 12px;
                        padding: 0 5px;
                        line-height: 16px;
                    }
                }
            }
        }
</style>