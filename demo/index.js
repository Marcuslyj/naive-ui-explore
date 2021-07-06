import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import '../styles/index.scss'
import Demo from './demo.vue'
import Card from 'packages/common/Card'
import Icon from 'packages/common/Icon'
import Loader from 'packages/common/Loader'
import SideMenu from 'packages/nimbus/SideMenu'
import Layout from 'packages/nimbus/Layout'
import Home from 'packages/nimbus/Home'
import Navbar from 'packages/nimbus/Navbar'

import sideMenuDemo from './components/sideMenuDemo'
import homeDemo from './components/homeDemo'

Vue.use(VueRouter)

Card.install(Vue)
Icon.install(Vue)
SideMenu.install(Vue)
Layout.install(Vue)
Navbar.install(Vue)
Loader.install(Vue)
Home.install(Vue)

const routes = [
    { path: '/sidemenu', component: sideMenuDemo },
    { path: '/', component: homeDemo }
]

const router = new VueRouter({
    routes
})



    ; (new Vue({
        router
    })).$mount('#app')

console.log('...')