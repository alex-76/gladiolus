<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1><span>Chackout...</span></h1>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                msg: 'Form block'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
    h1 {
        color: #806d0e;
        span {
            color: #4675ff;
        }
    }
</style>
