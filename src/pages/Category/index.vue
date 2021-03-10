<template>
    <div class="cateGoryContainer">
      <div class="block"></div>
      <!-- 搜索 -->
      <div class="header">
        <i class="iconfont icon-sousuo min"></i>
        <input class="search" placeholder="搜索商品, 共51370款好物" />
      </div>
      <!-- 内容区 -->
      <div class="contentContainer">
        <!-- 左侧 -->
        <div class="left"></div>
        <div class="leftContainer">
          <div class="categoryScroll">
            <div
              class="categoryItem"
              :class="{ active: navIndex === index }"
              @click="changeRightContainer(index)"
              v-for="(category, index) in categoryList"
              :key="category.id"
            >
              {{ category.name }}
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="rightContainer">
          <div class="subCateScroll" v-if="cateObj">
            <img class="imgUrl" :src="cateObj.imgUrl" />
            <div class="title">{{ cateObj.name }}</div>
            <div class="subCateList">
              <div
                class="subCateItem"
                v-for="subCate in cateObj.subCateList"
                :key="subCate.id"
              >
                <img class="wapBannerUrl" :src="subCate.wapBannerUrl" />
                <span>{{ subCate.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
	export default {
		data() {
			return {
				navIndex:0
			};
		},
		mounted(){
			this.getCategoryList()
		},
		methods:{
			// 获取左侧导航的列表
			...mapActions({
      getCategoryList: "getCategoryList",
    }),
			// 点击导航切换高亮
			changeRightContainer(index){
				this.navIndex = index
			}
		},
		computed:{
      ...mapState({
      categoryList: (state) => state.category.categoryList,
    }),
			cateObj(){
				return this.categoryList[this.navIndex]
			}
		}
	}
</script>

<style lang="stylus">
	.cateGoryContainer
		.block
			width 100%
			height 40px
		.header
			padding 5px 0
			display flex
			position fixed
			top 0
			width 100%
			background-color #fff
			border-bottom: 1px solid #aba6a6;
			z-index 10
      .min
				position: relative;
				top: 10px;
				left: 105px;
				font-size: 10px;
			.search  
				width 92%
				height 30px
				background-color #eee
				font-size 13px
				text-align center
				line-height 30px
				margin 0 auto
				border-radius 5px
		.contentContainer
			display flex
			box-sizing border-box
			border-top 1px solid #aba6a6
			.left
				width 20%
				height 100%
			.leftContainer
				position fixed
				top 41px
				background-color #fff
				width 20%
				height 100%
				box-sizing border-box
				border-right 1px solid #aba6a6
				.categoryScroll
					height 100%
					.categoryItem
						position relative
						width 75px
						height 40px
						font-size 13px
						text-align center
						line-height 40px
						&.active:before
							position absolute 
							top 5px
							left 3px
							content ""
							width 1px
							height 30px
							background-color #bb2c08
			.rightContainer
				width 80%
				.subCateScroll
					height 100%
					.imgUrl
						width 260px
						height 95px
						display block
						margin 5px auto
					.title
						font-size 15px
						line-height 37px
						margin 0 20px
						border-bottom 1px solid #aba6a6
					.subCateList
						display flex
						flex-wrap wrap
						.subCateItem
							width 33.333%
							text-align center
							.wapBannerUrl
								width 90%
								height 72px
							text
								font-size 12px
							
</style>

