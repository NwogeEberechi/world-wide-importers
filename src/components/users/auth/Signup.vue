<template>
  <div id="signin">
    <div class="form">
      <form @submit.prevent="onSubmit">
          <div class="form-header">
            Create New Account
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
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
          <p v-if="!$v.confirmPassword.sameAs">Password do not match</p>
        </div>
        <div class="submit">
          <button type="submit" class="btn-add" :disabled="$v.$invalid">Submit</button>
        </div>
        <div class="account-prompt">
            <p>Already have an account? <router-link to="/login">Sign In</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Validator from "@/validators/validator"
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations:{
        email: Validator.emailValidator,
        password: Validator.passwordValidator,
        confirmPassword: Validator.confirmPasswordValidator
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