<template>
    <div id="page-wrap">
        <h1>Cart</h1>
        <div class="product-container" v-for="item in cartItems" :key="item.id">
        <img :src="item.imageUrl" alt="product image" class="product-image" />
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <p>$ {{ item.price }}</p>
        </div>
        <button class="remove-button">Remove</button>
        </div>
        <div id="total-price">
        <h3>Total: $ {{ totalPrice }}</h3>
        </div>
        <button id="checkout-button">Checkout</button>
    </div>
</template>

<script>
    import { cartItems } from '../fake-data'
    export default {
        name: 'CartPage',
        data() {
            return {
                cartItems,
            }
        },
        computed: {
            totalPrice() {
                return this.cartItems.reduce((acc, item) => acc + parseInt(item.price), 0)
            }
        }
    }
</script>

<style scoped>
 h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

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
