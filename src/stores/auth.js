import axios from 'axios'
const AuthStore = {
  namespaced: true,
  state: {},
  actions: {
    login: function (payload) {
      axios
        .post(process.env.VUE_APP_API_URL + '/login', {
          userId: payload.userId,
          password: payload.password
        })
        .then(response => {
          return Promise.resolve(response.data)
        })
        .catch(reason => {
          return Promise.reject(reason)
        })
    }
  }
}

export default AuthStore
