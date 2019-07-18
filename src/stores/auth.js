import axios from 'axios'
const AuthStore = {
  namespaced: true,
  state: {},
  actions: {
    login: function (payload) {
      return axios.post(process.env.VUE_APP_API_URL + '/login', {
        userId: payload.userId,
        password: payload.password
      })
    }
  }
}

export default AuthStore
