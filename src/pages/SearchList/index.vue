<template>
  <div class="searchListContainer">
    <!-- 头部栏 -->
    <div class="bar">
      <!-- 搜索栏 -->
      <div class='barInput'>
        <div class="inputBox">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" v-model="keyWord" @click="goSearchList" placeholder="请输入商品名称">
          <i class="iconfont icon-shanchu" @click="goSearch"></i>
        </div>
      </div>

      <!-- 分类栏 -->
      <div class="classify">
        <ul class="crategroy">
          <li>综合</li>
          <li>价格</li>
          <li>分类</li>
        </ul>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="container" v-if="searchShop">
      <!--     <div class="bigBox" v-for="(shopItem, index) in mapGetters" :key="index"> -->
      <div class="bigBox" v-for="(shopItem, index) in searchShop" :key="index">
        <div class="goods" v-for="(shop, index) in shopItem" :key="index">
          <img :src="shop.listPicUrl" alt="">
          <div class="advertising">{{shop.simpleDesc}}</div>
          <div class="introduce">{{shop.name}}</div>
          <span>¥{{shop.retailPrice}}</span>
          <div class="activity">
            <span  v-for="(item, index) in shop.itemTagList" :key="index">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 未搜索到内容 -->
    <div class="notShop" v-else>
      <div class="notBox">
        <i class="iconfont icon-weizhaodaoxiangguanshangpin"></i>
        <span>您寻找的商品还未上架</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: '',
  data(){
    return {
      keyWord: '', //关键字
      // shopList: [], //未处理数据

    }
  },
  mounted(){


    //接受上个页面传递过来的关键字参数
    this.keyWord = this.$route.query.keyWord

    //用床底过来的关键字参数发送请求获取商品数据
    this.$store.dispatch('getShopList', this.keyWord)
  },
  computed:{
    // ...mapGetters(["searchShop"]),

    //获取商品数据列表
    ...mapState({
      shopList: state => state.search.shopList,
    }),

    //通过计算, 把获取到的商品列表改成我需要的结构
    searchShop(){
        let shopList = this.shopList
        
        //判断是否有数据,没有数据不计算
        if (!shopList) {
            return
        }

        let searchList = []
        let arr = []
        for (let index = 0; index < shopList.length; index++) {
            arr.push(shopList[index])
            if (arr.length === 2) {
                searchList.push(arr)
                arr = []
            }            
        }
        if (arr.length) {
            searchList.push(arr)
        }

        return searchList
    }
  },
  methods: {
    //回退到搜索页
    goSearch(){
      this.$router.go(-1)
    },
    goSearchList(){
      //携带关键字跳转至搜素详情页
      this.$router.push({ path: `/search`, query: { keyWord: this.keyWord} })
    }
  }
}
</script>

<style lang='less' scoped>

.searchListContainer {
  width: 100%;
  height: 100%;

}

//顶部栏
.bar {
  width: 100%;
  // height: 45px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  border-bottom: 1px solid rgb(204, 202, 202);
  //搜索栏
  .barInput {
    width: 100%;
    height: 45px;
    padding: 0 15px 0 12px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .inputBox {
      width: 100%;
      height: 28px;
      line-height: 28px;
      padding: 0 10px;
      box-sizing: border-box;
      background: #f4f4f4;
      border-radius: 5px;
      input {
        width: 278px;
        height: 22px;
        font-size: 14px;
        border: none;
        background: #f4f4f4;
        outline: none;
      }
      .iconfont {
        margin-right: 8px;
        color: #999;
      }
    }
  }

  // 分类栏
  .classify {
    width: 100%;
    height: 40px;
    .crategroy {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      flex-grow: 1;
      background: #fafafa;
      li {
        width: 125px;
        height: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
      };
    }
  }
}

//内容区
.container {
  width: 100%;
  margin-top: 95px;
  padding-left: 10px;
  box-sizing: border-box;
  // display: flex;
  // flex-flow: row wrap;
  // align-content: flex-start;
  .bigBox {
    width: 100%;
    display: flex;
    align-items: flex-start;
    .goods {
      // flex: 50%;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 16px;
      img {
        width: 172px;
        height: 172px;
        // background: chartreuse;
        display: block;
      }
      .advertising {
        width: 172px;
        height: 24px;
        background: #f8e4cc;
        color: #875D2A;
        padding: 3px 5px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;    
        
      }
      .introduce {
        width: 172px;
        // height: 20px;
        margin-top: 8px;
        font-size: 14px;
      }
      span {
        width: 172px;
        height: 24px;
        font-size: 16px;
        color: #DD1A21;
      }
      .activity {
        width: 172px;
        height: 17px;
        margin: 2px 0 6px;
        span {
          font-size: 12px;
          border: 1px solid #DD1A21;
          border-radius: 8px;
          padding: 0 4px;
          box-sizing: border-box;
          margin-right: 5px;
        }
      }
    }
  }
}


//未知道商品显示
.notShop{
  width: 100%;
  height: 667px;
  display: flex;
  align-items: center;
  justify-content: center;
  .notBox {
    .iconfont {
      font-size: 124px;
      display: block;
      color: #7f7f7f;
    }
    span {
      font-size: 15px;
      color: #7f7f7f;
    }
  }
}

</style>
