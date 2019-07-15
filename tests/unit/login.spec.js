import Login from '@/views/Login.vue'
import { shallowMount } from '@vue/test-utils'

describe('Login.vue', () => {
  it('should have input and password', () => {
    const wrapper = shallowMount(Login)
    const userInput = wrapper.find('#userId')
    expect(userInput.exists()).toBe(true)

    const passwordInput = wrapper.find('input[type=password]')
    expect(passwordInput.exists()).toBe(true)
  })
})
