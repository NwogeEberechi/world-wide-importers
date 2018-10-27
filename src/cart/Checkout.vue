<template>
  <div id="checkout">
    <div class="form" v-if="cart.length > 0">
      <form @submit.prevent="submit">
        <div class="form-header">
            Enter Your Shipping Details
        </div>
        <div class="input" :class="{invalid: $v.name.$error}">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            @blur="$v.name.$touch()"
            v-model="name">
          <p v-if="!$v.name.minLen" class="">Name is too short.</p>
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
        <div class="input" :class="{invalid: $v.address.$error}">
          <label for="address">Address</label>
          <input
            type="text"
            id="address"
            @blur="$v.address.$touch()"
            v-model="address">
        </div>
        <div class="input" :class="{invalid: $v.city.$error}">
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            @blur="$v.city.$touch()"
            v-model="city">
        </div>
        <div class="input" :class="{invalid: $v.phone.$error}">
          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            @blur="$v.phone.$touch()"
            v-model="phone">
          <p v-if="!$v.phone.minLen">Please provide a valid phone number.</p>
        </div>
        <div class="input inline" :class="{invalid: !terms}">
          <input 
            type="checkbox" 
            id="terms"
            @change="$v.terms.$touch()"
            v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit" class="btn-add" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>

    <div v-else>
      <p>You have no item in your cart. <router-link to="/products">Please go shopping!</router-link></p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
export default {
    data(){
        return {
            showContact: true,
            email: "",
            name: "",
            address: "",
            city: "",
            phone: "",
            terms: false
        }
    },
    computed:{
    ...mapGetters([
      'cart',
      'cartTotal'
    ])
    },
    validations: {
      email: {
        required,
        email
      },
      phone: {
        required,
        numeric,
        minLen: minLength(11)
      },
      name: {
        required,
        minLen: minLength(2)
      },
      address: {
        required
      },
      city: {
        required
      },
      terms: {
        required
      }
    },
    methods: {
        submit(){
            this.showContact = false;
            console.log('submitting...')
        }
    }
}
</script>

<style scoped>
</style>

