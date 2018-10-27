<template>
    <div class="container">
        <div class="row detailSlap">
            <div class="col-sm-6 text-center detailImage">
                <img 
                    :src="product.imagelink" 
                    alt="product image" 
                    class="img-responsive" 
                    id="productDetailImg" 
                    width="350px" height="350px">
            </div>
            <div class="col-sm-6 text-center">
                <h5>{{ product.name }}</h5>
                <p>{{ product.description }}</p>
                <p class="price">{{ product.price | currency }}</p>
                <p class="rating"> <star-rating 
                v-bind:show-rating="false"
                v-bind:star-size="20"
                v-bind:rating="product.rating"
                v-bind:read-only="true"></star-rating></p>
                <p>In Stock: {{ product.stock }}</p>
                <hr>
                <p>Qty: <input type="number" class="qtyInput" min="1" max="100" v-model="quantity"></p>
                <p>
                    <button 
                        class="btn btn-add" 
                        :disabled="product.stock == 0"
                        @click="addToCart()"> Add to cart </button>
                </p>

            </div>

        </div>
    </div>
</template> 

<script>
import Product from "./Product.vue";
import StarRating from 'vue-star-rating';
export default {
    data(){
        return {
            productName: this.$route.params.id,
            product: [],
            quantity: 1
        }
    },
    methods: {
        addToCart(){
            this.$store.dispatch("addToCart", {product: this.product, quantity: this.quantity});
        },
    },
    components: {
        appProduct: Product,
        starRating: StarRating
    },
    created(){
        let products = this.$store.getters.productArray
        for (let i = 0; i < products.length; i++) {
            if (products[i].name == this.productName) {
            this.product = products[i]
            }
        }
    }
}
</script>

<style scoped>
    .product {
        width: 50%;
        margin: auto;
        align-content: center;
    }
    .product-details {
        width: 80%;
        margin: auto;
        margin-top: 30px;
    }
    .product-img {
    height: 350px !important;
    width: 80%;
    margin: auto;
}
/* copied */
#detailCard {
    background-color: #ffffff;
    margin: 50px;
}
.detailSlap {
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 80%;
    margin: 30px auto
}
.detailSlap .detailImage {
    margin-top: 41px;
    margin-bottom: 41px;
}
.detailSlap .img-responsive {
    margin: 0 auto;
}
#detailCard h5 {
    text-align: center;
    font-weight: 900;
    font-size: 1.5em;
    margin: 15px 0;
}
#detailCard p {
    text-align: center;
}
.price {
    background-color: #DFA60D;
    color: #fff;
    font-size: 18px;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    font-weight: 200;
    height: 80px;
    line-height: 80px;
    text-align: center;
    width: 80px;
    margin: 20px auto;
}
.qtyInput {
    width: 40px;
    border-radius: 5px;
    padding-left: 2px;
}
.rating{
    width: 100px;
    margin: auto;
    margin-bottom: 20px;
}
</style>


