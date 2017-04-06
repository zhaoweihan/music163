<template>
	<div id="app">
  		<router-view></router-view>
		<div class="bottomNav">
			<router-link to="/homepage"  v-on:click="change" ><i class="iconfont icon-wangyiyunyinlezizhi"></i>发现音乐</router-link>
			<router-link to="/mymusic" v-on:click="change"><i class="iconfont icon-music"></i>我的音乐</router-link>
			<router-link to="/friends" v-on:click="change"><i class="iconfont icon-friend"></i>朋友</router-link>
			<router-link to="/myzone" v-on:click="change"><i class="iconfont icon-user"></i>我的</router-link>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'app',
		computed: { 
			asd() {
				return this.$store.getters.getCount
			}
		},
		methods: {
			change() {
				alert(1)
			}
		}
	} // here ↑
</script>

<style lang="scss">
	@import './sass/common.scss';
	#app {
		$bottomNav-height: 50px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		padding-bottom: $bottomNav-height;
		.bottomNav {
			@include flex;
			position: fixed;
			bottom: 0;
			background: rgba(0, 0, 0, .9);
			width: 100%;
			height: $bottomNav-height;
			max-width: 640px;
			font-size: 0;
			line-height:normal;
			a {
				$color:#ccc;
				@include flex-1;
				padding-top: 4px;
				color: $color;
				text-align: center;
				font-size: 12px;
				i {
					display: block;
					font-size: 26px;
					color: $color;
				}
				&.router-link-active {
						color: #fff;
						i {
							color:#fff;
						}
				}
			}
		}
	}
</style>