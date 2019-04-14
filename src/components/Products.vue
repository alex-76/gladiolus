<template>
    <section>
        <h1>
            <span uk-icon="icon: check"></span>
            <span>{{msg}}</span>
        </h1>
        <div v-for="product in products">
        <div class="uk-child-width-1-2 uk-flex uk-flex-top" uk-grid>
            <div class="uk-width-auto">
                <figure>
                    <img :src="product.image" width="300">
                </figure>
            </div>
            <div class="uk-margin-left">
                <h4>{{ product.title }}</h4>
                <p v-html="product.description"></p>
                <p>Price: {{ product.price}}<p/>
                <div class="rating">
                     <span :class="{'rating-active': checkRating(n, product)}" v-for="n in 5">
                         <small uk-icon="star"></small>
                     </span>
                </div>
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
                msg: 'Product',
                products: [],
            }
        },
        methods: {
            checkRating(n, myProduct) {
                return myProduct.rating - n >= 0;
            },
        },
        created: function() {
            axios.get(' /static/products.json')
                .then((response) =>{
                    this.products = response.data.products;
                    console.log(response.data.products);
                });
        },
    }
</script>

<style scoped lang="scss">

    h1 {
        span {
            color:#32d296;
        }
    }

</style>