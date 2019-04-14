<template>
    <footer>
        <div class="uk-container">
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-center">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><router-link class="nav-link" to="/">Home</router-link></li>
                        <li class="uk-active"><router-link class="nav-link" to="/about">About</router-link></li>
                        <li class="uk-active"><router-link class="nav-link" to="/product">Product</router-link></li>
                        <li class="uk-active"><router-link class="nav-link" to="/form">Form</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                msg: 'Footer'
            }
        }
    }
</script>

<style scoped lang="scss">
    footer {
        background: #2b9754;
        padding: 20px 0;
        nav.uk-navbar {
            background: none;
            ul {
               li {
                   a {
                       color:#FFFFFF;
                   }
               }
            }
        }
    }

</style>