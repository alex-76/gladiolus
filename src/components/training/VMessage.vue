<template>
    <div class="alert uk-align-center uk-padding message" :class="'uk-alert-'+type" uk-alert>
        <h3>{{text}}</h3>
    </div>

</template>

<script>
    export default {
        name: 'VMessage',
        props: ['text','type'],
    }

</script>

<style scoped>
    .uk-alert {
        padding: 30px;
    }
    h3 {
        color: #2b2b2b;
        font-size: 36px;
    }
    .message {
        background-color: rgba(191, 0, 24, 0.59);
    }
</style>