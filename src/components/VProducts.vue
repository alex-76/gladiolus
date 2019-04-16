<template>
    <section>
        <h1>
            <span uk-icon="icon:cart"></span>
            <span>{{msg}}</span>
        </h1>
        <div v-for="product in products">
        <div class="uk-child-width-1-2 uk-flex uk-flex-top" uk-grid>
            <div class="uk-width-auto">
                <figure>
                    <img :src="product.image" width="200">
                </figure>
            </div>
            <div class="uk-margin-left">
                <h4>
                    <router-link :to="{name: 'productItem', params: {id: product.id}}"
                                               class="nav-link">{{ product.title }}
                    </router-link>
                </h4>
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
        name: 'VProduct',
        data () {
            return {
                msg: 'List of product in shop',
                products: [],
            }
        },
        methods: {
            checkRating(n, Product) {
                return Product.rating - n >= 0;
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