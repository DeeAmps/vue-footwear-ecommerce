<template>
  <div id="page-wrap">
    <div class="grid-wrap">
        <div class="product-item" v-for="product in products" :key="product.id">
          <ProductItem :product="product" />
        </div>
    </div>
  </div>
</template>

<script>
  import { products } from '../fake-data'
  import ProductItem from '../components/ProductItem.vue'
  export default {
    name: 'ProductsPage',
    components: {
      ProductItem
    },
    data () {
      return {
        products,
      }
    }
  }
</script>

<style scoped>
  .grid-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  .product-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
</style>
