<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" alt="product image" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <p id="price">$ {{ product.price }}</p>
      <p>Average rating: {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else/>
</template>

<script>
  import { products } from '../fake-data'
  import NotFoundPage from './NotFoundPage.vue'
  export default {
    name: 'ProductDetails',
    components: {
      NotFoundPage
    },
    data() {
      return {
        product: products.find((p) => p.id === this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
