import {
    navList,
    homeList
} from '../../api'

const state ={
    navList:[],  //首页导航栏
    homes:{}  //首页信息
}

const mutations ={
   // 导航栏
    navigationList(state,navList){
        state.navList = navList
    },

    //首页信息
    homeDetails(state,homes){
        state.homes = homes
    }
}

const actions ={
    //导航栏
    async navList ({commit}){
        const result = await navList()
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code == 200) {
            const nav = result.data.cateList
            commit('navigationList', nav)
        }
    },

    //首页信息
    async home ({commit}){
        const result = await homeList()
        if (result.code == 200){
            const homes = result.data.data
            commit('homeDetails',homes)
        }
    }
}

const getters ={
    //首页信息轮播图
    banner(state){
        return state.homes.focusList || []
    },

    //30天退货
    safety(state){
        return state.homes.policyDescList || []
    },

    //新品首发
    newProduct(state){
        return state.homes.kingKongModule || {}
    },

    //3个小轮播
    threeBanner(state){
        if(!state.homes.bigPromotionModule) {
            return [];
        } 
        return state.homes.bigPromotionModule.floorList || []
    },

    //福利右
    welfareList(state){
        return state.homes.indexActivityModule || []
    },

    //热销榜
    hotSale(state){
        if(!state.homes.categoryHotSellModule) {
            return [];
        }
        return state.homes.categoryHotSellModule.categoryList.slice(2,10) || []
    },

    //超值专区
    specialZone(state){
        /* if(!state.homes.sceneLightShoppingGuideModule) {
            return [];
        } */
        return state.homes.sceneLightShoppingGuideModule || []
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}