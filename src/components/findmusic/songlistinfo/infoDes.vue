<template>
    <div class="infoDescontent">
        <div class="tophalf">
            <div class="close">
                <i class="mui-icon mui-icon-closeempty" @click="closepopup()"></i>
            </div>
            <div class="picbox">
                <img :src="infodesdata.cover|coverSize" alt="歌单封面">
            </div>
            <p class="songlistTitle">{{infodesdata.title}}</p>
        </div>
    
        <div class="bottomhalf">
            <div class="des">
                <span class="desinfo" v-html="desc"></span>
                <span class="tags">标签：
                    <em v-for="(tag,tagIndex) in infodesdata.tags" :key="tagIndex">{{tag}}</em>
                </span>
            </div>
            <div class="saveCover">
                <a :href="infodesdata.cover|coverDownload" :download="infodesdata.cover|coverDownload">保存封面</a>
            </div>
        </div>
    </div>
</template> 

<script>
export default{
    data () {
        return {
            closePopup:false
        }
    },
    props:['infodesdata'],
    computed:{
        desc(){
            if(this.infodesdata.desc){
                return this.infodesdata.desc.split("</b>")[1];
            }
            
        }
    },
    methods: {
        closepopup(){
           this.$emit("closepopup");
        }
    },
    filters: {
        coverSize(value){
            if(value){
                var val=value.split("?param=")[0]
                return val+"?param=180y180";
            }
            
        },
        coverDownload(value){
            if(value){
                // console.log(value.split("http://"))
                var val=value.split("http://")[1]
                return val;
            }
        }
    }
    
}
</script> 

<style lang="scss" scoped>
.infoDescontent {
    height: 100%;
    padding-top: 20px;
    .tophalf {
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid #eee;
        .close {
            height: 40px;
            padding: 0 15px;
            i {
                font-size: 40px;
                color: #fff;
                float: right;
            }
        }
        .picbox {
            text-align: center;
        }
        .songlistTitle {
            color: #fff;
            text-align: center;
            font-size: 15px;
            margin: 20px 0;
        }
    }
    .bottomhalf {
        overflow: auto;
        height: 50%;
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
        .des {
            overflow: auto;
            .desinfo {
                color: #fff;
                font-size: 14px;
            } // 标签
            .tags {
                display: block;
                color: #fff;
                margin-top: 15px;
                em {
                    color: #fff;
                    border: 1px solid #fff;
                    padding: 0 7px;
                    border-radius: 15px;
                    margin: 0 5px;
                    font-size: 12px;
                }
            }
        } // 保存封面
        .saveCover {
            $height: 50px;
            left: 0;
            height: $height;
            line-height: $height;
            width: 100%;
            text-align: center;
            background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
            a {
                color: #fff;
                border: 1px solid #fff;
                padding: 4px 14px;
                border-radius: 15px;
            }
        }
    }
}
</style>    
   