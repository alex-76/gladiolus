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
        background: #4675ff;
        padding: 20px 0;
    }
</style>