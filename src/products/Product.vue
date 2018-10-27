<template>
    <div class="col">
        <div class="card" style="width: 15rem;">
            <img class="card-img-top product-img" :src="product.imagelink" alt="Card image cap">
            <div class="card-body text-center">
                <router-link :to="{name: 'productDetail', params: {id: product.name}}"><p class="card-title"> {{ product.name }}</p></router-link>
                <p class="card-text">{{ product.price | currency }} </p>
                <p 
                class="number-in-stock"
                 v-bind:class="{few: product.stock < 10, none: product.stock === 0}">{{product.stock}} in stock</p>
                 <br>
                <button class="btn btn-sm btn-add" :disabled="product.stock == 0" @click="addToCart(product)">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
        id: Number
    },
    methods: {
        addToCart(product){
            this.$store.dispatch("addToCart", {product: product, quantity: 1});
        },
    }
}
</script>

<style scoped>
.product-img{
    height: 150px !important;
    width: 70%;
    margin: auto;
}

.card {
    margin-bottom: 10px;
}

.card p{
    font-size: 0.8em;
    margin: 2px;
}

.filter{
    margin-bottom: 15px;
}

.pull-right {
    float: right!important;
    margin-right: 18px;
}
.lead { margin-bottom: 0; }
.number-in-stock { margin-right: 10px; }
.number-in-stock.few { color: #E0A14F; }
.number-in-stock.none { color: #C45E5E; }



</style>

