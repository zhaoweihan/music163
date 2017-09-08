<template>
  <mt-tab-container-item id="tab-container3" data-class="tab-container-3">
    <!--轮播图-->
    <mt-swipe :auto="3000" :style="{height:bannerHeight +'px'}" :prevent="true" :defaultIndex="0">
      <mt-swipe-item v-for="(item,index) in bannerlist" :key="index">
        <a :href="item.url">
          <img :src="item.picUrl" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </mt-tab-container-item>
</template>
<script>
import servers from '../../../lib/servers'
export default {
  data() {
    return {
      bannerlist: []
    }
  },
  methods: {
    //主页banner
    getBannerList() {
      servers.get('/banner_list', result => {
        this.bannerlist = result.data;
      })
    },
  },
  created() {
    this.$emit("active",3);
    this.getBannerList();
  },
  computed: {
    bannerHeight() { //动态计算banner图高度。以达到自适应
      return screen.width / 2.17;
    }
  },
}
</script>
<style scoped lang="scss">
[data-class="tab-container-3"] {
  display: block !important;
  .mint-swipe-items-wrap {
    img {
      width: 100%;
    }
  }
}
</style>
