<template>
  <div class="imgMax-box">
      <ul class="imgMax-list" :class="{one:imglist.length==1}">
          <li class="imgMax-list-item" v-for="(img,i) in imglist" :key="i">
              <img :src="img" @load="imgload($event)">
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { a: "aa" };
  },
  props: {
    imglist: {
      type: Array,
      required: true
    }
  },
  methods: {
    imgload(e) {
      let ele = e.target;
      let imgNW = ele.naturalWidth;
      let imgMH = ele.naturalHeight;
      let liW = ele.parentNode.clientWidth;
      let liH = ele.parentNode.clientHeight;
      console.log(imgNW,imgMH)
      if (imgNW >= liW && imgMH >= liH) {
        if (imgNW >= imgMH) {
          ele.style.height = "100%";
          ele.style.width = "auto";
          ele.parentNode.style.justifyContent = "center";
        } else {
          ele.style.height = "auto";
          ele.style.width = "100%";
          ele.parentNode.style.alignItems = "center";
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/common.scss";
.imgMax-box {
  width: 100%;
  margin-bottom: 10px;
  .imgMax-list {
    .imgMax-list-item {
      position: relative;
      @include flex;
      overflow: hidden;
    }
    &.one {
      .imgMax-list-item {
        width: 100%;
        height: 150px;
      }
    }
  }
}
</style>

