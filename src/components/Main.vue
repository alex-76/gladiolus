<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
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
    h1 {
        color: green;
        span {
           color:red;
        }
    }
</style>
