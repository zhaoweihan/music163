<template>
    <div class="songmenu">
        <div class="songmenu-title">
            歌曲：{{songMenuData.name}}
        </div>
        <div class="menulist">
            <mt-cell title="下一首播放">
                <i slot="icon" class="fa fa-play-circle-o fz20"></i>
            </mt-cell>
            <mt-cell title="收藏到歌单">
                <i slot="icon" class="fa fa-calendar-plus-o fa-fw"></i>
            </mt-cell>
            <mt-cell title="下载">
                <i slot="icon" class="fa fa-cloud-download fa-fw"></i>
            </mt-cell>
            <mt-cell title="评论（874）">
                <i slot="icon" class="fa fa-comment fa-fw"></i>
            </mt-cell>
            <mt-cell :title="'歌手：'+songMenuData.artistsName">
                <i slot="icon" class="fa fa-user-o fa-fw"></i>
            </mt-cell>
            <mt-cell :title="'专辑：'+songMenuData.albumName">
                <i slot="icon" class="fa fa-eercast fa-fw"></i>
            </mt-cell>
            <mt-cell title="查看MV">
                <i slot="icon" class="fa fa-youtube-play fa-fw"></i>
            </mt-cell>
        </div>
    </div>
</template>
<style lang="scss" >
@import '../../../sass/common';
.songmenu {
    .songmenu-title {
        $title-height: 50px;
        height: $title-height;
        line-height: $title-height;
        padding: 0 10px;
        color: #666;
    } //  菜单列表
    .menulist {
        .mint-cell {
            .mint-cell-title{
                @include ellipses;
                white-space:nowrap;  
            }
            i {
                color: $baseColor;
                font-size: 18px;
                vertical-align: middle;
                &.fz20 {
                    font-size: 22px;
                }
            }
        }
    }
}
</style>
<script>
    export default{
        data(){
            return{
               
            }
        },
       props: ['songMenuData'],
    }
</script>