# Theme
Naive UI provides a simple way to custom style of icon in different themes.
```html
<n-icon
  size="40"
  :themed-style="{
    dark: {
      fill: 'rgb(0, 128, 0)',
      stroke: 'rgb(0, 128, 0)'
    },
    light: {
      fill: 'rgb(0, 160, 0)',
      stroke: 'rgb(0, 160, 0)'
    }
  }"
>
  <cash-outline />
</n-icon>
```
```js
import cashOutline from 'naive-ui/lib/icons/cash-outline'

export default {
  components: {
    cashOutline
  }
}
```