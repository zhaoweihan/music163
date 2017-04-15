<template>
  <mt-tab-container-item id="tab-container3" data-class="tab-container-3">
    <h2>{{msg}}</h2>
  </mt-tab-container-item>
</template>
<script>
     export default{
        data(){
            return {
                msg:"我是 主播电台"
            }
           
        }
    }
</script>
<style scoped lang="scss" scoped>
	[data-class="tab-container-3"] {
	  display: block !important;
	}

</style>
