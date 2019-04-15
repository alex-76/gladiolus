<template>
    <div class="uk-container">
        <h2>Questing</h2>
        <div class="uk-alert-primary" uk-alert>
            <h3>{{x}} + {{y}} = ?</h3>
            <hr>
            <div class="uk-button uk-button-primary uk-margin-right"
                 v-for="number in answers"
                 @click="onAnswer(number)"
            >{{number}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'VQuesting',
        props: [],
        data () {
            return {
                x : mtRand(100,200),
                y : mtRand(100,200)
            }
        },
        computed:{
            good() {
                return this.x + this.y;
            },
            answers() {
                let res = [this.good];
                while (res.length < 4) {
                    let num = mtRand(this.good - 20, this.good + 20);

                    if(res.indexOf(num) === -1) {
                        res.push(num);
                    }
                }
                return res.sort(function () {
                    return Math.random() > 0.5;
                });
            }
        },
        methods: {
            onAnswer(num){
               if(num == this.good) {
                   console.log(1);
               }
               else {
                   console.log(0);
               }
            }
        }
    }
    function mtRand(min, max) {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1) + min);
        
    }
</script>

<style>
    .uk-container {
        padding: 20px;
    }
</style>