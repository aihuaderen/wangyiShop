//请求接口函数

import ajax from './ajax'
import ajax2 from './ajax2'

//首页导航栏数据
export const navList = () => ajax.get('/xhr/page/global.json')

//首页信息
export const homeList = ()=> ajax.get('/xhr/index.json')


//搜索页热门数据
export const hotList = () => ajax.get('/xhr/search/init.json')

//搜索关键字列表
export const keyList = (keywordPrefix)=> ajax({
    method: 'POST',
    url: '/xhr/search/searchAutoComplete.json',
    data: {
        keywordPrefix
    }
});


//搜索详情数据
// export const shopList = (keyWord)=> ajax({
//     method: 'GET',
//     url: '/xhr/search/search.json',
//     data: {
       
//     }
// });

export const shopList = (keyWord) => ajax.get(`/xhr/search/search.json?__timestamp=161408326258&needPopWindow=true&searchWordSource=7&stillSearch=false&_stat_search=autoComplete&itemId=0&size=40&upperPrice=-1&floorPrice=-1&matchType=0&categoryId=0&descSorted=false&sortType=0&keyword=${keyWord}`)


//分类页左侧导航栏数据
export const category = () => ajax.get('https://m.you.163.com/item/cateList.json')

//分类页右侧内容数据
// export const categoryList = (categoryId) => ajax.get('https://m.you.163.com/item/cateList.json', categoryId)

// 分类列表
export const reqCategoryData = () => ajax2.get('/api2/getCategoryData')
