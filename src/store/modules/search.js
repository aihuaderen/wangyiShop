//搜索页面数据

import { hotList,keyList,shopList } from '../../api'

const state = {
    hotList: [], //热门搜索
    keyList: [],  //关键字搜索
    shopList: [] //搜索商品数据
}

const mutations = {
    reset_hotList: (state, hotList) => {
        state.hotList = hotList
    },

    reset_keyList: (state, keyList) => {
        state.keyList = keyList
    },

    reset_shopList: (state, shopList) => {
        state.shopList = shopList
    },

    delete_shopList: (state) => {
        state.shopList = []
    }
}

const actions = {

    //获取热门搜索数据
    async getHotList ({commit}) {
        const result = await hotList()
        if (result.code == 200) {
            commit('reset_hotList', result.data.hotKeywordVOList)
        }
    },

    //获取关键字搜索
    async getKeyList ({commit}, keywordPrefix) {
        const result = await keyList(keywordPrefix)
        if (result.code == 200) {
            commit('reset_keyList', result.data)
        }
    },

    //获取搜索商品详情
    async getShopList ({commit}, keyWord) {
        const result = await shopList(keyWord)
        if (result.code == 200) {
            commit('reset_shopList', result.data.directlyList)
        }
    }
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}