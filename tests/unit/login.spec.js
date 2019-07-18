import Login from '@/views/Login.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'

describe('Login.vue', () => {
  const localVue = createLocalVue()

  beforeAll(() => {
    localVue.use(Vuelidate)
    localVue.use(BootstrapVue)
  })

  it('should have input and password', () => {
    const wrapper = mount(Login, { localVue })
    const userInput = wrapper.find('#userId')
    expect(userInput.exists()).toBe(true)

    const passwordInput = wrapper.find('input[type=password]')
    expect(passwordInput.exists()).toBe(true)
  })

  it('should required user and password must be fail.', () => {
    const wrapper = mount(Login, {
      localVue
    })
    const userInput = wrapper.find('#userId')
    userInput.setValue('')
    expect(wrapper.vm.$v.$invalid).toBe(true)
  })

  it('should required user and password must be success', () => {
    const wrapper = mount(Login, {
      localVue
    })
    const userInput = wrapper.find('#userId')
    userInput.setValue('admin')

    const passwordInput = wrapper.find('input[type=password]')
    passwordInput.setValue('admin')

    expect(wrapper.vm.$v.$invalid).toBe(false)
  })
})
