import Vue from "vue";
import Router from "vue-router";

import Home from "./products/Home.vue";
import ProductDetails from "./products/ProductDetails.vue";
import Cart from "./cart/Cart.vue";
import Checkout from "./cart/Checkout.vue";
import Contact from "./contact/Contact.vue";
import Signin from "./components/users/auth/Signin.vue";
import Signup from "./components/users/auth/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/products/:id",
      name: "productDetail",
      component: ProductDetails
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./products/ProductGrid.vue")
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/login",
      component: Signin
    },
    {
      path: "/signup",
      component: Signup
    }
  ]
});
