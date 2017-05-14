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
		<div class="phonograph" :style="{height:allheight}" >
			<div class="phonograph-record" :class="{pause:!playStatus}">
				<div class="imgbox">
					<img :src="song.album.blurPicUrl">
				</div>
			</div>
			<audio :src="song.mp3Url" id="songAudio"></audio>
		</div>
		<div class="doArea" :style="{height:doAreaComputed}">
			<div class="top">
				<a href="javascript:;">
					<i class="fa fa-heart-o"></i>
				</a>
				<a href="javascript:;">
					<i class="fa fa-download"></i>
				</a>
				<a href="javascript:;">
					<i class="fa fa-comment-o"></i>
				</a>
				<a href="javascript:;">
					<i class="fa fa-ellipsis-h"></i>
				</a>
			</div>
			<div class="progressBar">
				<mt-progress :value="progressVal">
					<div slot="start" class="w5">{{playNowTime}}</div>
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
export default {
	name: 'musicinfo',
	data() {
		return {
			doArea: 150,
			song: {
				album:{
					blurPicUrl:''
				},
				bMusic:{
					playTime:''
				}
			},
			playStatus: false,//判断音乐播放状态 false 关闭 true 播放
			playIcon: playIcon,//播放、暂停按妞icon
			progressVal:0,//当前播放进度条
			progress:null,//动态进度条计时器
			playNowTime:"00:00"//当前播放时间
		}
	},
	methods: {
		getInfo() {
			servers.get('/song/' + this.$route.params.id, result => {
				console.log(result.data[0])
				this.song = result.data[0];
			});
			
		},
		play() {
			const auiodDom=document.getElementById("songAudio");
			if (this.playStatus) {//播放中
				this.playIcon = playIcon;
				auiodDom.pause();
				this.playStatus=false;
				clearInterval(this.progress);
			} else {//暂停中
				this.playIcon = pauseIcon;//切换播放按妞样式
				auiodDom.volume=0.2;
				this.progress=setInterval(()=>{
					// 进度条
					var currentTime=auiodDom.currentTime;
					currentTime=Math.round(currentTime*1000);
					this.progressVal= Math.round(currentTime/this.song.bMusic.playTime*100); 
					//TODO:当前播放时间
				},1000)
				auiodDom.play();
				this.playStatus=true;

			}
			

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
		playtime(value) {
			value=Math.round(value/1000);
			var min = Math.floor(value / 60);
			var sec = value % 60;
			if (min < 10) {
				min = "0" + min;
			}
			if (sec < 10) {
				sec = "0" + sec
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
    0%   { 
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
		border-bottom: 1px solid #ccc;
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
		}
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
			@include animate(whirl 3s linear  infinite);
			&.pause{
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