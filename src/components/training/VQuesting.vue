<template>
    <div class="uk-container">
        <h2>Questing</h2>
        <div>
           <progress class="uk-progress" :value="progressCurrent" max="100"></progress>
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
            onAnswer(num){
               if(num == this.good) {
                    this.message.text = 'Good Job!';
                    this.message.type = 'success';
                    this.status.success++;
               }
               else {
                   this.message.text = this.x + ' + '+this.y + '=' + this.good+'!';
                   this.message.type = 'danger';
                   this.status.error++;
               }
                this.toggle = false;
            },
            onReload() {
                if(this.questDone < this.questMax) {
                    this.x = mtRand(100,200);
                    this.y = mtRand(100,200);
                    this.toggle = true;
                } else {
                    this.$router.push({ name: 'result', params: { s: this.status.success, e: this.status.error } });
                }

            }
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
</style>