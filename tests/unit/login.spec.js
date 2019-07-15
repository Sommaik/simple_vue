import Login from '@/views/Login.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

describe('Login.vue', () => {
  it('should have input and password', () => {
    const wrapper = shallowMount(Login)
    const userInput = wrapper.find('#userId')
    expect(userInput.exists()).toBe(true)

    const passwordInput = wrapper.find('input[type=password]')
    expect(passwordInput.exists()).toBe(true)
  })

  it('should required user and password must be fail.', () => {
    const localVue = createLocalVue()
    localVue.use(Vuelidate)

    const wrapper = shallowMount(Login, {
      localVue
    })
    const userInput = wrapper.find('#userId')
    userInput.setValue('')
    expect(wrapper.vm.$v.$invalid).toBe(true)
  })

  it('should required user and password must be success', () => {
    const localVue = createLocalVue()
    localVue.use(Vuelidate)

    const wrapper = shallowMount(Login, {
      localVue
    })
    const userInput = wrapper.find('#userId')
    userInput.setValue('admin')

    const passwordInput = wrapper.find('input[type=password]')
    passwordInput.setValue('admin')

    expect(wrapper.vm.$v.$invalid).toBe(false)
  })
})
