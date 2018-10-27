<template>
    <div class="list-group">
        <router-link to="/products">
            <a class="list-group-item list-group-item-action" :class="{'active': !$route.query.category}">All Categories</a>
        </router-link>
      <router-link 
      v-for="(c, index) in data" 
      :key="index" 
      :to="{name: 'products', query:{category: c.category}}">
          <a 
            class="list-group-item list-group-item-action" 
            :class="{'active': $route.query.category === c.category}">{{ c.category }}</a>
      </router-link>
    </div>
</template>
<script>
export default {
    props: {
        data: Array
    }
}
</script>

<style scoped>
.list-group-item.active, .list-group-item.active:hover {
    z-index: 2;
    color: #fff;
    background-color: #521751;
    border-color: #521751;
}

a {
    color:  #521751;
    text-decoration: none;
}

a:hover, a:focus {
    color: #521751;
}
</style>


