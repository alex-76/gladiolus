<template>
    <section>
        <div class="uk-child-width-1-2 uk-flex uk-flex-top" uk-grid>
            <div class="uk-width-auto">
                <figure>
                    <img :src="products.image" width="200">
                </figure>
            </div>
            <div class="uk-margin-left">
                <h2>{{products.title}}</h2>
                <p v-html="products.description"></p>
                <h4>Price: {{products.price}}</h4>
                <div class="rating">
                    <span :class="{'rating-active': checkRating(n)}" v-for="n in 5">
                         <small uk-icon="star"></small>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Product',
        data () {
            return {
                msg: 'Single Product Page ' + this.$route.params.id,
                products: [],
            }
        },
        methods: {
            checkRating(n) {
                return this.products.rating - n >= 0;
            },
        },
        created: function() {
            axios.get(' /static/products.json')
                .then((response) =>{
                    this.products = response.data.products.filter(
                        data => data.id == this.$route.params.id)[0];
           });
        },
    }
</script>

<style scoped lang="scss">

</style>