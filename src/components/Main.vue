<template>
    <section>
        <h1><span>{{msg}}</span></h1>
    </section>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                msg: 'Home page'
            }
        }
    }
</script>

<style scoped lang="scss">

    h1 {
        span {
            color:#32d296;
        }
    }

</style>