<template>
    <div class="uk-container">
        <h1>{{msg}}</h1>
        <div>
            <hl> This is the id {{$route.params.id}}</hl>
            <my-head></my-head>
        </div>
    </div>
</template>

<script>
    import MyHead from './Head.vue'
    export default {
        name: 'Test',
        data () {
            return {
                msg: 'Test show component'
            }
        },
        components: { MyHead },
    }
</script>

<style scoped lang="scss">
    h1 {
        color: #4675ff;
    }
</style>