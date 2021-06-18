import Vue from 'vue'
import '../dist/lib/index.css' // ？
import Demo from './demo.vue'
import Card from 'packages/Card'
import Icon from 'packages/Icon'

Card.install(Vue)
Icon.install(Vue)

;(new Vue(Demo)).$mount('#app')