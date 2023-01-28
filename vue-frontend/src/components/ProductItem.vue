<template>
    <img :src="product.imageUrl" alt="product image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">$ {{ product.price }}</p>
          <router-link :to="`/products/${product.id}`">
            <button>View Details</button>
          </router-link>
</template>


<script>
    export default {
        name: 'ProductItem',
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>


<style scoped>

</style>