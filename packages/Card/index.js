import Card from './src/main.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card
// so，插件就是实现了install方法