<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-nav fixed-top">
        <div class="container">
             <router-link to="/"><a class="navbar-brand" >G-shop</a></router-link>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> 
            <b-collapse is-nav id="nav_collapse">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/products"><a class="nav-link">Shop All</a></router-link>
                </li>
                </ul>

                <div class="my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/cart"><a class="nav-link"> 
                                Cart <template v-if="cart.length > 0"><span class="cart">&nbsp;&nbsp;{{ cart.length }} &nbsp;</span></template></a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                    <router-link to="/login"><a class="nav-link" >Login</a></router-link>
                    </li>
                    </ul>
                </div>
            </b-collapse>
            <!-- </div> -->
<!--collapse ends -->
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    }
}
</script>
<style scoped>
 .cart{
     background: #E0A14F;
     border-radius: 6px;
     padding: 0px 4px 0px 4px;
 }

 .bg-nav{
     background-color: #521751;
     color: #cccc
 }

 a:not([href]):not([tabindex])  {
    color: #eee;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: #ccc
}
</style>


