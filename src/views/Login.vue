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
import { mapActions } from 'vuex'
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
    ...mapActions('auth', ['login']),
    onLoginSubmit: function () {
      if (!this.$v.$invalid) {
        this.login({
          useId: this.userId,
          passpord: this.password
        }).then(response => {
          if (response.success) {
            alert('login success')
          } else {
            alert('login fail')
          }
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
