<template>
  <div class="n-service-card">
    <div class="title">
      {{ title }}
    </div>
    <div class="divider" />
    <div class="items">
      <div
        v-for="item in items"
        :key="item"
        class="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
