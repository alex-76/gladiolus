<template>
    <div class="hello">
        <button class="uk-button uk-button-primary">{{ msg }}</button>
        <h1><span>Group Alex...</span></h1>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                msg: 'Welcome Alex'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
    a {
        color: green;
        span {
           color:red;
        }
    }
</style>
