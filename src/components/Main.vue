<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main>
            <div v-for="product in sortedProducts">
                <div class="row">
                    <div class="col-md-5 col-md-offset-0">
                        <figure>
                            <img class="product" v-bind:src="product.image" >
                        </figure>
                    </div>
                    <div class="col-md-6 col-md-offset-0 description">
                        <h1 v-text="product.title"></h1>
                        <p v-html="product.description"></p>
                        <p class="price">
                            {{product.price | formatPrice}}
                        </p>
                        <button class=" btn btn-primary btn-lg"
                                v-on:click="addToCart(product)"
                                v-if="canAddToCart(product)">Add to cart</button>
                        <button disabled="true" class=" btn btn-primary btn-lg"
                                v-else >Add to cart</button>
                        <span class="inventory-message"
                              v-if="product.availableInventory - cartCount(product.id)
          === 0"> All Out!
        </span>
                        <span class="inventory-message"
                              v-else-if="product.availableInventory - cartCount(product.id) < 5">
          Only {{product.availableInventory - cartCount(product.id)}} left!
        </span>
                        <span class="inventory-message"
                              v-else>Buy Now!
        </span>
                        <div class="rating">
          <span  v-bind:class="{'rating-active' :checkRating(n, product)}"
                 v-for="n in 5" >
          </span>
                        </div>
                    </div><!-- end of col-md-6-->
                </div><!-- end of row-->
                <hr />
            </div><!-- end of v-for-->
        </main>
    </div>
</template>

<script>
    import MyHeader from './Header.vue'
    export default {
        name: 'imain',
        data () {
            return {
                products: {},
                cart: []
            }
        },
        components: { MyHeader },
        methods: {

        },
        filters: {

        },
        created: function() {
            axios.get('/static/products.json')
                .then((response) =>{
                    this.products=response.data.products;
                    console.log(this.products);
                });
        }
    }
</script>

