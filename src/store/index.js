//vuex 核心管理对象

import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import search from './modules/search'
import category2 from './modules/category2'
import category from './modules/category'

Vue.use(Vuex)

const state = {}

const mutations = {}
 
const actions = {}

const getters = {}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {
        home,
        search,
        category2,
        category

    }
})