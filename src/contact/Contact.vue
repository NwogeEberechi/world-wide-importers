<template>
<div class="form">
    <form @submit.prevent="submit">
        <div class="form-header">
            Send Us A Message
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
        <div class="input" :class="{invalid: $v.message.$error}">
            <label for="message">Your Message</label>
            <textarea 
                id="message" 
                cols="42" rows="6"
                @blur="$v.message.$touch()"
                v-model="message">
            </textarea>
            <p v-if="!$v.message.minLen">Please, provide a more descriptive message.</p>
        </div>
        <div class="submit">
            <button 
                type="submit" 
                class="btn-add"
                :disabled="$v.$invalid">Send</button>
        </div>
    </form>
</div>
    
</template>

<script>
import Validator from "@/validators/validator"
export default {
    data(){
        return {
            email: "",
            name: "",
            message: ""
        }
    },
    validations: {
        email:Validator.emailValidator,
        name: Validator.nameValidator,
        message:Validator.messageValidator
    },
    methods: {
        submit(){
            console.log('submitting...')
        }
    }
    
}
</script>

<style>
</style>


