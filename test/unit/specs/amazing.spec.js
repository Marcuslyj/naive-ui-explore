import Amazing from 'main/Amazing.js'
import { mount } from '@vue/test-utils'

describe('amazing', function () {
  it('should amazing', async function () {
    const wrapper = mount(Amazing)
    await wrapper.setProps({
      title: 'not amazing'
    })
    expect(wrapper.element.textContent).to.equal('not amazing')
  })
})
