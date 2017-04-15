<template>
	<div class="musicstart">
		<img src="../assets/music163start.jpg" v-on:load="init"/>
	</div>
</template>

<script>
	import router from '../router';
	export default {
		name: 'musicstart',
		data() {
			return {
				msg: '../src/assets/music163start.jpg'
			}
		},
		methods:{
			init:function(){
				setTimeout(function(){
					router.replace("/bottomnav");
				},1000);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.musicstart{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 100;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>