<template>
    <section>
        <h1>
            <span uk-icon="icon: check"></span>
            <span>{{msg}}</span>
        </h1>
        <ul class="uk-list">
            <li v-for="product in products">
                <h4>{{ product.title }}</h4>
                <p v-html="product.description"></p>
                <p>Price: {{ product.price}}<p/>
                <small uk-icon="star"></small>
            </li>
        </ul>
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