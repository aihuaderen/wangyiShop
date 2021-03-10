<template>
  <div class="header">
      <router-link to="/" class="left">
        <i class="iconfont icon-rhome"></i>
      </router-link>
      <span>{{headname}}</span>
      <div class="right">
        <a @click="toSearch" class="search">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <router-link to="/cart">
          <i class="iconfont icon-tubiaolunkuo-"></i>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:['headname'],
  data(){
    return {
      pagename: '/login' 
    }
  },
  methods:{
    //跳转到搜索页面
    toSearch(){
      this.$router.push({ path: `/search`})
      //将当前页面路径存入本地,为了可以回退回来
      localStorage.setItem('search_push_key', JSON.stringify(this.pagename))
    }
  }
}
</script>

<style lang='less' scoped>

    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #fff;
        border-bottom: 1px solid #d9d9d9;
        padding: 0 13px 0 12px;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        .iconfont {
            font-size: 25px;
        }
        .left {
          display: block;
          float: left;
        }
       .right {
         display: block;
         float: right;
       }
       .search {
         margin-right: 20px;
       }

    }
</style>
