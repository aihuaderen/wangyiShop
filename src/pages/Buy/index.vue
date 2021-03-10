<template>
  <div class="buyContainer">
    <!-- 顶部栏 -->
    <Header headname="值得买"></Header>

    <!-- 内容区域 -->
    <div class="container">
      <!-- 背景图片 -->
      <div class="backImg">
        <img
          class="imgName"
          src="http://yanxuan.nosdn.127.net/0b7676e645253f84be662aacfc051922.png"
          alt=""
        />
        <div class="title">严选好物&nbsp;用心生活</div>
        <img
          class="imgbig"
          src="http://yanxuan.nosdn.127.net/a93a392fb8006ba26dea38477979b7b4.jpg?imageView"
          alt=""
        />
      </div>

      <!-- 轮播图 -->
      <div class="swibb">
        <swiper :options="swiperOptions">
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <swiper-slide class="swiperImg">
            <div class="swiperItem">
              <img src="" alt="" />
              <span class="itemtop">超值专区</span>
              <span class="itembot">新定价直降</span>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Vue from "vue";
// 声明使用/安装插件 ==> 就能得到内部提供的一些特性(新的组件)
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

export default {
  name: "",
  data() {
    return {
      swiperOptions: {
        // loop: true, // 循环模式选项
        // 如果需要分页器
        slidesPerView: 4, //一行显示3个
        slidesPerColumn: 2, //行数
        slidesPerColumnFill: "row",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "custom",
          // 下面方法可以生成我们自定义的分页器到页面上
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs"></span>';
              }
            }
            return (
              '<span class="swiperPag">' + customPaginationHtml + "</span>"
            );
          },
        },
      },
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang='less' scoped>
.buyContainer {
  height: 100%;
  width: 100vh;
  background-color: #eee;
  .container {
    width: 100%;
    height: 100%;
    // 背景图片
    .backImg {
      width: 100%;
      height: 260px;
      margin-top: 50px;
      position: relative;
      .imgbig {
        width: 100%;
        height: 100%;
      }
      .imgName {
        position: absolute;
        left: 5px;
        top: 30px;
        width: 65px;
        height: 35px;
      }
      .title {
        position: absolute;
        left: 70px;
        top: 40px;
        font-size: 15px;
        color: #fff;
      }
    }
    // 轮播图
    .swibb {
      width: 355px;
      height: 270px;
      background: #fff;
      position: absolute;
      left: 10px;
      top: 120px;
      border-radius: 10px;
      overflow: hidden;
      .swiperImg {
        width: 84px;
        height: 100px;
        background: chartreuse;
        margin: 10px 3px 0 3px;
      }

    }
  }
}
</style>
