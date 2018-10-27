import Vue from "vue";
import Toasted from "vue-toasted";
Vue.use(Toasted);

Vue.toasted.register("successh", "Success!, item successfully added to cart.", {
  type: "success'",
  duration: 5000,
  position: "top-center"
});
Vue.toasted.register("noInternet", "No Internet Connection!", {
  type: "error",
  duration: 2000
});
Vue.toasted.register("unknownError", "Something went wrong!", {
  type: "error",
  duration: 2000
});

Vue.toasted.register(
  "success",
  payload => {
    if (!payload) {
      return "Oops.. Something Went Wrong..";
    }

    // if there is a message show it with the message
    return "Success!, you added " + payload.product.name + " to your cart.";
  },
  {
    type: "success",
    duration: 5000,
    position: "top-center"
  }
);
