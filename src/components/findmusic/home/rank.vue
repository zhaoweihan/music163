<template>
  <mt-tab-container-item id="tab-container4" data-class="tab-container-4">
    <div class="ranking-itembox">
      <div class="itembox-title">云音乐官方榜</div>
      <div class="itembox-content">
        <ul class="ranking-list">
          <li v-for="(item,index) in music163ranklist">
            <div class="ranklogo">
              <img :src="item.cover" />
              <div class="msk"></div>
            </div>
            <div class="rightlist">
              <p v-for="(song,i) in item.songlist">{{i+1}}.{{song.name}} - 
                <em v-for="(ar,jk) in song.artists" ><i v-if="jk!=0"> / </i>{{ar.name}}</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </mt-tab-container-item>
</template>
<script>
import servers from '../../../lib/servers'
import {
  Toast
} from 'mint-ui';
export default {
  data() {
    return {
      music163ranklist: [],
    }

  },
  methods: {
    ranking() {
      let self = this;
      servers.get("/top_list", function (result) {
        self.music163ranklist = result.data[0].items;
        self.music163ranklist.forEach((item, index) => {
          item.cover = item.cover.replace("40y40", "120y120");
          (function (ids,j) {
            //排行榜前三首歌
            servers.get("/topSongList/" + ids, function (result) {
              result.length = 3;
              self.music163ranklist[j].songlist = result.data;
              console.log(self.music163ranklist[j]);
            })
          })(item.href.split("?id=")[1],index)
        });

      });
    }
  },

  created() {
    this.ranking();
  }
}



</script>
<style scoped lang="scss" scoped>
@import '../../../sass/common.scss';
[data-class="tab-container-4"] {
  display: block !important;
  .ranking-itembox {
    width: 100%;
    margin-bottom: 40px;
    .itembox-title {
      $title-height: 21px;
      width: 100%;
      height: $title-height;
      line-height: $title-height;
      font-size: 16px;
      border-left: 3px solid $baseColor;
      padding-left: 5px;
      margin: 10px 0;
    }
    .itembox-content {
      width: 100%;
      .ranking-list {
        $li-height: 120px;
        li {
          margin-bottom: 5px;
          width: 100%;
          height: $li-height;
          border-bottom: 1px solid #ddd;
          .ranklogo {
            position: relative;
            float: left;
            width: $li-height;
            height: $li-height;
            .msk {
              position: absolute;
              left: 0;
              top: 0;
              width: inherit;
              height: inherit;
              background: url(../../../assets/coverall.png) no-repeat;
              background-position: -230px -380px;
            }
            img {
              width: inherit;
              height: inherit;
            }
          }
          .rightlist {
            float: right;
            width: calc(100% - #{$li-height});
            p {
              font-size: 14px;
              margin: 14px 0;
              padding: 0 10px;
              white-space: nowrap;
              @include ellipses;
            }
          }
        }
      }
    }
  }
}

</style>
