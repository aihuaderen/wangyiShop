import { reqCategoryData} from "@/api";
const state = {
    categoryList:[]
}
const mutations = {
    receive_categoryList(state, result) {
        state.categoryList = result
    },
}
const actions = {
    async getCategoryList({ commit }) {
        const result = await reqCategoryData()
        commit('receive_categoryList', result)
    },
}
const getters = {
    
}
export default {
    state,
    mutations,
    actions,
    getters
}