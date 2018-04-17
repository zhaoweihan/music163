<template>
  <div class="friendinfo-box">
    <!-- 发送动态或视频 -->
    <div class="sendBtn">
      <div class="btn-box">
        <i class="fa fa-edit fa-fw"></i>发动态
      </div>
      <div class="btn-box">
        <i class="fa fa-video-camera fa-fw"></i>发布视频
      </div>
    </div>
    <div class="hr"></div>
    <!-- 热门话题 -->
    <div class="hotTopic">
      <h3 class="hotTopic-title">热门话题
        <i class="fa fa-angle-right fa-fw"></i>
      </h3>
      <div class="hotTopic-scrollBox">
        <ul class="hotTopic-list">
          <li class="hotTopic-list-item imgbox" v-for="(b,index) in topicList" :key="index">
            <img :src="b.img" alt="热门话题">
            <span class="words">#{{b.name}}#</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 动态列表 -->
    <div class="dynamicNews-list">
      <div class="dynamicNews-list-item"  v-for="item in dynamicList" :key="item.id">
        <!-- 左侧头像 -->
        <div class="leftBox">
          <div class="avatar imgbox">
            <img :src="item.avatar" alt="用户头像">
          </div>
        </div>
        <!-- 右侧 -->
        <div class="rightBox">
          <div class="userbox">
            <router-link to="/" class="username">{{item.username}}</router-link>
            <span class="behavior-type">{{item.shareType}}：</span>
            <div class="send-time">{{item.shareTime}}</div>
          </div>
          <div class="send-words">
            {{item.content}}
            <router-link to="/" class="topic" v-if="item.content.indexOf('#')>-1">#单身狗的日常心酸#</router-link>
          </div>
          <!-- 图片 -->
          <image-matrix :imglist="item.imglist" :itemid="item.id"></image-matrix>  
          <!-- 音乐 -->
          <div class="share-music">
            <div class="cover imgbox">
              <img src="../assets/defaultAvatar/f.jpg" alt="歌曲封面">
              <img src="../assets/icon/play.svg" alt="播放按钮" class="playBtn">
            </div>
            <p class="music-name">理想</p>
            <p class="singer">赵雷</p>
          </div>
          <!-- 操作区域 -->
          <div class="operating-area">
            <div class="operating-area-btn">
              <i class="fa fa-thumbs-o-up fa-fw"></i>赞
            </div>
            <div class="operating-area-btn">
              <i class="fa fa-commenting-o fa-fw"></i>评论
            </div>
            <div class="operating-area-btn">
              <i class="fa fa-share-square-o fa-fw"></i>分享
            </div>
            <div class="operating-area-btn">
              <i class="fa fa-ellipsis-h fa-fw"></i>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import topic from "../assets/topic/topic.jpg";
import topic2 from "../assets/topic/topic2.jpg";
import topic3 from "../assets/topic/topic3.jpg";
import cover from "../assets/music163start.jpg";
import imageMatrix from "../com/imageMatrix";
import servers from "../lib/servers";
export default {
  data() {
    return {
      topicList: [
        {
          name: "单身狗的日常心酸",
          img: topic
        },
        {
          name: "你心动的瞬间",
          img: topic2
        },
        {
          name: "宝莱坞明星",
          img: topic3
        }
      ],
      dynamicList: [],
      imagelist: [topic2, topic]
    };
  },
  methods: {
    getlist() {
      servers.post("/friendsDynamicList", {}, result => {
        this.dynamicList = result.list;
      });
    }
  },
  created() {
    this.getlist();
  },
  components: { imageMatrix }
};
</script>
<style lang="scss" scoped>
.friendinfo-box {
  .hr {
    width: 100%;
    height: 8px;
    border: 1px solid #e9eaec;
    border-right: 0;
    border-left: 0;
    background: #eeeff1;
  }
  .sendBtn {
    height: 40px;
    width: 100%;
    @include flex;
    .btn-box {
      position: relative;
      @include flex-1;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      &:first-of-type::after {
        content: "";
        position: absolute;
        right: 0;
        top: 4px;
        display: block;
        width: 1px;
        height: 32px;
        background: #eaebed;
      }
      i {
        color: $baseColor;
        font-size: 18px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  // 热门话题
  .hotTopic {
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #eee;
    .hotTopic-title {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      padding: 0 10px;
      margin: 10px 0;
      color: #555;
    }
    .hotTopic-scrollBox {
      height: 60px;
      width: 100%;
      padding-left: 10px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      .hotTopic-list {
        height: 100%;
        width: 498px;
        .hotTopic-list-item {
          @include flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
          width: 156px;
          background: #eee;
          margin-right: 10px;
          float: left;
          background: rgba(0, 0, 0, 0.2);
          img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          }
          .words {
            display: inline-block;
            width: 60%;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
  // 动态列表
  .dynamicNews-list {
    .dynamicNews-list-item {
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      @include flex;
      font-size: 16px;
      // 左侧
      $avatar: 44px;
      .leftBox {
        width: $avatar+20px;
        .avatar {
          width: $avatar;
          height: $avatar;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
        }
      }
      // 右侧
      .rightBox {
        width: calc(100% - #{$avatar} - 20px);
        padding-right: 10px;
        a {
          color: #4b77b0;
        }
        .userbox {
          color: #444;
          margin-bottom: 15px;
          .send-time {
            font-size: 12px;
            color: #999;
          }
        }
        .send-words {
          margin-bottom: 10px;
          word-wrap: break-word;
        }
        // 分享的音乐
        .share-music {
          position: relative;
          width: 100%;
          height: 60px;
          background: #f1f2f4;
          padding-top: 8px;
          margin-bottom: 15px;
          .cover {
            position: absolute;
            left: 8px;
            top: 8px;
            z-index: 1;
            width: 44px;
            height: 44px;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.3);
              z-index: 2;
            }
            .playBtn {
              $w: 70%;
              position: absolute;
              left: (100% - $w)/2;
              top: (100% - $w)/2;
              width: $w;
              height: $w;
              z-index: 3;
            }
          }
          p {
            margin-left: 60px;
            &.music-name {
              color: #333;
            }
            &.singer {
              color: #888;
              font-size: 12px;
            }
          }
        }
        // 操作区域
        .operating-area {
          @include flex;
          .operating-area-btn {
            @include flex-1;
            color: #999;
            font-size: 14px;
            &:last-of-type {
              text-align: right;
              i {
                margin-right: 15px;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>


