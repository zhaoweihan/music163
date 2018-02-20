<template>
  <div class="imgMax-box">
      <ul class="imgMax-list" :class="{one:imglist.length==1,two:imglist.length==2||imglist.length==4,otherNum:imglist.length==3||imglist.length>4}">
          <li class="imgMax-list-item" :class="'imgMax-list-item'+itemid" v-for="(img,i) in imglist" :key="i">
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
    itemid:{
      type:String,
      required: true
    },
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
      } else {
        ele.parentNode.style.justifyContent = "center";
        ele.parentNode.style.alignItems = "center";
      }
    },
    countItemSize() {
      let domList = document.querySelectorAll(".imgMax-list-item"+this.itemid);
      if (domList.length == 1) return;
      domList.forEach((ele, index) => {
        ele.style.height = domList[0].offsetWidth + "px";
      });
    }
  },
  mounted() {
    this.countItemSize();
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
      @include flex;
      overflow: hidden;
    }
    &.one {
      .imgMax-list-item {
        width: 100%;
        height: 150px;
      }
    }
    &.two {
      @include flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .imgMax-list-item {
        width: calc(50% - 2px);
        &:nth-of-type(3),
        &:nth-of-type(4) {
          margin-top: 4px;
        }
      }
    }
    &.otherNum {
      font-size: 0;
      @include flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .imgMax-list-item {
        @include flex;
        width: calc(33.33% - 2px);
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(8),
        &:nth-of-type(9) {
          margin-left: 3px;
        }
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(6){
          margin-bottom: 3px;
        }

      }
    }
  }
}
</style>

