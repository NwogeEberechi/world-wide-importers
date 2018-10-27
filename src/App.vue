<template>
  <div id="page-container">
    <div id="header">
      <app-navbar></app-navbar>
    </div>
    <div class="container" id="body">
      <router-view/>
    </div>
    <div class="push"></div>
      <app-footer id="footer"></app-footer>
  </div>
</template>

<script>
import Navbar from "./navbar/Navbar.vue"
import Footer from "./footer/Footer.vue"
export default {
  components: {
    appNavbar: Navbar,
    appFooter: Footer
  }
}
</script>


<style>
#page-container {
   min-height:100%;
   position:relative;
}
#body {
   padding:10px;
  /* padding-bottom:50px;   Height of the footer */
}
#footer {
   position:absolute;
   bottom:0;
   width:100%;
   /*  height:50px;  Height of the footer */
}
.push{
  height: 100px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
