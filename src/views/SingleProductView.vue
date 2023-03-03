<template>
    <div>
        <div class="single-product" v-if="product">
            <h1>{{ product.prodName }}</h1>
            <h2>{{ product.price }}</h2>
            <p>{{ product.prodDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        product() {
                return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.id);
    }
}
</script>
<style></style>