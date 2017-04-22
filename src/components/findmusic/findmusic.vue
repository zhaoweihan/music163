<template>
  <div class="homepage">
    <header id="header" class="mui-bar mui-bar-nav">
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder="搜索音乐歌词电台">
      </div>
      <a class="mui-icon mui-icon-bars mui-pull-right"></a>
    </header>
    <div class="mui-content">
      <!--tabContainer-->
      <div class="tagnav">
        <span v-for='(item, $index) in tagnav' :class="{'on':flag==$index}"  @click="switchs($index)">{{item}} </span>
      </div>
      <!--内容-->
      <mt-tab-container v-model="tabActive" :swipeable="false">
       <router-view></router-view>
      </mt-tab-container>
    </div>
  </div>
</template>


<script>
	import Vue from 'vue';
	import router from '../../router';
	export default {
	  name: 'homepage',
	  data() {
	    return {
	      flag: 0,
	      tagnav: ['个性推荐', '歌单', '主播电台', '排行榜'],
	      tabActive: "tab-container1",
	    }
	  },
	  methods: {
	    switchs(index) {
	      this.tabActive = "tab-container" + (index + 1);
	      switch (index) {
	        case 0:
						router.push('/bottomnav/');
	          break;
	        case 1:
						router.push('/bottomnav/songlist');
	          break;
	        case 2:
						router.push('/bottomnav/anchorStation');
	          break;
	        case 3:
							router.push('/bottomnav/rank');
	          break;
	      }
	    }
	  },
	  watch: {
	    tabActive(val, oldVal) {
	      this.flag = Number(val.substr(-1, 1)) - 1;
	    }
	  }
	}

</script>

<style scoped lang="scss">
	@import "../../sass/homepage.scss";
</style>