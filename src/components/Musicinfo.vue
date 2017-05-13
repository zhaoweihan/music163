<template>
	<div class="musicinfo">
		<!--头部-->
		<mt-header :title="song.name">
			<router-link to="/" slot="left">
				<mt-button icon="back" style="color:#fff;"></mt-button>
			</router-link>
			<mt-button slot="right">
				<i class="fa fa-share-square-o share"></i>
			</mt-button>
		</mt-header>
	
		<!--播放唱片-->
		<div class="phonograph" :style="{height:allheight}">
			<div class="phonograph-record">
				<div class="imgbox">
					<img :src="song.album.blurPicUrl">
				</div>
			</div>
			<video :src="song.mp3Url"></video>
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
				<mt-progress :value="60">
					<div slot="start" class="w5">00:00</div>
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
					<i class="fa fa-play-circle-o"></i>
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
import servers from '../lib/servers'
export default {
	name: 'musicinfo',
	data() {
		return {
			doArea: 150,
			song:{}
		}
	},
	methods:{
		getInfo(){
			servers.get('/song/'+this.$route.params.id,result=>{
				console.log(result.data[0])
				this.song=result.data[0];
			});
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
	filters:{
		playtime(value){
			var min=Math.floor(value/1000/60);
			var sec=Math.round((value/1000)%60);
			if(min<10){
				min="0"+min;
			}
			if(sec<10){
				sec="0"+sec
			}
			return min+':'+sec;
		}
	},
	created(){
		this.getInfo();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../sass/common';
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
		video{
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
			.w5{
				margin: 0 5px;
			}
			.mt-progress-progress{
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
				&:nth-of-type(3){
					i{
						font-size: 50px;
					}
				}
				&:nth-of-type(2),&:nth-of-type(4){
					i{
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