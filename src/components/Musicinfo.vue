<template>
	<div class="musicinfo">
		<!--头部-->
		<mt-header :title="song.name">
			<router-link to="/" slot="left">
				<mt-button icon="back" style="color:#fff;"></mt-button>
			</router-link>
			<mt-button slot="right">
				<i class="mui-icon mui-icon-upload share"></i>
			</mt-button>
		</mt-header>
	
		<!--播放唱片-->
		<div class="phonograph" :style="{height:allheight}">
			<!--封面-->
			<div class="phonograph-record" :class="{pause:!playStatus}" @click="isLyr()" v-show="!isShowLyr">
				<div class="imgbox">
					<img :src="song.album.blurPicUrl|picSize">
				</div>
			</div>
			<!--歌词-->
			<div class="lyricsBox" v-show="isShowLyr" @click="isLyr()">
				<!--音量调节-->
				<mt-range v-model="currentVolume" :min="0" :max="100" >
					<div slot="start" class="bef">
						<i class="fa fa-fw" :class="{'fa-volume-off':currentVolume==0,'fa-volume-down':currentVolume<=50&&currentVolume>0,'fa-volume-up':currentVolume>50}" @click.stop="mute()"></i>
						{{currentVolume}}
					</div>
  					<div slot="end"  class="aft">100</div>
				</mt-range>
			</div>
			<audio :src="song.mp3Url" id="songAudio"></audio>
		</div>
		<div class="doArea" :style="{height:doAreaComputed}">
			<div class="top">
				<!--喜欢-->
				<a href="javascript:;">
					<i class="fa" :class="{'fa-heart':islike,'fa-heart-o':!islike,'heartred':islike}" @click="isLike()"></i>
				</a>
				<!--下载-->
				<a href="javascript:;">
					<i class="fa fa-download"></i>
				</a>
				<!--评论-->
				<a href="javascript:;">
					<i class="fa fa-comment-o"></i>
				</a>
				<!--其他-->
				<a href="javascript:;">
					<i class="fa fa-ellipsis-h"></i>
				</a>
			</div>
			<div class="progressBar">
				<mt-progress :value="progressVal">
					<div slot="start" class="w5">{{currentTime|countCurTime}}</div>
					<div slot="end" class="w5">{{song.bMusic.playTime|playtime}}</div>
				</mt-progress>
			</div>
			<div class="playArea">
				<a href="javascript:;">
					<i class="	mui-icon mui-icon-loop"></i>
				</a>
				<a href="javascript:;">
					<i class="fa fa-step-backward"></i>
				</a>
				<a href="javascript:;">
					<img :src="playIcon" @click="play()">
				</a>
				<a href="javascript:;">
					<i class="fa fa-step-forward"></i>
				</a>
				<a href="javascript:;">
					<i class="mui-icon mui-icon-list"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import servers from '../lib/servers';
