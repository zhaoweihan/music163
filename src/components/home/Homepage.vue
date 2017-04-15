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
				<span v-for='(item, $index) in tagnav' :class="{'on':flag==$index}" @click="switchs($index)">{{item}}</span>
			</div>  
			<!--内容-->
			<mt-tab-container v-model="tabActive" :swipeable="false">
				<mt-tab-container-item id="tab-container1" data-class="tab-container-1">
					<!--第一屏内容-->
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
								<div class="imgbox"><img :src="item.cover" /></div>
								<p>{{item.title}}</p>
							</div>

						</div>
					</div>
					<!--独家放送-->
					<div class="exclusiveDelivery">
						<div class="title"><i class="mui-icon mui-icon-navigate"></i><span>独家放送</span><em>更多</em></div>
						<div class="firstfloor">
							<div class="firstfloorBox left">
								<img src="../../assets/djfs/djfs1.png" />
								<p>网易原创歌曲榜 在深沉的汪洋中抬头仰望星空</p>
							</div>
							<div class="firstfloorBox right">
								<img src="../../assets/djfs/djfs2.png" />
								<p>幸田来未全新数字专辑《WFACE~inside~》独家上线！</p>
							</div>
						</div>
						<div class="secondfloor">
							<img src="../../assets/djfs/djfs3.jpg" />
							<p>一周热评 第103期 大唐农药 ，喝完这碗还有一碗</p>
						</div>
					</div>
					<!--最新音乐-->
					<div class="latestMusic recommendSonglist">
						<div class="title"><i class="mui-icon mui-icon-navigate"></i><span>最新音乐</span><em>更多</em></div>
						<div class="songlist">
							<div class="songbox" v-for="(item,index) in latestmusiclist">
								<div class="imgbox"><img :src="item.picUrl" /></div>
								<p>{{item.albumName}}
									<span>{{item.singerName}}</span>
								</p>
							</div>

						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2" data-class="tab-container-2">
					<!--<mt-cell v-for="n in 5" title="tab-container 2" :key="n">{{n}}</mt-cell>-->
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3" data-class="tab-container-3">
					<!--<mt-cell v-for="n in 7" title="tab-container 3" :key="n">{{n}}</mt-cell>-->
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container4" data-class="tab-container-4">
					<div class="ranking-itembox">
						<div class="itembox-title">云音乐官方榜</div>
						<div class="itembox-content">
							 	<ul class="ranking-list">
							 		<li v-for="(item,index) in music163ranklist">
							 			<div class="ranklogo">
							 				<img :src="item.cover"/>
							 				<div class="msk"></div>
							 			</div>
							 			<div class="rightlist">
							 				<p>1.高尚 - 薛之谦</p>
							 				<p>2.大雁 - 马頔</p>
							 				<p>3.Something Just Like - ThenkYou3.Something Just Like - ThenkYou</p>
							 			</div>
							 		</li>
							 	</ul>
						</div>
					</div>
					
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
	  name: 'homepage',
	  data() {
	    return {
	      nowdate: new Date().getDate(),
	      flag: 0,
	      tagnav: ['个性推荐', '歌单', '主播电台', '排行榜'],
	      tabActive: "tab-container1",
	      bannerlist: [],
	      recommendSonglist: [],
	      latestmusiclist: [],
	      music163ranklist: []
	    }
	  },
	  methods: {
	    switchs(index) {
	      this.flag = index;
	      this.tabActive = "tab-container" + (index + 1);
	      if (index == 3) this.ranking();
	    },
	    getBannerList() {
	      this.$http.get("http://192.168.1.106:3000/banner_list")
	        .then((data) => {
	          var result = data.body;
	          if (result.code == 200) {
	            this.bannerlist = result.data;
	          }
	          // 响应成功回调
	        }, (error) => {
	          // 响应错误回调
	          console.log("e:" + error);
	        })
	    },
	    recommendSong() {
	      this.$http.get("http://192.168.1.106:3000/recommendList")
	        .then((data) => {
	          var result = data.body;
	          if (result.code == 200) {
	            for (let i = 0; i < result.data.length; i++) {
	              result.data[i].cover = result.data[i].cover.replace("?param=140y140", "");
	            }
	            this.recommendSonglist = result.data;
	          }
	          // 响应成功回调
	        }, (error) => {
	          // 响应错误回调
	          console.log("e:" + error);
	        })

	    },
	    latestMusicList() {
	      this.$http.get("http://192.168.1.106:3000/latestMusicList")
	        .then((data) => {
	          var result = data.body;
	          if (result.code == 200) {
	            this.latestmusiclist = result.data;
	          }
	          // 响应成功回调
	        }, (error) => {
	          // 响应错误回调
	          console.log("e:" + error);
	        })

	    },
	    ranking() {
	      this.$http.get("http://192.168.1.106:3000/top_list")
	        .then((data) => {
	          var result = data.body;
	          if (result.code == 200) {
	            this.music163ranklist = result.data[0].items;
							this.music163ranklist.forEach((item,index)=>{
								item.cover=item.cover.replace("40y40","120y120");
							})
							//TODO 排行榜 歌曲列表
	          }
	          // 响应成功回调
	        }, (error) => {
	          // 响应错误回调
	          console.log("e:" + error);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../../sass/homepage.scss";
</style>