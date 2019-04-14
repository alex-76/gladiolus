<template>
  <div id="app">
    <HeadPage></HeadPage>
    <div class="uk-container content">
      <router-view/>
    </div>
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

<style>
  @import "/assets/css/uikit.min.css";
  @import "/assets/css/app.css";
</style>


