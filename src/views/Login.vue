<template>
  <b-container>
    <b-form @submit.stop.prevent="onLoginSubmit">
      <b-form-group label="user id">
        <b-form-input
          id="userId"
          v-model="$v.userId.$model"
          v-bind:state="$v.userId.$dirty ? !$v.userId.$error : null"
        />
      </b-form-group>
      <b-form-group label="password">
        <b-form-input
          type="password"
          v-model="$v.password.$model"
          :state="$v.password.$dirty ? !$v.password.$error : null"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  data () {
    return {
      userId: '',
      password: ''
    }
  },
  validations: {
    userId: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    onLoginSubmit: function () {
      console.log(this.$v)
      if (!this.$v.$invalid) {
        axios.post(process.env.VUE_APP_API_URL + '/login', {
          userId: this.userId,
          password: this.password
        }).then(
          response => {
            if (response.data.success) {
              alert('login success')
            } else {
              alert('login fail')
            }
          }
        ).catch(reason => {
          alert('error')
        })
      } else {
        alert('invalid')
      }
    }
  }
}
</script>

<style>
</style>
