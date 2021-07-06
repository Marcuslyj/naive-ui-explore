import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import '../styles/index.scss'
import Demo from './demo.vue'
import Card from 'packages/common/Card'
import Icon from 'packages/common/Icon'
import SideMenu from 'packages/nimbus/SideMenu'
import Layout from 'packages/nimbus/Layout'

import sideMenuDemo from './components/sideMenuDemo'

Vue.use(VueRouter)

// 全局插件组件
const pligins = [Card, Icon, SideMenu, Layout]
pligins.forEach((plugin) => plugin.install(Vue))

const routes = [
    { path: '/sidemenu', component: sideMenuDemo }
]

const router = new VueRouter({
    routes
})



    ; (new Vue({
        router
    })).$mount('#app')

console.log('...')