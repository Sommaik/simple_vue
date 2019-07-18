<template>
  <b-container>
    <b-form @submit="onLoginSubmit">
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
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      userId: "",
      password: ""
    };
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
    onLoginSubmit: function() {
      console.log(this.$v);
      if (!this.$v.$invalid) {
        alert("Valid form");
      } else {
        alert("invalid");
      }
    }
  }
};
</script>

<style>
</style>
