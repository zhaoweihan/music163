<template>
	<div id="app">
  		<router-view></router-view>
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
		
	} // here ↑
</script>

<style lang="scss">
	@import './sass/common.scss';
</style>