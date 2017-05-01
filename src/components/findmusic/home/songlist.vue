<template>
  <mt-tab-container-item id="tab-container2" data-class="tab-container-2">
    <div class="banner">
        <img src="../../../assets/songlistbanner.png" alt="歌单banner">
    </div>
    <div class="songlist-content">
        <div class="title">
            <a href="javascript:;">全部歌单<i class="fa fa-angle-right fa-fw"></i></a>
            <em>摇滚</em>
            <em>民谣</em>
            <em>华语</em>
        </div>
        <ul>
            <li v-for="songlistItem in 6">
                <a href="javascript:;">
                    <div class="imgbox">
                        <img src="http://p1.music.126.net/AZV6R-vPdBFQU0F7GwSL5g==/109951162918679636.jpg">
                        <span class="author"><i class="fa fa-user-o fa-fw"></i>托你<i class="fa fa-star-o fa-fw"></i></span>
                        <span class="listenNum">100万</span>
                    </div>
                    <div class="songlist-name">[异地恋]熬过去就是一生一世[异地恋]熬过去就是一生一世[异地恋]熬过去就是一生一世[异地恋]熬过去就是一生一世[异地恋]熬过去就是一生一世</div>
                </a>
            </li>
        </ul>
    </div>
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
<style scoped lang="scss">
    @import '../../../sass/common';
    @import '../../../sass/songlist';
</style>
