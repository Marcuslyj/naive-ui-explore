# Circle
```html
<n-progress
  type="circle"
  :percentage="percentage"
/>
<n-progress
  type="circle"
  status="info"
  :percentage="percentage"
/>
<n-progress
  type="circle"
  status="success"
  :percentage="percentage"
/>
<n-progress
  type="circle"
  status="warning"
  :percentage="percentage"
/>
<n-progress
  type="circle"
  status="error"
  :percentage="percentage"
/>
<n-button @click="minus">
  Minus 10%
</n-button>
<n-button @click="add">
  Add 10%
</n-button>
```
```js
export default {
  data () {
    return {
      percentage: 0
    }
  },
  methods: {
    add () {
      this.percentage += 10
      if (this.percentage > 100) this.percentage = 0
    },
    minus () {
      this.percentage -= 10
      if (this.percentage < 0) this.percentage = 100
    }
  }
}
```