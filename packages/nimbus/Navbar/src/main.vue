<template>
  <div class="nav">
    <div class="left">
      <div class="item">
        TuSimple
      </div>
    </div>
    <div class="right">
      <div class="item">
        Beijing
      </div>
      <div class="item">
        English
      </div>
      <div class="item">
        Mollie Jennings
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NNavbar',
  props: {},
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    toggle () {
      console.log('hello')
      this.collapse = !this.collapse
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  height: 50px;
  left: 0;
  width: 100%;
  background-color: #1f263e;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1280px;
  .left {
    display: flex;
    align-items: center;
    margin-left: 8px;
    .item {
      color: white;
      margin-left: 14px;
      margin-right: 14px;
      font-size: 14px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-right: 22px;
    .item {
      color: #fff;
      font-size: 14px;
      margin-left: 14px;
      margin-right: 14px;
    }
  }
}
</style>
