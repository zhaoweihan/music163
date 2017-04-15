<template>
  <mt-tab-container-item id="tab-container2" data-class="tab-container-2">
    <h2>{{msg}}</h2>
  </mt-tab-container-item>
</template>
<script>
    export default{
        data(){
            return{
                msg:"我是 歌单"
            }
            
        }
    }
</script>
<style scoped lang="scss" scoped>
[data-class="tab-container-2"]{
    display:block !important;
}
</style>