import playIcon from '../assets/icon/play.svg';
import pauseIcon from '../assets/icon/pause.svg';
import { Toast } from 'mint-ui';
export default {
	name: 'musicinfo',
	data() {
		return {
			doArea: 150,
			song: {
				album: {
					blurPicUrl: ''
				},
				bMusic: {
					playTime: ''
				}
			},
			playStatus: false,//判断音乐播放状态 false 关闭 true 播放
			playIcon: playIcon,//播放、暂停按妞icon
			progressVal: 0,//当前播放进度条
			progress: null,//动态进度条计时器
			currentTime: 0,//当前播放时间
			islike: false,//是否添加到了喜欢的音乐列表中
			isShowLyr: false,//歌词显示状态
			currentVolume:20//当前音量
		}
	},
	methods: {
		getInfo() {
			servers.get('/song/' + this.$route.params.id, result => {
				// console.log(result.data[0])
				this.song = result.data[0];
				// 初始化音量
				const auiodDom = document.getElementById("songAudio");
				auiodDom.volume =this.currentVolume/100;
			});

		},
		// 播放或暂停
		play() {
			const auiodDom = document.getElementById("songAudio");
			if (this.playStatus) {//播放中
				this.playIcon = playIcon;
				auiodDom.pause();
				this.playStatus = false;
				clearInterval(this.progress);
			} else {//暂停中
				this.playIcon = pauseIcon;//切换播放按妞样式
				this.progress = setInterval(() => {
					// 进度条
					var currentTime;
					this.currentTime = auiodDom.currentTime;
					currentTime = Math.round(this.currentTime * 1000);
					this.progressVal = Math.round(currentTime / this.song.bMusic.playTime * 100);
				}, 1000)
				auiodDom.play();
				this.playStatus = true;
			}
		},
		// 喜欢
		isLike() {
			if (this.islike) {
				this.islike = false
				Toast('已取消喜欢');
			} else {
				this.islike = true;
				Toast('已添加到我喜欢的音乐');
			}
		},
		//显示歌词
		isLyr() {
			if (this.isShowLyr) {
				this.isShowLyr = false;
			} else {
				this.isShowLyr = true;
			}
		},
		// 静音或放开静音
		mute(){
			if(this.currentVolume){//静音操作
				// 如果是静音操作，在静音前先把之前的音量值保存起来
				sessionStorage.setItem("vol",this.currentVolume);
				this.currentVolume=0;
			}else{//放开静音
				if(sessionStorage.getItem('vol')){//若之前保存的值存在，则还原成之前保存的值
					this.currentVolume=Number(sessionStorage.getItem('vol'));
				}else{//如果保存的值丢失,则默认改为20
						this.currentVolume=20;
				}
			}
			
		}
	},
	watch: {
		currentVolume(n,o){
			const auiodDom=document.getElementById("songAudio");
			auiodDom.volume=n/100;
		}
	},
	computed: {
		allheight() {
			return window.innerHeight - 40 - this.doArea + "px";
		},
		doAreaComputed() {
			return this.doArea + "px";
		}
	},
	filters: {
		// 转换歌曲总时间
		playtime(value) {
			value = Math.ceil(value / 1000);
			var min = Math.floor(value / 60);
			var sec = value % 60;
			if (min < 10) {
				min = "0" + min;
			}
			if (sec < 10) {
				sec = "0" + sec
			}
			return min + ':' + sec;
		},
		// 转化歌曲封面尺寸
		picSize(value) {
			return value + "?param=182y182";
		},
		// 转化当前播放时间为字符串
		countCurTime(value) {
			value = Math.ceil(Number(value));
			var min = Math.floor(value / 60);;
			var sec = value % 60;
			if (sec < 10) {
				sec = "0" + sec
			}
			if (min < 10) {
				min = "0" + min;
			}
			return min + ':' + sec;
		}
	},
	created() {
		this.getInfo();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../sass/common';

@include keyframes(whirl) {
	0% {
		@include transform(rotate(0deg))
	}
	100% {
		@include transform(rotate(360deg))
	}
}

.musicinfo {
	background-image: linear-gradient(to top, #000000 0%, #434343 100%);
	header {
		background: transparent !important;
		.mintui-back {
			color: #fff;
		}
		.share {
			font-size: 22px;
		}
	} // 唱片部分
	.phonograph {
		width: 100%;
		height: 100%;
		@include flex;
		justify-content: center;
		align-items: center;
		video {
			display: none;
		} // 封面部分
		.phonograph-record {
			$record-height: 280px;
			@include flex;
			justify-content: center;
			align-items: center;
			width: $record-height;
			height: $record-height;
			overflow: hidden;
			border-radius: 50%;
			background: url(../assets/coverall.png) no-repeat;
			background-size: 532px 2093px;
			background-position: -200px -815px;
			@include animate(whirl 5s linear infinite);
			&.pause {
				@include animation-play-state(paused);
			}
			.imgbox {
				$imgbox: 182px;
				width: $imgbox;
				height: $imgbox;
				margin-left: 1px;
				margin-top: 3px;
				border-radius: 50%;
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		} // 歌词部分
		.lyricsBox {
			width: 90%;
			margin: 0 auto;
			height: 100%;
			padding: 12px 0;
			// 音量调节
			.mt-range{
				.bef,.aft{
					color: #fff;
					display: inline;
					margin: 0 5px;
					i{
						font-size: 24px;
						vertical-align: middle;
					}
				}
			}
		}
	} // 操作区域
	.doArea {
		width: 100%;
		$top-height: 40px;

		.top {
			height: $top-height;
			width: 90%;
			margin: 0 auto;
			@include flex;
			a {
				@include flex-1;
				text-align: center;
				line-height: $top-height;
				i {
					color: #fff;
					font-size: 22px;
					&.heartred {
						color: $baseColor;
					}
				}
				&:last-of-type i {
					@include transform(rotate(90deg));
				}
			}
		}
		.progressBar {
			width: 90%;
			margin: 0 auto;
			height: $top-height;
			color: #fff;
			.w5 {
				margin: 0 5px;
			}
			.mt-progress-progress {
				background-color: $baseColor;
			}
		}
		.playArea {
			$playarea-height: 70px;
			@include flex;
			height: $playarea-height;
			a {
				@include flex-1;
				text-align: center;
				line-height: $playarea-height;
				img {
					width: 40px;
					height: 40px;
					margin-top: 15px;
				}
				&:nth-of-type(3) {
					i {
						font-size: 50px;
					}
				}
				&:nth-of-type(2),
				&:nth-of-type(4) {
					i {
						font-size: 30px;
					}
				}
				i {
					color: #fff;
					font-size: 22px;
				}
			}
		}
	}
}
</style>