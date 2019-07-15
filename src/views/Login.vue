<template>
  <div>
    <input id="userId" v-model="userId" />
    <input type="password" v-model="password" />
  </div>
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
