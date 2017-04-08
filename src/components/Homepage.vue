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
					<mt-swipe :auto="0" :style="{height:bannerHeight +'px'}" :prevent="true" :defaultIndex="7">
						<mt-swipe-item v-for="index in 8" :key="index">
							<a href="javascript:;"><img :src="'http://192.168.1.106:8020/music163/src/assets/homebanner/banner'+index+'.jpg'" /></a>
						</mt-swipe-item>
					</mt-swipe>
					<!--icon导航-->
					<div class="iconNav">
						<div class="icon-li">
							<i class="iconfont icon-fm"></i>
							<p>私人FM</p>
						</div>
						<div class="icon-li">
							<i class="redBorder">8</i>
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
								<img src="../assets/djfs/djfs1.png" />
								<p>网易原创歌曲榜 在深沉的汪洋中抬头仰望星空</p>
							</div>
							<div class="firstfloorBox right">
								<img src="../assets/djfs/djfs2.png" />
								<p>幸田来未全新数字专辑《WFACE~inside~》独家上线！</p>
							</div>
						</div>
						<div class="secondfloor">
							<img src="../assets/djfs/djfs3.jpg" />
							<p>一周热评 第103期 大唐农药 ，喝完这碗还有一碗</p>
						</div>
					</div>
					<!--最新音乐-->
					<div class="latestMusic recommendSonglist">
						<div class="title"><i class="mui-icon mui-icon-navigate"></i><span>最新音乐</span><em>更多</em></div>
						<div class="songlist">
							<div class="songbox" v-for="index in 6">
								<div class="imgbox"><img :src="'http://192.168.1.106:8020/music163/src/assets/latestMusic/'+index+'.jpg'" /></div>
								<p v-if="index%2==0">友谊的小船
									<span>Linkin Park</span>
								</p>
								<p v-if="index%2!=0">One More Light
									<span>张敬轩/王菀之</span>
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
							 		<li>
							 			<div class="ranklogo">
							 				<img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=120y120"/>
							 				<div class="msk"></div>
							 			</div>
							 			<div class="rightlist">
							 				<p>1.高尚 - 薛之谦</p>
							 				<p>2.大雁 - 马頔</p>
							 				<p>3.Something Just Like - ThenkYou3.Something Just Like - ThenkYou</p>
							 			</div>
							 		</li>
							 		<li>
							 			<div class="ranklogo">
							 				<img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=120y120"/>
							 				<div class="msk"></div>
							 			</div>
							 			<div class="rightlist">
							 				<p>1.高尚 - 薛之谦</p>
							 				<p>2.大雁 - 马頔</p>
							 				<p>3.Something Just Like - ThenkYou3.Something Just Like - ThenkYou</p>
							 			</div>
							 		</li>
							 		<li>
							 			<div class="ranklogo">
							 				<img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=120y120"/>
							 				<div class="msk"></div>
							 			</div>
							 			<div class="rightlist">
							 				<p>1.高尚 - 薛之谦</p>
							 				<p>2.大雁 - 马頔</p>
							 				<p>3.Something Just Like - ThenkYou3.Something Just Like - ThenkYou</p>
							 			</div>
							 		</li>
							 		<li>
							 			<div class="ranklogo">
							 				<img src="http://p4.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=120y120"/>
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
	      flag: 0,
	      tagnav: ['个性推荐', '歌单', '主播电台', '排行榜'],
	      tabActive: "tab-container1",
		  recommendSonglist:[]
	    }
	  },
	  methods: {
	    switchs(index) {
	      this.flag = index;
	      this.tabActive = "tab-container" + (index + 1);
	    },
	    getlist() {
	      this.$http.get("http://192.168.1.106:3000/recommendLst")
	        .then((data) => {
	          console.log(data.body);
			  var result=data.body;
			  if(result.code==200){
				 // this.recommendSonglist=JSON.stringify(result.data);
				  this.recommendSonglist=result.data;
			  }
	          // 响应成功回调
	        }, (error) => {
	          // 响应错误回调
			 console.log("e:"+error);
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
	    this.getlist();
	  }
	}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../sass/homepage.scss";
</style>