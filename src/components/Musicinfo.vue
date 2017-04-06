<template>
	<div class="musicinfo">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'musicinfo',
		data() {
			return {
				msg: '我是 音乐播放页'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
</style>