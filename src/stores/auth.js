import axios from 'axios'
const AuthStore = {
  namespaced: true,
  state: {
    token: '',
    name: ''
  },
  mutations: {
    loginSuccess (state, payload) {
      state.token = payload.token
      state.name = payload.name
    }
  },
  actions: {
    login: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_API_URL + '/login', {
            userId: payload.userId,
            password: payload.password
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(reason => {
            reject(reason)
          })
      })
    },

    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_API_URL + '/user', payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(reason => {
            reject(reason)
          })
      })
    }
  }
}

export default AuthStore
