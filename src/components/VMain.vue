<template>
    <section>
        <h1><span>{{msg}}</span></h1>
        <p class="uk-align-left">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
            более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить
            навык публичных выступлений в домашних условиях. При создании генератора мы использовали
            небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от
            двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и
            живым для визуально-слухового восприятия.
        </p>
    </section>
</template>

<script>
    export default {
        name: 'VMain',
        data () {
            return {
                msg: 'Home page',
            }
        }
    }
</script>

<style scoped lang="scss">

    h1 {
        span {
            color:#32d296;
        }
    }

</style>