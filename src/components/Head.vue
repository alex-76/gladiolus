<template>
    <header>
        <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li class="uk-active"><router-link class="nav-link" to="/">Home</router-link></li>
                <li>
                    <router-link class="nav-link" to="/about">About</router-link>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="javascript:(0);">Item</a></li>
                            <li><a href="javascript:(0);">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><router-link class="nav-link" to="/form">Form</router-link></li>
            </ul>
        </div>
    </nav>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                sitename: "My Alex",
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        background: #0f7ae5;
        padding: 20px 0;
    }
</style>
