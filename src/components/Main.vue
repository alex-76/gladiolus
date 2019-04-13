<template>
    <div class="uk-container">
        <h1>{{msg}}</h1>
        <div>
            <h3><HeadPage></HeadPage></h3>
        </div>
    </div>
</template>

<script>
    import HeadPage from './Head.vue'
    export default {
        name: 'Test',
        data () {
            return {
                msg: 'Test show component'
            }
        },
        components: { HeadPage },
    }
</script>

<style scoped lang="scss">
    h1 {
        color: #4675ff;
    }
</style>