<template>
    <section>
        <h1><span>{{msg}}</span></h1>
    </section>
</template>

<script>
    export default {
        name: 'VForm',
        props: [],
        data () {
            return {
                msg: 'Form page'
            }
        },
    }
</script>

<style scoped lang="scss">

    h1 {
    span {
        color: #001fbf;
    }
    }

</style>

