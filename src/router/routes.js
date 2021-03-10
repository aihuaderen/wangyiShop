//注册路由

const Home = () => import('../pages/Home')
const Category = () => import('../pages/Category')
const Buy = () => import('../pages/Buy')
const Cart = () => import('../pages/Cart')
const Personal = () => import('../pages/Personal')
const Login = () => import('../pages/Login')
const Search = () => import('../pages/Search')
const SearchList = () => import('../pages/SearchList')


const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/category',
        component: Category,
        name: 'Category',
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/buy',
        component: Buy,
        name: 'Buy',
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        name: 'Cart',
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/personal',
        component: Personal,
        name: 'Personal',
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            isShowFooter: false
        }
    },
    {
        path: '/search',
        component: Search,
        name: 'Search',
        meta: {
            isShowFooter: false
        },
        // beforeEnter: (to, from, next)=>{
        //     if (to.path === /searchlist' ) {
        //         go(-1)
        //     }
        // }
    },
    {
        path: '/searchlist',
        component: SearchList,
        name: 'SearchList',
        meta: {
            isShowFooter: false
        }
    }
]

export default routes