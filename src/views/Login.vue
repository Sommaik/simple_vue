<template>
  <b-container>
    <b-form>
      <b-form-group label="user id">
        <b-form-input id="userId" v-model="userId" />
      </b-form-group>
      <b-form-group label="password">
        <b-form-input type="password" v-model="password" />
      </b-form-group>
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
  }
};
</script>

<style>
</style>
