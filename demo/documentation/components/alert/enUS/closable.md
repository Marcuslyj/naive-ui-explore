# Closable
```html
<n-alert title="Info Text" type="default" closable>
  <template v-slot:icon>
    <n-icon>
      <ios-airplane />
    </n-icon>
  </template>
  Gee it's good to be back home
</n-alert>
<n-alert title="Info Text" type="info" closable>
  Gee it's good to be back home
</n-alert>
<n-alert title="Success Text" type="success" closable>
  Leave it till tomorrow to unpack my case
</n-alert>
<n-alert title="Warning Text" type="warning" closable>
  Honey disconnect the phone
</n-alert>
<n-alert title="Error Text" type="error" closable>
  I'm back in the U.S.S.R.
</n-alert>
```
```js
import iosAirplane from 'naive-ui/lib/icons/ios-airplane'

export default {
  components: {
    iosAirplane
  },
  data () {
    return {
      show: true
    }
  }
}
```
```css
.n-alert {
  margin-bottom: 12px;
}
```