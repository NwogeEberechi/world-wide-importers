<template>
    <footer class="foot">
        <div class="container">
            <div class="row">
                <div class="col logo">
                    <p>World Wide Importers &copy; 2018</p>
                    <p>eberechinwoge@gmail.com</p>
                    <p>+2348136493007</p>
                </div>
                <div class="col-md-1 contact"><router-link to="/about">About</router-link></div>
                <div class="col-md-1 about navbar-right"> <router-link to="/contact"> Contact </router-link></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logo p{
    padding: 0px;
    margin: 2px;
}
.foot {
    /*background-color: rgb(236, 230, 230); */
    background-color: #000;
    color: #eee;
    padding-top: 10px;
    
}
.about{
    margin-right: 0px;
}
a {
   color: #eee;
}
a:hover, .logo p:hover {
color: #ccc;
}
</style>


