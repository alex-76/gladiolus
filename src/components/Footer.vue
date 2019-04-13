<template>
    <footer>
        <h1>{{msg}}</h1>
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
        h1 {
            color: #ffffdd;
        }
    }
</style>