<template>
    <div class="uk-container">
        <h2>Questing: ({{questMax}} / {{status.success + status.error }})</h2>
        <div>
           <progress class="uk-progress" :value="progressCurrent" max="100"></progress>
            <h2 class="uk-align-center" v-show="toggle">Time: 00:0{{maxsec}}</h2>

            <!--<transition-group name="list" tag="p">
                <div key="qwerty" >-->

                    <template v-if="toggle">
                    <h3 class="uk-alert-primary uk-padding">{{x}} + {{y}} = ?</h3>
                    <hr>
                    <div class="uk-button uk-button-primary uk-margin-right"
                         v-for="number in answers"
                         @click="onAnswer(number)"
                    >{{number}}
                    </div>
                </template>
                    <template v-else>
                    <template v-if="resScreen">
                        <message
                                :text="message.text"
                                :type="message.type"
                        >
                        </message>
                        <div class="uk-button uk-button-primary" @click="onReload">
                            <span class="uk-margin-small-right" uk-icon="icon: check; ratio: 1"></span>
                            <span v-html="btnValue"></span>
                        </div>
                    </template>
                    <template v-else>
                        <result
                                :success="status.success"
                                :error="status.error"

                        >
                        </result>
                    </template>
                </template>

               <!-- </div>
            </transition-group>-->

        </div>
    </div>
</template>



<script>
    import Message from './VMessage.vue';
    import Result from './VResultScreen.vue';

    export default {
        name: 'VQuesting',
        components: { Message, Result },
        props: [],
        metaInfo: {
            title: 'Training Math',
            titleTemplate: '%s | WHA!',
            meta: [
                { vmid: 'description', name: 'description', content: 'Training' },
                { vmid: 'keyword', name: 'keyword', content: 'Keyword VueJS' },
            ],
            htmlAttrs: {
                lang: 'en'
            }
        },
        data () {
            return {
                x : mtRand(100,200),
                y : mtRand(100,200),
                toggle: true,
                maxsec : 7,
                timerId : null,
                btnValue :'Continue',
                resScreen: true,
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
                while (res.length < 9) {
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

                    if(obj.maxsec == 0) {
                        obj.toggle = false;
                        obj.status.error++;
                        obj.maxsec = 0;
                        obj.message.text = 'Ой, не успел! Попробуй еще...!';
                        obj.message.type = 'danger';
                        clearInterval(obj.timerId);
                    } else {
                        obj.maxsec--;
                        console.log('sec: '+obj.maxsec);
                    }

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
                   this.message.text = 'Error: '+this.x + ' + '+this.y + '=' + this.good;
                   this.message.type = 'danger';
                   this.status.error++;
                   clearInterval(this.timerId);
               }
                this.toggle = false;

                if(this.questDone == this.questMax) {
                    this.btnValue = 'Finish';
                }
            },
            onReload() {
                if(this.questDone < this.questMax) {
                    this.x = mtRand(100,200);
                    this.y = mtRand(100,200);
                    this.toggle = true;
                    this.maxsec = 7;
                    this.onTimer();
                } else {
                    console.log('f: '+this.questDone);
                    this.resScreen = false;
                    //this.$router.push({ name: 'result', params: { s: this.status.success, e: this.status.error } });
                }
            }
        },
        created: function () {
            //this.onTimer();
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


    /*** Animation ***/
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }


    .fade-enter-active {
        animation: fadeIn 1.5s;
    }
    .fade-leave-active {
        animation: fadeIn 1.5s reverse;
    }

    @keyframes fadeIn {
        0% {
            transform: scale(0.1);
            opacity: 0;
            color: #e0e0e0;
        }
        50% {
            transform: scale(1);
            opacity: 1;
            color: #959595;
        }
        100% {
            transform: scale(1);
            color: #393939;
        }
    }
</style>