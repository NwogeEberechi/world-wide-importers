import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  emailValidator: {
    required,
    email
  },
  nameValidator: {
    required,
    minLen: minLength(2)
  },
  messageValidator: {
    required,
    minLen: minLength(20)
  },
  passwordValidator: {
    required,
    minLen: minLength(8)
  },
  confirmPasswordValidator: {
    sameAs: sameAs("password")
  }
};
