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
    import HeadPage from './components/VHead.vue'
    import FootPage from './components/VFooter.vue'
    export default {
        name: 'App',
        components: { HeadPage, FootPage },
    }
</script>

<style>
  @import "/assets/css/uikit.min.css";
  @import "/assets/css/app.css";
</style>


