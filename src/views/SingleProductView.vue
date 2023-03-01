<template>
    <div>
        <div class="single-product">
            <h1>{{ product.prodName }}</h1>
            <h2>{{ product.price }}</h2>
            <p>{{ product.prodDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {

    computed: {
        product() {
            const productId = this.$route.params.id
            const products = this.$store.state.product
            if (products.length === 0) {
                return null
            }
             return products.find(product => product.id === productId)
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.id);
    }
}
</script>
<style>
    
</style>