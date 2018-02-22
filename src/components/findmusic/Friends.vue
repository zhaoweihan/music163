<template>
  <div class="friends">
    <!-- 自定义header -->
    <div class="diy-header">
      <div class="header-icon left-icon">
        <img src="../../assets/icon/user_add.svg" alt="添加好友">
      </div>
      <div class="center-box">
        <div class="keys-btn" :class="{left:tagStatus==1,right:tagStatus==2}">
          <span @click="changeTag(1)">动态</span>
          <span @click="changeTag(2)">附近</span>
          <i class="slide-bar"></i>
        </div>
      </div>
      <div class="header-icon right-icon">
        <img src="../../assets/icon/musicfrequency.svg" class="frequency" alt="播放音乐">
      </div>
    </div>

    <!-- 两个组件 -->
    <keep-alive>
      <friendinfolist v-if="tagStatus==1"></friendinfolist>
    </keep-alive>
    <keep-alive>
      <nearby v-if="tagStatus==2"></nearby>
    </keep-alive>
  </div>
</template>

<script>
import friendinfolist from '@/com/friendInfoList';
import nearby from '@/com/nearby';
export default {
  name: "friends",
  data() {
    return {
      tagStatus: 1,
    };
  },
  methods: {
    changeTag(num = 1) {
      if (num == this.tagStatus) return;
      this.tagStatus = num;
    }
  },
  components: {
    friendinfolist,
    nearby
  }
};
</script>

<style scoped lang="scss">
.diy-header {
  $header-height: 40px;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  background: $baseColor;
  .header-icon {
    position: relative;
    width: $header-height;
    height: 100%;
    &.left-icon {
      float: left;
    }
    &.right-icon {
      float: right;
    }
    img {
      $img-size: 26px;
      position: absolute;
      left: ($header-height - $img-size)/2;
      top: ($header-height - $img-size)/2;
      width: $img-size;
      height: $img-size;
    }
  }
  .center-box {
    position: relative;
    display: inline-block;
    width: calc(100% - #{ $header-height} * 2);
    height: 100%;
    .keys-btn {
      $w: 120px;
      position: absolute;
      left: calc(50% - #{$w} / 2);
      top: calc(50% - 15px);
      width: $w;
      height: 30px;
      box-shadow: 0 0 0 1px  #fff;
      border-radius: 30px;
      font-size: 0;
      span {
        position: absolute;
        display: inline-block;
        color: #fff;
        line-height: 30px;
        height: 100%;
        width: 50%;
        font-size: 16px;
        text-align: center;
        z-index: 2;
        border-radius: 30px;
        &:first-of-type {
          left: 0;
        }
        &:last-of-type {
          left: 50%;
        }
      }
      .slide-bar {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 50%;
        background: #fff;
        border-radius: 30px;
        z-index: 1;
        @include transition(all 0.3s);
      }
      &.right {
        span {
          &:last-of-type {
            color: $baseColor;
          }
        }
        .slide-bar {
          left: calc(50% + 1px);
        }
      }
      &.left {
        span {
          &:first-of-type {
            color: $baseColor;
          }
        }
        .slide-bar {
          left: -1px;
        }
      }
    }
  }
}
</style>
