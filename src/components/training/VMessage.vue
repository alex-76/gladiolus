<template>
    <div class="alert message" :class="'uk-alert-'+type" uk-alert>
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
</style>