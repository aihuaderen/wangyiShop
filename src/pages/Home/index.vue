<template>
  <div class="container">
    <div class="bal">
      <!-- 头部搜索 -->
      <div class="hesd">
        <div class="hesdLine">
          <div class="item">
            <img class="logo" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" />
          </div>
          <div class="search" @click="toSearch">
            <i class="icon iconfont icon-sousuo"></i>
            <span class="placeholder">搜索商品, 共50973款好物</span>
          </div>
          <router-link class="loginBtn" to="/login">
            <span class="txt">登录</span>
          </router-link>
        </div>
      </div>

      <!-- 导航栏 -->
      <div class="navScroll">
        <ul>
          <li
            class="navItem"
            :class="{ active: navIndex === -1 }"
            @click="scrollNavIndex(-1)"
          >
            <span>推荐</span>
          </li>
          <li
            class="navItem"
            :class="{ active: navIndex === index }"
            @click="scrollNavIndex(index)"
            v-for="(navList, index) in navLists"
            :key="navList.id"
          >
            <span>{{ navList.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="center">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(bannerItem, index) in banner" :key="index">
          <img :src="bannerItem.picUrl" style="width: 100%; height:100%; " />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 回到顶部 -->
    <transition name="fade">
      <div class="goTop" v-show="isShowGoTop" @click="handleGoTop"></div>
    </transition>

    <!-- 30天退货 -->
    <div class="safetyList">
      <ul>
        <li class="list" v-for="(safetyItm,index) in safety" :key="index">
          <!-- <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong" 
          :style='background: url("safetyItm.icon")'></i> -->
          <img :src="safetyItm.icon" alt="">
          <span class="txt">{{safetyItm.desc}}</span>
        </li>
      </ul>
    </div>

    <!-- 新品首发 -->
    <div class="newList">
      <div class="list" v-for="(kingKongList,index) in newProduct.kingKongList" :key="index">
        <a>
          <div class="imgList">
            <img :src="kingKongList.picUrl">
          </div>
          <div class="txt">{{kingKongList.text}}</div>
        </a>
      </div>
    <!--   <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div>
      <div class="list">
        <a>
          <div class="imgList">
            <img src="">
          </div>
          <div class="txt">aaaa</div>
        </a>
      </div> -->
    </div>

    <!-- 3个小轮播 -->
    <div class="threeImg">
        <div v-if="threeBanner.length">
          <div class="bigImg">
            <a href="">
              <img :src="threeBanner[0].cells[0].picUrl">
            </a>
          </div>
          <div class="smallImg" >
            <a href="">
              <img :src="threeBanner[1].cells[0].picUrl">
            </a>
            <a href="">
              <img :src="threeBanner[1].cells[1].picUrl">
            </a>
          </div>
        </div>
    </div>

    <!-- 新人专享礼 -->
    <div class="newGiftBagList">

      <div class="newGiftBag">
        <div class="newGiftBagItem">
          <span>- 新人专享礼 -</span>
        </div>
        <!-- 下部 -->
        <div class="bottomBox">
          <!-- 立即领取 -->
          <div class="getList">
            <div class="newGet">
              <div class="newPerson">新人专享礼包</div>
              <div class="newImg">
                <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png">
              </div>
            </div>
          <!-- 福利右 -->
            <div class="rightList">
               <!-- 福利 -->
              <div class="welfareList">
                <div class="welfareItem">
                  <div class="txt1">福利社</div>
                  <div class="txt2">今日特价</div>
                </div>
                <div class="imgList">
                  <div class="imgItem">
                    <img src="https://yanxuan-item.nosdn.127.net/54bc2e711823f1325fe77d0b82a62419.png">
                  </div>
                  <div class="price">
                    <div class="discounts">¥109</div>
                    <div class="original">¥138</div>
                  </div>
                </div>
              </div>
              <!-- 拼团 -->
              <div class="welfareList">
                <div class="welfareItem">
                  <div class="txt1">新人拼团</div>
                  <div class="txt2">1元起包邮</div>
                </div>
                <div class="imgList">
                  <div class="imgItem">
                    <img src="//yanxuan-item.nosdn.127.net/030ae228148ba331323767def59de6d0.png?">
                  </div>
                  <div class="price">
                    <div class="discounts">¥139</div>
                    <div class="original">¥199</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>

    <!-- 热销榜 -->
    <div class="hotSale">
      <div class="PublishHead">
        <div class="head">
          <span>类目热销榜</span>
        </div>
        <!-- 两种大图 -->
        <div class="content">
          <div class="line1">
            <div class="itemBig1">
              <div class="name">
                <span class="txt">热销榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan-item.nosdn.127.net/d3995146d91bb8d75f39f397da78caa7.png?quality=75&type=webp&imageView&thumbnail=200x200">
              </div>
            </div>
            <div class="itemBig2">
              <div class="name">
                <span class="txt">好评榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan-item.nosdn.127.net/bb7450ac3c152ea389a20e53fcdb8cd8.png?quality=75&type=webp&imageView&thumbnail=200x200">
              </div>
            </div>
          </div>
          <!-- 小图分类 -->
          <div class="line2">
            <ul>
              <li class="item" v-for="(hotSaleItem,index) in hotSale" :key="index">
                <div class="name">
                  <span class="txt">{{hotSaleItem.categoryName}}</span>
                  <img :src="hotSaleItem.picUrl">
                </div>
              </li>
         <!--      <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li>
              <li class="item">
                <div class="name">
                  <span class="txt">哈哈哈哈</span>
                  <img>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 超值专区 -->
    <div class="overflowPrefecture">
      <div class="list" v-for="(specialZoneItem,index) in specialZone" :key="index">
        <div class="overflow">
          <span class="title">{{specialZoneItem.styleItem.title}}</span>
          <span class="desc">{{specialZoneItem.styleItem.desc}}</span>
        </div>
        <div class="choiceness">
          <img :src="specialZoneItem.styleItem.picUrlList[0]">
          <img :src="specialZoneItem.styleItem.picUrlList[1]">
        </div>
      </div>
      <!-- <div class="list">
        <div class="overflow">
          <span class="title">哈哈哈哈</span>
          <span class="desc">哈哈哈哈哈</span>
        </div>
        <div class="choiceness">
          <img>
          <img>
        </div>
      </div> -->
    </div>

    <!-- 底部 -->
    <div class="footList">
      <div class="ftWrap">
        <div class="download">
          <a href="" class="a1">下载APP</a>
          <a href="">电脑版</a>
        </div>
        <div class="phone">
          <p>网易公司版权所有 © 1997-2021</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { mapState, mapGetters } from "vuex";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Vue from 'vue'
// 声明使用/安装插件 ==> 就能得到内部提供的一些特性(新的组件)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


export default {
  name: "Home",
  data() {
    return {
      //轮播图配置数据
      swiperOptions: {
        // direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: { // 自动轮播
          delay: 4000,
          disableOnInteraction: false, // 用户操作后是否停止自动轮播
        }, 
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      },

      //标识回到顶部的按钮是否显示
      isShowGoTop:false,  


      pagename: '/', //当前组件路径
      navIndex: -1, //导航点击索引
    };
  },

  mounted() {
    //将回调延迟到下次 DOM 更新循环之后执行。
    this.$nextTick(() => {
      //创建BScroll实例对象
      new BetterScroll(".navScroll", {
        scrollX: true,
        probeType: 2,
        click: true,
      });
    });

    this.$store.dispatch("navList");
    this.$store.dispatch("home");

    //在mounted()方法里监听mousewheel
    window.addEventListener('scroll',this.handleScrollGoTop,false)
  },
  methods: {
    //导航栏点击事件
    scrollNavIndex(index) {
      this.navIndex = index;
    },

    //滚轮滑动事件处理
    handleScrollGoTop(){
      //获取全局的滚动距离
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let browserHeight = window.outerHeight; //窗口高度
      //如果滚动距离大于我的窗口高度,就让我的回到顶部按钮出现
      this.isShowGoTop = this.scrollTop >= browserHeight ? true : false;
    },

    //处理回到顶部
    handleGoTop(){
      //获取我的滚动距离
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //设置一个滚动总时长1秒
      let totalTime = 1000;
      //滚动总时长除以17ms,可以得出移动了多少次
      let totalCount = totalTime / 17;
      //滚动距离除以移动次数,可以得出每次移动的距离
      let perDistanceMove =  scrollTop / totalCount
      //设置一个定时器,每17ms执行一次向上移动
      this.interId = setInterval(() => {
        //滚动距离减移动距离,相当于每17ms向上移动一些
        document.documentElement.scrollTop -= perDistanceMove
        //判断回到顶部后,关掉定时器
        if(parseInt(document.documentElement.scrollTop) <= 0) {
          clearInterval(this.interId)
        }
      }, 17);
     
    },

    //跳转到搜索页面
    toSearch(){
      this.$router.push({ path: `/search`})

      localStorage.setItem('search_push_key', JSON.stringify(this.pagename))
    }

  },
  computed: {
    //导航栏
    ...mapState({
      navLists: (state) => state.home.navList,
    }),

    //轮播
    ...mapGetters(["banner","safety","newProduct","threeBanner","welfareList","hotSale","specialZone"]),
  },
  
};
</script>

<style lang="less" scope>

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bal {
  width: 375px;
  position: fixed;
  top: 0;
  z-index: 3;
  background: #fff;
}

//  头部搜索
.hesd {
  width: 100%;
  height: 45px;
  //background: burlywood;
  padding: 8px 15px;
  box-sizing: border-box;
  .hesdLine {
    display: flex;
    .item {
      line-height: 45px;
      .logo {
        width: 70px;
        height: 20px;
        //display: block;
      }
    }
    .search {
      width: 221px;
      height: 28px;
      background: #ededed;
      margin: 0 10px;
      border-radius: 5px;

      .icon {
        margin-left: 20px;
        width: 15px;
        height: 15px;
      }
      .placeholder {
        color: #666;
        font-size: 14px;
        line-height: 28px;
      }
    }
    .loginBtn {
      margin-top: 5px;

      .txt {
        width: 37px;
        height: 20px;
        border: 1px solid #dd1a21;
        color: #dd1a21;
        display: block;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        font-size: 12px;
      }
    }
  }
}

//  导航栏
.navScroll {
  width: 100%;
  height: 30px;
  //background: cornflowerblue;
  // display: flex;
  overflow: hidden;
  font-size: 14px;
  line-height: 30px;
  ul {
    width: 670px;
    margin: 0 15px;
    // white-space: nowrap;
    .navItem {
      display: flex;
      //position: relative;
      white-space: nowrap;
      display: inline-block;
      flex-shrink: 0; /*防止被压缩*/
      height: 100%;
      span {
        display: block;
        //position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        padding: 0 10px;
        height: 25px;
      }
      &.active {
        color: #dd1a21;
        border-bottom: 1px solid #dd1a21;
        box-sizing: border-box;
      }
    }
  }
}

//轮播图
.center {
  margin-top: 75px;
  img {
    display: block; //图片底部留白
  }
}

//回到顶部
.goTop{
  width: 40px;
  height: 40px;
  position: fixed;  //固定定位
  right: 20px;
  bottom: 55px;
  z-index: 5;
  background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png?imageView&type=webp');
  background-size: cover;
  
}
//动画样式
.fade-enter {
    opacity: 0;
  }

.fade-enter-active {
    transform: opacity 3s;
  }
.fade-leave-to {
    opacity: 0;
  }
.fade-leave-active {
    transition: opacity 3s;
  }    

//30天退货
.safetyList{
  width: 100%;
  height: 36px;
  background: #fff;
  padding: 0 8px;
  box-sizing: border-box;
  ul{
    display: flex;
    .list{
      display: flex;
      line-height: 36px;
      margin: 0 10px;
      img{
       // height: 100%;
        //line-height: 36psx;
        color: #dd1a21;
        font-weight: 600;
        width: 16px;
        height: 16px;
        margin-right: 5px;
        margin-top:10px ;
      }
      span{
        display: flex;
        font-size: 12px;
      }
      
    }
  }
}  

//新品首发
.newList{
  width: 100%;
  height: 190px;
  background: #fff;
  // padding: 0 0 10px 15px;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  box-sizing: border-box;
  display: flex; 
  flex-flow: row wrap; //换行
  align-content: flex-start;//默认从起点对齐
  .list{
    display: flex;
    flex: 0 0 20%; //等份分
    width: 100%;
    margin-bottom: 10px;
    a{
      .imgList{
        display: flex;
        width: 55px;
        height: 55px;
        //background: chocolate;
        border-radius:30% ;
        img{
          width: 55px;
          height: 55px;
        }
      }
      .txt{
        width:55px;
        height: 17px;
       // background: chartreuse;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        margin: 5px 0 0 ;
      }
    }
  }
}

//3个小轮播
.threeImg{
  width: 100%;
  height: 270px;
  //background: cornflowerblue;
  .bigImg{
    height: 160px;
    //background: crimson;
    a{
      display: block;
      //margin: 0 10px;
      box-sizing: border-box;
      img{
        width: 100%;
        height: 160px;
        background: #fff;
      }
    }
  }
  .smallImg{
    //width: 100%;
    height:110px ;
    display: flex;
    margin: 10px 10px;
    justify-content: space-between;
    a{
      width: 175px;
      height: 93px;
     
     img{
       width: 175px;
       height: 93px;
      //  background: darkgoldenrod;
     }
    }
  }
}

//新人专享礼
.newGiftBagList{
  width: 100%;
  height: 280px;
  background: #FFF;
  margin: 10px 0;
  box-sizing: border-box;
  .newGiftBag{
    .newGiftBagItem{
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      span{
       // background: burlywood;
        margin:0 15px ;
        font-size: 16px;
        display: block;
        height: 100%;
        line-height: 45px;
        text-align: center;
      }

    }

    .bottomBox{
      height: 220px;
     // background: chocolate;
      margin: 0 15px;
      box-sizing: border-box;
      .getList{
        width: 170px;
        height: 100%;
        background: #f9e9cf;
        border-radius:5px ;
        display: flex;
        position:relative;
        
        .newGet{
          .newPerson{
            font-size: 16px;
            padding: 15px 0 0 15px;
          }
          .newImg{
            width: 130px;
            height: 130px;
            margin: 20px 15px 0 15px;
            
            img{
              width: 130px;
              height: 130px;
            }
          }
        }
        //福利右
        .rightList{
          width: 170px;
          height: 100%;
         // background: chartreuse;
          position:absolute;
          left: 175px;
          top: 0;
          .welfareList{
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            
            .welfareItem{
              width: 100%;
              height: 108px;
              background: #fbe2d3;
              border-radius: 5px;
              margin-bottom: 5px;
              .txt1{
                font-size: 16px;
                margin: 15px 0 0 15px;
              }
              .txt2{
                font-size: 12px;
                color: #7f7f7f;
                margin: 0 0 0 15px;
              }
            }
            .imgList{
              width: 100px;
              height: 100px;
              position: absolute;
             
              .imgItem{
                width: 100px;
                height: 100px;
                position: absolute;
                top:10px ;
                left: 70px;
                z-index: 2;
               // background: cornflowerblue;
                img{
                  width: 100px;
                  height: 100px;
                 
                }
              }
            }
            .price{
              position: absolute;
              width: 40px;
              height: 40px;
              background:rgba(252, 158, 35, 0.8);
              border-radius: 50%;
              margin:10px 0 0 120px;
              z-index: 2;
              .discounts{
                font-size: 8px;
                color: #fff;
                text-align: center;
                line-height: 20px;
              }
              .original{
                font-size: 8px;
                color: #fff;
                text-align: center;
                text-decoration:line-through;
              }
            }
          }
        }
      }
    }
  }
}

//热销榜
.hotSale{
  width: 100%;
  height: 355PX;
  background: #fff;
  .PublishHead{
    height: 50px;
   // background: crimson;
    .head{
      height: 50px;
      span{
        display: block;
        font-size: 16px;
        line-height: 50px;
        padding-left:15px ;
      } 
    }
    .content{
      height: 305px;
      padding: 0 15px 0 15px;
      position: relative;
      .line1{
        height: 305px;
       // background: darkgray;
        display: flex;
        justify-content: space-between;
        .itemBig1{
          width: 170px;
          height: 100px;
          background: #f9f3e4;
          position: relative;
          border-radius: 5px;
          .name{
            padding-left:10px ;
            margin-top: 30px;
            .txt{
              font-size: 14px;
              &::after{
                content: "";
                display: block;
                width: 25px;
                height: 2px;
                background: #000;
                margin-top: 5px;
              }
            }
          }
          .imgWrap{
            width: 100px;
            height: 100px;
            position:absolute;
            right: 0;
            top: 0;
            img{
              width: 100px;
              height: 100px;
            }
          }
        }
       .itemBig2{
          width: 170px;
          height: 100px;
          background: #ebeff6;
          position: relative;
          border-radius: 3px;
          .name{
            padding-left:10px ;
            margin-top: 30px;
            .txt{
              font-size: 14px;
              &::after{
                content: "";
                display: block;
                width: 25px;
                height: 2px;
                background: #000;
                margin-top: 5px;
              }
            }
          }
          .imgWrap{
            width: 100px;
            height: 100px;
            position:absolute;
            right: 0;
            top: 0;
            img{
              width: 100px;
              height: 100px;
            }
          }
        }
      }
      //小图分类
      .line2{
        width: 345px;
        height: 205px;
       // background: darkolivegreen;
        position: absolute;
        top: 100px;
        left: 15px;
        ul{
          display: flex;
          flex-wrap: wrap; 
          justify-content: space-between;
         // align-content: space-around;
          .item{
           width: 83px;
           height: 90px;
           background: #f5f5f5;
           margin-top: 5px;
           border-radius: 3px;
           .name{
             width: 83px;
             height: 90px;
             .txt{
               width: 100px;
               display: block;
               font-size: 12px;
               //text-align: center;
               padding: 5px 0 0 10px;
             }
             img{
               width:60px ;
               height:60px ;
             //  background: chocolate;
              // text-align: center;
              margin: 0 12px;
             }
           }
          }
        }
      }
    }
  }
}

//超值专区
.overflowPrefecture{
  width: 100%;
  height: 155px;
  background: #fff;
  margin-top: 10px;
  padding: 10px 15px 15px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .list{
    width:170px;
    height:132px ;
    background:#f5f5f5;
    border-radius: 3px;
    .overflow{
      .title{
        display: block;
        font-size: 16px;
        margin: 10px 0 0 10px;
      }
      .desc{
        display: block;
        font-size: 12px;
        margin: 0 0 0 10px;
        color: rgb(127, 127, 127);
      }
    }
    .choiceness{
      display: flex;
      //justify-content: space-between;
      padding: 0 7px;
      img{
        display: flex;
        width:75px ;
        height:75px ;
      //  background: chartreuse;
      }
      
    }
  }
}

//底部
.footList{
  width: 100%;
  height: 125px;
  background: #414141;
  margin-top: 10px;
  margin-bottom: 50px;
  box-sizing: border-box;
 
  .ftWrap{
   // padding: 27px 85px 14px;
    .download{
      display:flex;
      padding: 27px 85px 14px;
      a{
        border: 1px solid #999;
        font-size: 12px;
         color:#fff;
         padding: 5px 20px;
         border-radius: 5px;
      }
      .a1{
        margin: 0 25px 0 0;
      }
    }
    .phone{
      color: #999;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
