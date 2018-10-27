<template>
    <div class="row">
        <table class="table" v-if="cart.length > 0">
            <thead>
                <tr>
                    <th> Product Image </th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price </th>
                    <th>Item Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item">
                    <td><img class="img" :src="item.product.imagelink" alt="Card image cap"></td>
                    <td>{{item.product.name}}</td>
                    <td>
                        <button class="btn btn-danger" v-on:click="decreaseQuantity(item)">-</button>
                        &nbsp;&nbsp;{{item.quantity}} &nbsp;&nbsp;
                        <button class="btn btn-success" v-on:click="increaseQuantity(item)" v-bind:disabled="item.product.stock == 0 ">+</button>
                    </td>
                    <td> {{ item.product.price | currency}} </td>
                    <td>{{item.product.price * item.quantity | currency}}</td>
                    <td><button class="btn btn-danger btn-sm" @click="deleteFromCart(item)"> Delete </button></td>
                </tr>
                <tr>
                    <td class="text-right" colspan="5"> <strong>Subtotal</strong></td>
                    <td>{{ cartTotal | currency  }}</td>
                </tr>
                <tr>
                    <td class="text-right" colspan="5"> <strong>Taxes</strong></td>
                    <td>{{ taxRate | currency  }}</td>
                </tr>
                <tr>
                    <td class="text-right" colspan="5"> <strong>Shipping Rate</strong></td>
                    <td>{{  shippingRate | currency  }}</td>
                </tr>
                <tr>
                    <td class="text-right" colspan="5"> <strong>Grand Total</strong></td>
                    <td>{{cartTotal + shippingRate + taxRate | currency}}</td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                    <td> <router-link to="/checkout"><a class="btn btn-add" v-on:click="checkout()">Checkout</a></router-link></td>
                </tr>
            </tbody>
        </table>

        <div v-else>
            Your cart is currently empty.
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            shippingRate: 10
        }
    },
    computed: {
        ...mapGetters([
            'cart',
            'cartTotal',
            'taxRate',
        ])
    }, 
    methods: {
        checkout(){
            alert("checking out");
        },
        increaseQuantity(cartItem){
            this.$store.commit('increaseItemQuantity', cartItem);
        },
        decreaseQuantity(cartItem){
            this.$store.commit('decraseItemQuantity', cartItem);
            if (cartItem.quantity == 0){
                this.deleteFromCart(cartItem);
            }
        },
        deleteFromCart(cartItem){
            this.$store.commit('deleteCartItem', cartItem);
        },

    }
    
}
</script>

<style scoped>
 th, td {
     text-align: center;
 }
 td a{
    color: #eee;
    background-color: #521751;
  }
td img {
    height: 50px;
}
</style>
