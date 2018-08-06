import { shallowMount } from '@vue/test-utils'
import Lemon from '@/components/Lemon.vue'

describe('Lemon.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Lemon, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
