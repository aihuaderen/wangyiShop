<template>
  <div id="WorthBuyWrap">
    <div class="top-bar">
      <router-link to="msite">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
      </router-link>
      <div class="title"><span>值得买</span></div>
      <div class="right">
        <i @click="handleClickSkip" class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="swiperTab-wrap">
      <div class="swiperTab-title">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <span>严选好物 用心生活</span>
      </div>
      <div class="swiperWarrper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item in navList" :key="item.id">
                <a class="link-to-pro">
                    <div class="pro-container">
                        <img :src="item.picUrl" />
                    </div>
                    <div class="text">
                        <span class="text-title">{{item.mainTitle}}</span><br>
                        <span class="text-desc">{{item.viceTitle}}</span>
                    </div>
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      
    </div>
    <!-- 瀑布流布局 -->
    <water-fall></water-fall>
  </div>
</template>

<script type="text/ecmascript-6">
/* 引入lodash */
import _ from "lodash";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import WaterFall from '@/components/WaterFall/waterFall.vue';
  export default {
    components: {WaterFall},
    data(){
      return {
        navList: [],
        swiperOptions: {
            // direction: 'horizontal', // 水平切换选项
            slidesPerView: 4,//一行显示3个
            slidesPerColumn: 2, //行数
            slidesPerColumnFill:'row',
            // loop: true, // 循环模式选项
            autoplay: { // 自动轮播
            delay: 4000,
            disableOnInteraction: false, // 用户操作后是否停止自动轮播
            }, 
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            // navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
            // },
        }
      }
    },
    async mounted(){
      let result = await this.$API.getBuyBannerList();
      this.navList = result.data.navList ? result.data.navList : [];
    },
    computed: {
      newNavList(){
        return _.chunk(this.navList, 8);
      }
    },
    methods: {
      //搜索获取焦点
      handleClickSkip(){
        //跳转页面
        this.$router.push({
          path: 'search',
          query: {from: 'topicId'}
        });

      }
    },
    watch: {
      
    }
  }
</script>

<style lang="less" scoped>
#WorthBuyWrap{
    width : 100%;
    background-color : #eee;
    overflow : hidden;
    .top-bar{
        display : flex;
        justify-content : space-between;
        width : 100%;
        height : 100px;
        text-align : center;
        line-height : 100px;
        padding : 0 24px;
        box-sizing : border-box;
        font-size : 36px;
        .home{    
            >i{
                font-size : 48px;
            }
        }
        .right{
            >i {
                font-size : 50px;
                &:first-child{
                margin-right : 30px;
                }
            }
        }
    }
    .swiperTab-wrap{
        width : 100%;
        padding : 0 24px;
        box-sizing : border-box;
        background : url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png') no-repeat;
        background-size : cover;
        // overflow : hidden;
         .swiperTab-title{
            width : 100%;
            display : flex;
            font-size : 30px;
            color : #fff;
            padding-top : 68px;
            margin-bottom : 24px;
             >img{   
                width : 130px;
                height : 68px;
             }
            span {
                margin : 28px 0 0 5px;
            }  
        }
       
        .swiperWarrper{
            width : 100%;
            height : 520px;
            background-color : #fff;
            border-radius : 10px;
            // padding-bottom : 70px;
            /deep/.swiper-container{
                height: 510px !important;
                /deep/.swiper-wrapper{
                    height: 220px !important;
                    .link-to-pro{
                        width : 200px;
                        // background: black;
                        display: inline-block;
                        text-align : center;
                        padding-top : 36px;
                        .pro-container{
                            width : 100%;
                            height : 120px;
                            >img {
                                width : 120px;
                                height : 120px;
                                display : inline;
                            }
                        }
                        .text{
                            width : 100%;
                            height : 100%;
                            line-height : 35px;
                            padding-top : 8px;
                            .text-title{
                                font-size : 28px;
                                font-weight : bold;
                                color : #333;
                            }
                            .text-desc{
                                font-size : 24px;
                                color : #999;
                            } 
                        }
                    }
                }
                .swiper-pagination-bullet{
                  width: 50px;
                  height: 3px;
                  display: inline-block;
                  border-radius: 0px;
                  background: black;
                }
            }
            
        }
           
        // }
        // .swiper-pagination{
        //     height: 50px;
        //     background: black;
        // }
        // .swiper-container {
        //     width : 100%;
        //     height : 100%;
        //     background-color : #fff;
        //     border-radius : 10px;
        //     padding-bottom : 70px;
        //     .swiper-wrapper {
        //         width : 100%;
        //         height : 100%;
        //         .swiper-slide {
        //         display : flex;
        //         justify-content : center;
        //         align-items : flex-start;
        //         flex-wrap : wrap;
        //         height : 100%;
        //         .link-to-pro{
        //             width : 25%;
        //             text-align : center;
        //             padding-top : 36px;
        //             .pro-container{
        //                 width : 100%;
        //                 height : 120px;
        //                 >img {
        //                     width : 120px;
        //                     height : 120px;
        //                     display : inline;
        //                 }
            
        //             }
        //             .text{
        //                 width : 100%;
        //                 height : 100%;
        //                 line-height : 35px;
        //                 padding-top : 8px;
        //                 .text-title{
        //                     font-size : 28px;
        //                     font-weight : bold;
        //                     color : #333;
        //                 }
        //                 .text-desc{
        //                     font-size : 24px;
        //                     color : #999;
        //                 }
                            
        //             }
            
        //         }
        
        //         }
        //     }
        // }
      
    }
}
</style>
