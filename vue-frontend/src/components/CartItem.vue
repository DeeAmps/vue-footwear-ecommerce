<template>
    <img :src="cartItem.imageUrl" alt="product image" class="product-image" />
        <div class="details-wrap">
            <h3>{{ cartItem.name }}</h3>
            <p>$ {{ cartItem.price }}</p>
        </div>
    <button class="remove-button">Remove</button>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeItem() {
            this.$emit('remove-cartItem', this.cartItem.id)
        }
    }
}
</script>

<style scoped>
  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>