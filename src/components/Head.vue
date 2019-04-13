<template>
    <header>{{sitename}}</header>
</template>

<script>
    export default {
        name: 'my-head',
        data () {
            return {
                sitename: "My head",
            }
        },
        props: [],
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    a {
        color: black;
    }
</style>
