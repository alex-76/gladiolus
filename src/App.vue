<template>
  <div id="app">
    <HeadPage></HeadPage>
    <router-view/>
    <FootPage></FootPage>
  </div>
</template>

<script>
    import HeadPage from './components/Head.vue'
    import FootPage from './components/Footer.vue'
    export default {
        name: 'App',
        components: { HeadPage, FootPage },
    }
</script>


