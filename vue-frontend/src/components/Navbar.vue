<template>
    <div id="navbar">
        <router-link class="homelink" to="/">
            <h1>FABOLOUS FOOTWEAR</h1>
        </router-link>
        <router-link to="/cart">
            <button>Shopping Cart</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavbarComponent',
    }
</script>

<style scoped>
    #navbar {
        padding: 16px;
        display: flex;
        margin-bottom: 30px;
        justify-content: space-between;
    }

    .homelink {
        text-decoration: none;
        color: black;
    }
</style>