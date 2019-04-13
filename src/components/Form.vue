<template>
    <div class="uk-container content">
        <h1><span>{{msg}}</span></h1>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        props: [],
        data () {
            return {
                msg: 'Form component'
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

