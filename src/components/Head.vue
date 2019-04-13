<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="/">{{sitename}}</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="/form">Active</a></li>
                            <li><a href="/test/7">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="/form">Form</a></li>
                <li><a href="/test/7">Test</a></li>
            </ul>

        </div>
    </nav>
</template>

<script>
    export default {
        name: 'head',
        data () {
            return {
                sitename: "My Alex",
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        color: black;
    }
</style>
