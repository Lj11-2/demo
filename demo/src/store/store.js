import vuex from 'vuex'
import vue from "vue"
import { requestCate, requestItem } from '../utils/request'
vue.use(vuex)

const store = new vuex.Store({
    state: {
        count: 0,
        name: '张三',
        list: [],
        shop: [],
        type: []
    },
    mutations: {
        add(state) {
            state.count++
        },
        changeList(state, arr) {
            state.list = arr
        },
        changeShop(state, arr) {
            state.shop = arr
        }
    },
    actions: {
        add(context) {
            context.commit("add")
        },
        requsetList(context) {
            requestCate().then(res => {
                context.commit("changeList", res.data.list)
            })
        },
        Item(context) {
            if (this.state.type.length == 0) {
                requestItem().then(res => {
                    context.commit("changeShop", res.data.list)
                })
            }
        }
    },
    getters: {
        shop(state) {
            state.shop.map(item => {
                item.content.map(item => {
                    state.type.push(item)
                })
            })
            return state.type
        }


    },
    modules: {

    }
})

export default store