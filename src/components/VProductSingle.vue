<template>
    <section>
        <h1>
            <span>{{msg}}</span>
            <span>This is the id {{ $route.params.id}}</span>
        </h1>
    </section>
</template>

<script>
    export default {
        name: 'Product',
        data () {
            return {
                msg: 'Single Product Page',
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>