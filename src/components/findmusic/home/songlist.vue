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
            <li v-for="(item, index) in allsonglist" :key="item.id" :data-id="item.id">
                    <router-link :to="'/bottomnav/songlistinfo/'+item.id">
                    <div class="imgbox">
                        <img :src="item.picUrl">
                        <span class="author"><i class="fa fa-user-o fa-fw"></i>{{item.auther}}<i class="fa fa-star-o fa-fw star" v-if="item.isStar==1"></i></span>
                        <span class="listenNum">{{item.listenNum}}</span>
                        <span class="mask"></span>      
                    </div>
                    <div class="songlist-name">{{item.listName}}</div>
                </router-link>
            </li>
        </ul>
    </div>
  </mt-tab-container-item>
</template>
<script>
import servers from '../../../lib/servers.js'
    export default{
        data(){
            return{
                msg:"我是 歌单",
                allsonglist:[]
            }
        },
        methods:{
            allsonglistInit(){
                const self=this;
                servers.get('/allsonglist',function(result){
                    result.data.forEach(function(element,index) {
                        element.picUrl+='?param=210y210';
                    });
                    self.allsonglist=result.data;
                });
            }
        },
        created(){
            this.allsonglistInit();
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../sass/common';
    @import '../../../sass/songlist';
</style>
