<template>
    <div class="res">
        <h2>Result training:</h2>
        <hr>
        <h3>Seccuss: {{success}}</h3>
        <h3>Error:   {{error}}</h3>
        <hr class="uk-divider-icon">
        <template v-if="success == 0">
            <h4 class="uk-text-danger">Ты полный лох!!! Иди учись студент...!!!</h4>
        </template>
        <template v-else-if="error == 0">
            <h4 class="uk-text-success">Ты вундеркинд, парень! Сразимся еще?</h4>
        </template>
        <template v-else>
            <h4 class="uk-text-warning">Нужно подучиться еще...</h4>
        </template>
        <hr class="uk-divider-icon">
        <router-link tag="a" class="uk-button uk-button-danger" to="/training">Repeat</router-link>
        <button class="uk-button uk-button-primary" @click="msg">Next level</button>
        <p class="uk-text-warning" v-show="status">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: 'VResult',
        props: ['success','error'],
        data() {
            return {
                status: false,
                text: '',
                result: null
            }
        },
        methods: {
            msg() {
                this.status = true;
                this.text = 'The module is still in development!!!';
            }
        },
        computed: {}
    }
</script>


<style scoped>
    .res {
        padding: 30px;
        margin: 20px;
        background-color: #222;
    }
    h3,h2 {
        margin:  10px 0;
        color: #FFFFFF;
    }
</style>