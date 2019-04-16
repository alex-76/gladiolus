<template>
    <div class="uk-container">
        <h2>Questing</h2>
        <div>
           <progress class="uk-progress" :value="progressCurrent" max="100"></progress>
            <h2 class="uk-align-center" v-show="toggle">Time: 00:0{{sec}}</h2>
           <template v-if="toggle">
                <h3>{{x}} + {{y}} = ?</h3>
                <hr>
                <div class="uk-button uk-button-primary uk-margin-right"
                     v-for="number in answers"
                     @click="onAnswer(number)"
                >{{number}}
                </div>
            </template>
            <template v-else>
                <message
                        :text="message.text"
                        :type="message.type"
                >
                </message>
                <div class="uk-button uk-button-primary" @click="onReload">
                    <span class="uk-margin-small-right" uk-icon="icon: check; ratio: 1"></span>
                    Continue
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Message from './VMessage.vue';

    export default {
        name: 'VQuesting',
        components: { Message },
        props: [],
        data () {
            return {
                x : mtRand(100,200),
                y : mtRand(100,200),
                toggle: true,
                sec : 5,
                timerId : null,
                count : 4,
                message: {
                    text:'',
                    type:''
                },
                status: {
                    success:0,
                    error:0
                },
                questMax: 5,
            }
        },
        computed:{
            good() {
                return this.x + this.y;
            },
            answers() {
                let res = [this.good];
                while (res.length < 7) {
                    let num = mtRand(this.good - 20, this.good + 20);

                    if(res.indexOf(num) === -1) {
                        res.push(num);
                    }
                }
                return res.sort(function() {
                    return Math.random() - 0.5;
                });
            },
            questDone() {
                return this.status.success + this.status.error;
            },
            progressCurrent() {
                return this.questDone / this.questMax * 100;
            }
        },
        methods: {
            onTimer() {

                let obj = this;

                this.timerId = setInterval(function() {

                    if(obj.count == 0) {
                        clearInterval(obj.timerId);
                        obj.toggle = false;
                        obj.message.text = 'Не успел! Ха-ха...!'
                        obj.message.type = 'danger';
                    }
                    console.log(obj.count);
                    obj.count--;
                    obj.sec--;
                }, 1000);

            },

            onAnswer(num){
               if(num == this.good) {
                    this.message.text = 'Good Job!';
                    this.message.type = 'success';
                    this.status.success++;
                    clearInterval(this.timerId);
               }
               else {
                   this.message.text = this.x + ' + '+this.y + '=' + this.good+'!';
                   this.message.type = 'danger';
                   this.status.error++;
                   clearInterval(this.timerId);
               }
                this.toggle = false;
            },
            onReload() {
                if(this.questDone < this.questMax) {
                    this.x = mtRand(100,200);
                    this.y = mtRand(100,200);
                    this.toggle = true;
                    this.status.error++;
                    this.sec = 5;
                    this.count = 4;
                    this.onTimer();
                } else {
                    this.$router.push({ name: 'result', params: { s: this.status.success, e: this.status.error } });
                }
            }
        },
        created: function () {
            this.onTimer();
        }
    }



    function mtRand(min, max) {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1)) + min;
    }

</script>

<style scoped>
    .uk-container {
        padding: 20px;
    }
    .uk-progress {
        transition: width 5s linear;
    }
    .uk-align-center {
        text-align: center;
    }
</style>