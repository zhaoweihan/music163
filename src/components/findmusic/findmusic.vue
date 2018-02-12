<template>
  <div class="homepage">

		<!-- 自定义头部 -->
		<div class="diyHeader">
			<div class="headerbox leftbox">
				<img src="../../assets/icon/huatong.svg">
			</div>
			<div class="centerbox">
				<input type="text" placeholder="搜索音乐、歌词、台词">
			</div>
			<div class="headerbox rightbox">
				<img src="../../assets/icon/musicfrequency.svg">
			</div>
		</div>
		<!-- 导航其他 -->
    <div class="mui-contents">
      <!--tabContainer-->
      <div class="tagnav">
        <span v-for='(item, $index) in tagnav' :key="$index" :class="{'on':flag==$index}"  @click="switchs($index)">{{item}} </span>
      </div>
      <!--内容-->
      <mt-tab-container :swipeable="false">
        <keep-alive>
          <router-view @active="activeData"></router-view>
        </keep-alive>
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
	      tabActive: 1,
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
			},
			activeData(val){
				this.tabActive="tab-container"+val;
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
