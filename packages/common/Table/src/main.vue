<template>
  <div class="n-table">
    <table>
      <thead>
        <slot name="header">
          <tr><th>header</th></tr>
        </slot>
      </thead>
      <tbody>
        <slot name="body">
          <tr><td>body</td></tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NTable'
}
</script>

<style lang="scss" scoped>

</style>
