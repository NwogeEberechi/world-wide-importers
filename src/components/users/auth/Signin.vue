<template>
  <div id="signin">
    <div class="form">
      <form @submit.prevent="onSubmit">
        <div class="form-header">
            Log in to Your Account
        </div>
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Email</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
            <p v-if="!$v.email.email">Please provide a valid email address.</p>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
            <p v-if="!$v.password.minLen">Password should not be less than 8 characters.</p>
        </div>
        <div class="submit">
          <button type="submit" class="btn-add" :disabled="$v.$invalid">Submit</button>
        </div>
        <div class="account-prompt">
            <p>New to G-shop? <router-link to="/signup">Sign Up</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Validator from "@/validators/validator";;
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    validations: {
        email:Validator.emailValidator,
        password: Validator.passwordValidator
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {email: formData.email, password: formData.password})
      }
    }
  }
</script>

<style scoped>
</style>