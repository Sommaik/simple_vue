<template>
<b-container>
    <b-form @submit.stop.prevent="onRegisterSubmit">
      <b-form-group label="User Id">
        <b-form-input
          id="userId"
          v-model="$v.form.userId.$model"
          v-bind:state="$v.form.userId.$dirty ? !$v.form.userId.$error : null"
        />
      </b-form-group>
      <b-form-group label="User name">
        <b-form-input
          v-model="$v.form.name.$model"
          v-bind:state="$v.form.name.$dirty ? !$v.form.name.$error : null"
        />
      </b-form-group>
      <b-form-group label="password">
        <b-form-input
          type="password"
          v-model="$v.form.password.$model"
          :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
        />
      </b-form-group>
      <b-form-group label="re - password">
        <b-form-input
          type="password"
          v-model="$v.form.rePassword.$model"
          :state="$v.form.rePassword.$dirty ? !$v.form.rePassword.$error : null"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
    <b-button variant="link" @click="onBackClick">Back</b-button>
  </b-container>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            form : {
                userId: '',
                password: '',
                rePassword: '',
                name: ''
            }
        }
    },
    validations: {
        form: {
            userId: {
                required
            },
            password : {
                required,
                minLength: minLength(6)
            },
            rePassword : {
                required,
                sameAs: sameAs('password')
            },
            name : {
                required
            },
        }
    },
    methods: {
        ...mapActions('auth', ['register']),
        onRegisterSubmit() {
            this.register(this.form).then( result => {
                this.$router.replace({path: '/login'});
            });
        },
        onBackClick() {
            this.$router.replace({path: '/login'});
        }
    }
}
</script>

<style>

</style>
