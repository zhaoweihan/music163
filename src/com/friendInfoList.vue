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
    <div class="hotTopic">
      <h3 class="hotTopic-title">热门话题
        <i class="fa fa-angle-right fa-fw"></i>
      </h3>
      <div class="hotTopic-scrollBox">
        <ul class="hotTopic-list">
          <li class="hotTopic-list-item" v-for="b in 3" :key="b">
            <span class="words">#{{b}}一首歌预测你的情人节#</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 1
    };
  },
  methods: {},
  created() {
    console.log(1);
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/common";
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
    height: 150px;
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
      height: 80px;
      width: 100%;
      padding-left: 10px;
      overflow-x: auto;
      .hotTopic-list {
        height: 100%;
        width: 488px;
        -webkit-overflow-scrolling: touch;
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
          background: rgba(0,0,0,.2);
          &:last-of-type {
            margin-right: 0;
          }
          .words{
            display: inline-block;
            width: 60%;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>


