<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-3">
        <app-category :data="allProducts"></app-category>
      </div>
      <div class="col">
          <div class="row">
            <div class="col-md-9">
              <div class="form-group">
              <input 
              type="text" name="" 
              id=""
              class="form-control" 
              placeholder="Search for products..." 
              v-model="searchText"
              @input="searchProduct">
            </div>
            </div>
            <div class="col filter">
              <form class="form-inline pull-right">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">Sort By </span>
                    </div>
                    <select class="form-control" v-model="selectedSortPriority">
                      <option v-for="priority in sortPriorities" :key="priority">{{ priority}}</option>
                    </select>
                  </div>
                </div>
              </form>   
            </div>
          </div>
        <div class="row">
          <app-product 
            v-for="(product, index) in paginatedData" 
            :key="index" 
            :product="product"
            :id="index"></app-product>
        </div>
        <!-- custom built paginator
        <div class="row justify-content-center">
          <div class=" btn-group">
            <a
            class="btn btn-default"
            v-for="page in pageCount" 
            :key="page"
            :class="{'btn-success': start == (page) * size }"
            @click="getPageNumber(page)">{{page}}</a>
          </div>
        </div>
        -->
        <div class="row justify-content-center">
          <b-pagination
            align="right" 
            size="md"
            :total-rows="filteredProducts.length"
            v-model="pageNumber"
            :per-page="size">
          </b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue"
import ProductCategory from './ProductCategory.vue'
export default {
  data(){
    return {
      category: this.$route.query.category,
      filter: [],
      searchText:"",
      sortPriorities: ['Price', 'Rating', 'In stock'],
      selectedSortPriority: '',
      //pagination
      pageNumber: 1,  // default to page 0
      size: 9,
      start:0,
    }
  },
  created(){
    /*
    Axios.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
      .then(res => {
        this.data = res.data
        this.data.forEach((category, index) => {
          this.subcategories.push(category.subcategories);
        });
        this.subcategories.forEach((item) => {
          for (let key in item) {
            this.items.push(item[key]);
          }
        });
        this.items.forEach((item) => {
          for (let key in item.items) {
            this.products.push(item.items[key]);
          }
        });
        
        })
      .catch(error => console.log(error))
      .then(() => console.log(this.products))
      */
     if (this.category){
          this.filter = this.filterByCategory()
          this.$store.commit('filterProducts', this.filter);
        }

      
  },
  components:{
    appProduct: Product,
    appCategory: ProductCategory
  },

  computed: {
    filteredProducts(){
      return this.$store.getters.filteredProducts
    },
    allProducts(){
      return this.$store.getters.allProducts;
    },
    productArray(){
      return this.$store.getters.productArray;
    },
    // pagination
    paginatedData(){
      const start = (this.pageNumber  -1)* this.size,
       end = start + this.size;
     return this.filteredProducts.slice(start, end);
    },
    pageCount(){
      let l = this.filteredProducts.length,
          s = this.size;
      return Math.floor(l/s);
    }
  },
  watch: {
    '$route'(to, from){
      this.category = to.query.category;
    },
    'category'(){
      this.filter = this.filterByCategory();
          this.$store.commit('filterProducts', this.filter);
    },
    'selectedSortPriority'(){
      if (this.selectedSortPriority == 'Price'){
        this.sortByPrice();
      }
      else if (this.selectedSortPriority == 'In stock'){
        this.showStockedItems();
      }else if (this.selectedSortPriority == 'Rating'){
        this.sortByRating();
      }
    }
  },
  methods: {
    searchProduct(){
      let products = this.$store.getters.filteredProducts
      let filter = (this.searchText) ? 
            products.filter(p => p.name == this.searchText) :  // change this == condition
            products;
      this.$store.commit('filterProducts', filter)
    },
    filterByCategory(){
      let filter = (this.category) ? 
        this.productArray.filter(p => p.category == this.category) : 
        this.productArray;
      return filter
    },
    showStockedItems(){
      let products = this.$store.getters.filteredProducts
      let filter = (true) ? 
          products.filter(p => p.stock > 0 ) :  // not working
          products;
      this.$store.commit('filterProducts', filter) 
    },
    sortByPrice(){
      let products = this.$store.getters.filteredProducts
      products.sort(function(a,b) {
        let x = a.price;
        let y = b.price;
        return x < y ? -1 : x > y ? 1 : 0;
      
      this.$store.commit('filterProducts', products) 
      });
    },
    sortByRating(){
      let products = this.$store.getters.filteredProducts
      products.sort(function(a,b) {
        let x = a.rating;
        let y = b.rating;
        return x > y ? -1 : x > y ? 1 : 0;
      
      this.$store.commit('filterProducts', products) 
      });
    },
    // pagination
    nextPage(){
         this.pageNumber++;
    },
    prevPage(){
        this.pageNumber--;
    },
    getPageNumber(page){
      this.pageNumber = page;
      this.start = page * this.size;
    }
  }
}
</script>

<style scoped>
.form-group input.form-control:focus, .form-control:focus {
    border: 1px solid #521751;
    background-color: #eee;
    box-shadow: 0 0 0 0 
  }
  .btn-default{
    border: 1px solid #ccc;
    margin:1px;
  }
  .wrapper{
    margin-bottom: 40px;
  }
</style>
