<template>
    <div class="uk-container">
        <h2>Math training</h2>
        <h3 id="myTag">Text</h3>
        <div class="uk-alert-primary" uk-alert>
            <h3>Are you ready?</h3>
            <router-link tag="a" class="uk-button uk-button-secondary" to="/questing">Start</router-link>
        </div>
    </div>
</template>

<script>

    import $ from 'jquery';

    $(function() {

        $('#myTag').html('<b>My new text</b>');
    });



    export default {
        name: 'VStartScreen',
        props: [],
        data () {
            return {
                msg: 'List of product in shop',
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .uk-container {
        padding: 20px;
    }
</style>